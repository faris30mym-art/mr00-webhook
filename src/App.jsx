import { getText } from '../i18n';

export default function DashboardPage({
  language,
  stats,
  status,
  progress,
  settings,
  logs,
  onStart,
  onPause,
  onResume,
  onStop,
  onClear,
  onWebhookTest,
  onWebhookUrlChange,
  onShowHideUrl,
  webhookVisible,
  onCopyWebhook,
  setDraftValue,
  setEmbedValue,
  messageDraft,
  embed,
  uploadedFiles,
  onUploadFiles,
  onRemoveUpload,
  onToggleMessageType,
  messageType,
  onSave,
  saveState
}) {
  const pct = progress.total ? Math.round((progress.current / progress.total) * 100) : 0;
  const lastLog = logs[0] || null;
  const sendStatus = {
    ready: getText(language, 'status.ready'),
    sending: getText(language, 'status.sending'),
    paused: getText(language, 'status.paused'),
    completed: getText(language, 'status.completed'),
    error: getText(language, 'status.error'),
    stopped: getText(language, 'status.stopped')
  }[status] || getText(language, 'status.ready');

  const estimate = Math.max(0.5, (Number(settings.messageCount || 1) * Number(settings.interval || 1)) / 2);

  return (
    <div className="dashboard-grid">
      <section className="panel hero-panel">
        <div className="panel-header">
          <h2>{getText(language, 'appName')}</h2>
          <span className={`badge ${status}`}>{sendStatus}</span>
        </div>

        <div className="stats-grid">
          <div className="stat-card glass-panel">
            <label>{getText(language, 'common.totalMessages')}</label>
            <strong>{stats.total}</strong>
          </div>
          <div className="stat-card glass-panel">
            <label>{getText(language, 'common.successfulMessages')}</label>
            <strong>{stats.success}</strong>
          </div>
          <div className="stat-card glass-panel">
            <label>{getText(language, 'common.failedMessages')}</label>
            <strong>{stats.failed}</strong>
          </div>
          <div className="stat-card glass-panel">
            <label>{getText(language, 'common.remainingMessages')}</label>
            <strong>{stats.remaining}</strong>
          </div>
        </div>

        <div className="progress-box glass-panel">
          <div className="progress-head">
            <span>{getText(language, 'common.lastActivity')}</span>
            <strong>{lastLog ? lastLog.createdAt : '—'}</strong>
          </div>
          <div className="progress-bar">
            <span style={{ width: `${pct}%` }}></span>
          </div>
          <div className="progress-meta">
            <span>{progress.current}/{progress.total}</span>
            <span>{pct}%</span>
          </div>
        </div>
      </section>

      <section className="panel webhook-panel">
        <div className="panel-header">
          <h3>{getText(language, 'webhook.title')}</h3>
          <span className="tiny-status">{getText(language, 'webhook.status')}</span>
        </div>

        <label className="field-label">{getText(language, 'webhook.url')}</label>
        <div className="password-row">
          <input
            type={webhookVisible ? 'text' : 'password'}
            value={settings.webhookUrl}
            onChange={(event) => onWebhookUrlChange(event.target.value)}
            placeholder="https://discord.com/api/webhooks/..."
          />
          <button className="outline-btn" onClick={onShowHideUrl}>{webhookVisible ? getText(language, 'common.hide') : getText(language, 'common.show')}</button>
        </div>

        <div className="row-actions">
          <button className="primary-btn" onClick={onWebhookTest}>{getText(language, 'common.test')}</button>
          <button className="ghost-btn" onClick={onCopyWebhook}>{getText(language, 'common.copy')}</button>
        </div>

        <div className="save-indicator">{saveState}</div>
        <div className="muted-note">{getText(language, 'webhook.secretNote')}</div>
      </section>

      <section className="panel editor-panel">
        <div className="panel-header">
          <h3>{getText(language, 'editor.title')}</h3>
          <button className="ghost-btn" onClick={onSave}>{getText(language, 'common.save')}</button>
        </div>

        <div className="segmented-control">
          <button className={messageType === 'normal' ? 'active' : ''} onClick={() => onToggleMessageType('normal')}>{getText(language, 'common.normalMessage')}</button>
          <button className={messageType === 'embed' ? 'active' : ''} onClick={() => onToggleMessageType('embed')}>{getText(language, 'common.embedMessage')}</button>
        </div>

        <label className="field-label">{getText(language, 'editor.content')}</label>
        <textarea
          rows={8}
          value={messageDraft}
          onChange={(event) => setDraftValue('messageDraft', event.target.value)}
          placeholder="Write your Discord message here..."
        />

        <div className="toolbar">
          {['**bold**', '*italic*', '__underline__', '~~strike~~', '`code`', '[link](https://example.com)', '- list item'].map((item) => (
            <button key={item} className="tool-chip" onClick={() => setDraftValue('messageDraft', messageDraft + item)}>{item}</button>
          ))}
        </div>

        <div className="embed-fields">
          <input value={embed.title || ''} onChange={(e) => setEmbedValue('title', e.target.value)} placeholder={getText(language, 'editor.embedTitle')} />
          <textarea value={embed.description || ''} onChange={(e) => setEmbedValue('description', e.target.value)} placeholder={getText(language, 'editor.embedDescription')} />
          <div className="inline-row">
            <input value={embed.color || '#5865F2'} onChange={(e) => setEmbedValue('color', e.target.value)} placeholder={getText(language, 'editor.embedColor')} />
            <input value={embed.url || ''} onChange={(e) => setEmbedValue('url', e.target.value)} placeholder={getText(language, 'editor.embedUrl')} />
          </div>
          <input value={embed.authorName || ''} onChange={(e) => setEmbedValue('authorName', e.target.value)} placeholder={getText(language, 'editor.authorName')} />
          <input value={embed.authorUrl || ''} onChange={(e) => setEmbedValue('authorUrl', e.target.value)} placeholder={getText(language, 'editor.authorUrl')} />
        </div>

        <div className="upload-box">
          <label className="upload-label">{getText(language, 'common.uploadedFiles')}</label>
          <input type="file" multiple onChange={onUploadFiles} accept="image/png,image/jpeg,image/gif,image/webp" />
          <div className="uploaded-list">
            {uploadedFiles.map((file) => (
              <div className="upload-item" key={file.id}>
                <span>{file.name}</span>
                <small>{Math.round(file.size / 1024)} KB</small>
                <button onClick={() => onRemoveUpload(file.id)}>{getText(language, 'common.remove')}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel preview-panel">
        <div className="panel-header">
          <h3>{getText(language, 'common.preview')}</h3>
        </div>
        <div className="discord-preview">
          <div className="discord-header">
            <div className="discord-avatar">M</div>
            <div>
              <strong>Mr00</strong>
              <div className="discord-time">Today at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            </div>
          </div>
          <div className="discord-body">
            {messageType === 'embed' ? (
              <>
                {embed.title && <h4>{embed.title}</h4>}
                {embed.description && <p>{embed.description}</p>}
                {uploadedFiles[0] && <img src={uploadedFiles[0].preview || uploadedFiles[0].data} alt="preview" className="discord-image" />}
              </>
            ) : (
              <p>{messageDraft || 'Your message preview will appear here.'}</p>
            )}
          </div>
        </div>
      </section>

      <section className="panel control-panel">
        <div className="panel-header">
          <h3>{getText(language, 'editor.messageCount')}</h3>
        </div>

        <div className="settings-row">
          <input
            type="range"
            min="1"
            max="100"
            value={settings.messageCount}
            onChange={(event) => setDraftValue('messageCount', Number(event.target.value))}
          />
          <input
            type="number"
            min="1"
            max="100"
            value={settings.messageCount}
            onChange={(event) => setDraftValue('messageCount', Number(event.target.value))}
          />
        </div>

        <div className="settings-row interval-row">
          <label>{getText(language, 'editor.interval')}</label>
          <input
            type="range"
            min="0.5"
            max="10"
            step="0.5"
            value={settings.interval}
            onChange={(event) => setDraftValue('interval', Number(event.target.value))}
          />
          <input
            type="number"
            min="0.5"
            max="10"
            step="0.5"
            value={settings.interval}
            onChange={(event) => setDraftValue('interval', Number(event.target.value))}
          />
          <span>{getText(language, 'editor.intervalSeconds')}</span>
        </div>

        <div className="estimate-box">
          <strong>{getText(language, 'editor.estimate')}</strong>
          <span>{estimate.toFixed(1)}s</span>
        </div>

        <div className="row-actions full-width">
          <button className="primary-btn" onClick={onStart}>{getText(language, 'common.start')}</button>
          <button className="ghost-btn" onClick={onPause}>{getText(language, 'common.pause')}</button>
          <button className="ghost-btn" onClick={onResume}>{getText(language, 'common.resume')}</button>
          <button className="danger-btn" onClick={onStop}>{getText(language, 'common.stop')}</button>
          <button className="ghost-btn" onClick={onClear}>{getText(language, 'common.clear')}</button>
        </div>
      </section>
    </div>
  );
}
