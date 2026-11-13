const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const isProduction = process.env.NODE_ENV === 'production';
const distPath = path.join(__dirname, '../dist');

function parseBase64Data(data) {
  if (!data || typeof data !== 'string') return Buffer.alloc(0);
  if (data.startsWith('data:')) {
    const commaIndex = data.indexOf(',');
    if (commaIndex >= 0) {
      return Buffer.from(data.slice(commaIndex + 1), 'base64');
    }
  }
  return Buffer.from(data, 'base64');
}

async function safeJson(response) {
  try {
    return await response.json();
  } catch {
    return {};
  }
}

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.get('/api/health', (_, res) => {
  res.json({ ok: true, service: 'mr00-webhook', time: new Date().toISOString() });
});

app.post('/api/webhook/test', async (req, res) => {
  const webhookUrl = String(req.body?.webhookUrl || '').trim();

  if (!webhookUrl) {
    return res.status(400).json({ ok: false, error: 'Webhook URL is required.' });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: 'Mr00 Webhook connection test successful.' })
    });

    if (response.ok || response.status === 204) {
      return res.json({ ok: true, message: 'Webhook is valid and reachable.' });
    }

    const data = await safeJson(response);
    return res.status(response.status || 400).json({
      ok: false,
      error: data.message || data.error || 'Webhook validation failed.'
    });
  } catch (error) {
    return res.status(500).json({ ok: false, error: 'Unable to validate the webhook URL.' });
  }
});

app.post('/api/webhook/send', async (req, res) => {
  const webhookUrl = String(req.body?.webhookUrl || '').trim();
  const content = String(req.body?.content || '');
  const embeds = Array.isArray(req.body?.embeds) ? req.body.embeds : [];
  const files = Array.isArray(req.body?.files) ? req.body.files : [];
  const username = String(req.body?.username || 'Mr00 Webhook');
  const avatar_url = String(req.body?.avatar_url || '');

  if (!webhookUrl) {
    return res.status(400).json({ ok: false, error: 'Webhook URL is required.' });
  }

  try {
    if (files.length > 0) {
      const formData = new FormData();
      if (content) formData.append('content', content);
      if (username) formData.append('username', username);
      if (avatar_url) formData.append('avatar_url', avatar_url);
      if (embeds.length > 0) formData.append('embeds', JSON.stringify(embeds));

      files.forEach((file, index) => {
        const buffer = parseBase64Data(file.data || '');
        const fileName = file.name || `upload-${index}.png`;
        const mime = file.mime || 'image/png';
        formData.append(`file${index}`, new Blob([buffer], { type: mime }), fileName);
      });

      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: formData
      });

      if (response.status === 429) {
        const retryAfter = Number(response.headers.get('retry-after') || '1') * 1000;
        return res.status(429).json({ ok: false, error: 'Discord rate limit reached.', retryAfter, code: 'rate_limited' });
      }

      if (response.ok || response.status === 204) {
        return res.json({ ok: true, status: 'sent', message: 'Message sent successfully.' });
      }

      const data = await safeJson(response);
      return res.status(response.status || 500).json({ ok: false, error: data.message || data.error || 'Webhook request failed.' });
    }

    const payload = { content, username, avatar_url, embeds };
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (response.status === 429) {
      const retryAfter = Number(response.headers.get('retry-after') || '1') * 1000;
      return res.status(429).json({ ok: false, error: 'Discord rate limit reached.', retryAfter, code: 'rate_limited' });
    }

    if (response.ok || response.status === 204) {
      return res.json({ ok: true, status: 'sent', message: 'Message sent successfully.' });
    }

    const data = await safeJson(response);
    return res.status(response.status || 500).json({ ok: false, error: data.message || data.error || 'Webhook request failed.' });
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
