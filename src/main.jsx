const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const isProduction = process.env.NODE_ENV === 'production';
const distPath = path.join(__dirname, '../dist');

const sanitizeWebhookUrl = (url) => {
  if (!url || typeof url !== 'string') return '';
  return url.trim();
};

const safeJson = async (response) => {
  try {
    return await response.json();
  } catch (error) {
    return {};
  }
};

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.get('/api/health', (_, res) => {
  res.json({ ok: true, service: 'mr00-webhook', time: new Date().toISOString() });
});

app.post('/api/webhook/test', async (req, res) => {
  const webhookUrl = sanitizeWebhookUrl(req.body.webhookUrl || req.query.webhookUrl || '');

  if (!webhookUrl) {
    return res.status(400).json({ ok: false, error: 'Webhook URL is required.' });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: 'Mr00 Webhook connection test successful.' })
    });

    if (response.status === 204 || response.ok) {
      return res.json({ ok: true, message: 'Webhook is valid and reachable.' });
    }

    const data = await safeJson(response);
    return res.status(response.status || 400).json({
      ok: false,
      error: data.message || data.error || 'Webhook validation failed.'
    });
  } catch (error) {
    return res.status(500).json({ ok: false, error: 'Unable to validate webhook URL.' });
  }
});

app.post('/api/webhook/send', async (req, res) => {
  const { webhookUrl, content = '', embeds = [], username = '', avatar_url = '', files = [] } = req.body;
  const cleanUrl = sanitizeWebhookUrl(webhookUrl);

  if (!cleanUrl) {
    return res.status(400).json({ ok: false, error: 'Webhook URL is required.' });
  }

  try {
    if (files && files.length > 0) {
      const formData = new FormData();

      if (content) formData.append('content', content);
      if (username) formData.append('username', username);
      if (avatar_url) formData.append('avatar_url', avatar_url);
      if (embeds && embeds.length > 0) formData.append('embeds', JSON.stringify(embeds));

      files.forEach((file, index) => {
        const buffer = Buffer.from(file.data || '', 'base64');
        formData.append(`file${index}`, new Blob([buffer], { type: file.mime || 'application/octet-stream' }), file.name || `upload-${index}.png`);
      });

      const response = await fetch(cleanUrl, {
        method: 'POST',
        body: formData
      });

      const text = await response.text();
      if (response.status === 429) {
        const retryAfter = Number(response.headers.get('retry-after') || '1') || 1;
        return res.status(429).json({ ok: false, error: 'Discord rate limit reached.', retryAfter: retryAfter * 1000, code: 'rate_limited' });
      }

      if (response.ok || response.status === 204) {
        return res.json({ ok: true, status: 'sent', message: 'Message sent successfully.' });
      }

      return res.status(response.status || 500).json({ ok: false, error: text || 'Webhook request failed.', code: 'discord_error' });
    }

    const payload = {
      content,
      username,
      avatar_url,
      embeds
    };

    const response = await fetch(cleanUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (response.status === 429) {
      const retryAfter = Number(response.headers.get('retry-after') || '1') || 1;
      return res.status(429).json({ ok: false, error: 'Discord rate limit reached.', retryAfter: retryAfter * 1000, code: 'rate_limited' });
    }

    if (response.ok || response.status === 204) {
      return res.json({ ok: true, status: 'sent', message: 'Message sent successfully.' });
    }

    const data = await safeJson(response);
    return res.status(response.status || 500).json({ ok: false, error: data.message || data.error || 'Webhook request failed.', code: 'discord_error' });
  } catch (error) {
    return res.status(500).json({ ok: false, error: 'Failed to deliver the webhook request.' });
  }
});

if (isProduction) {
  app.use(express.static(distPath));
  app.get('*', (_, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Mr00 Webhook server running on http://localhost:${PORT}`);
});
