import { getText } from '../i18n';

export default function ActivityPage({ language, logs, onClear }) {
  return (
    <div className="page-card glass-panel">
      <div className="panel-header">
        <h2>{getText(language, 'activity.title')}</h2>
        <button className="ghost-btn" onClick={onClear}>{getText(language, 'activity.clear')}</button>
      </div>

      <div className="log-table">
        <div className="log-head">
          <span>{getText(language, 'activity.operationTime')}</span>
          <span>{getText(language, 'activity.messageType')}</span>
          <span>{getText(language, 'activity.status')}</span>
          <span>{getText(language, 'activity.errorDetails')}</span>
        </div>

        {logs.length === 0 ? (
          <div className="empty-log">No activity yet.</div>
        ) : (
          logs.map((log, index) => (
            <div key={index} className="log-row">
              <span>{log.createdAt}</span>
              <span>{log.type}</span>
              <span className={`log-status ${log.status}`}>{log.status}</span>
              <span>{log.message || '—'}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
