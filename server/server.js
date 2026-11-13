:root {
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.5;
  font-weight: 500;
  color: #edf2ff;
  background: #070b17;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background: radial-gradient(circle at top, rgba(120, 92, 255, 0.26), transparent 25%), linear-gradient(135deg, #070b17 0%, #0d1220 45%, #090d17 100%);
  color: #edf2ff;
}

body.light-theme {
  background: radial-gradient(circle at top, rgba(137, 123, 255, 0.12), transparent 25%), linear-gradient(135deg, #eff4ff 0%, #eef2ff 45%, #f5f7ff 100%);
  color: #0f172a;
}

button, input, textarea, select {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
  transition: 0.2s ease;
}

button:hover {
  transform: translateY(-1px);
}

input, textarea, select {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(18, 24, 38, 0.72);
  color: inherit;
  padding: 0.8rem 0.9rem;
  border-radius: 12px;
  outline: none;
}

body.light-theme input,
body.light-theme textarea,
body.light-theme select {
  background: rgba(255, 255, 255, 0.8);
  color: #0f172a;
}

.app-shell {
  min-height: 100vh;
  padding: 18px 18px 90px;
}

.glass-panel {
  background: rgba(13, 17, 28, 0.6);
  border: 1px solid rgba(165, 180, 255, 0.14);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

body.light-theme .glass-panel {
  background: rgba(255, 255, 255, 0.68);
}

.topbar {
  max-width: 1400px;
  margin: 0 auto 18px;
  padding: 18px 20px;
  border-radius: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  box-shadow: 0 0 18px rgba(124, 58, 237, 0.5);
  font-weight: 700;
}

.brand-title {
  font-weight: 700;
  font-size: 1.1rem;
}

.brand-sub {
  font-size: 0.72rem;
  opacity: 0.7;
}

.main-nav {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.nav-link {
  text-decoration: none;
  padding: 9px 12px;
  border-radius: 12px;
  color: inherit;
  opacity: 0.82;
}

.nav-link.active,
.nav-link:hover {
  background: rgba(131, 111, 255, 0.2);
  opacity: 1;
}

.header-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.minimal-select {
  max-width: 130px;
}

.page-shell {
  max-width: 1400px;
  margin: 0 auto;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 20px;
}

.panel {
  background: rgba(17, 22, 34, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 22px;
  padding: 22px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

body.light-theme .panel {
  background: rgba(255, 255, 255, 0.7);
}

.hero-panel { grid-column: span 7; }
.webhook-panel { grid-column: span 5; }
.editor-panel { grid-column: span 7; }
.preview-panel { grid-column: span 5; }
.control-panel { grid-column: span 12; }

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.panel-header h2,
.panel-header h3 {
  margin: 0;
}

.badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.76rem;
  font-weight: 700;
  background: rgba(96, 118, 255, 0.14);
  border: 1px solid rgba(125, 140, 255, 0.18);
}

.badge.sending { background: rgba(59, 130, 246, 0.18); }
.badge.paused { background: rgba(250, 204, 21, 0.18); }
.badge.completed { background: rgba(34, 197, 94, 0.18); }
.badge.error { background: rgba(239, 68, 68, 0.18); }
.badge.stopped { background: rgba(148, 163, 184, 0.18); }

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.stat-card {
  border-radius: 18px;
  padding: 18px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-card label {
  opacity: 0.7;
}

.stat-card strong {
  font-size: clamp(1.5rem, 2vw, 2.2rem);
  line-height: 1;
}

.progress-box {
  margin-top: 18px;
  border-radius: 18px;
  padding: 16px 14px;
}

.progress-head,
.progress-meta {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  font-size: 0.78rem;
  opacity: 0.68;
}

.progress-bar {
  margin-top: 12px;
  width: 100%;
  height: 10px;
  border-radius: 999px;
  background: rgba(151, 162, 255, 0.12);
  overflow: hidden;
}

.progress-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #8b5cf6, #3b82f6);
}

.field-label,
.muted-note,
.tiny-status,
.save-indicator {
  display: block;
  font-size: 0.78rem;
  opacity: 0.78;
}

.password-row,
.row-actions,
.inline-row,
.settings-row,
.estimate-box {
  display: flex;
  gap: 12px;
  align-items: center;
}

.password-row {
  margin-top: 12px;
}

.password-row input {
  flex: 1;
}

.row-actions {
  margin-top: 16px;
  flex-wrap: wrap;
}

.primary-btn,
.ghost-btn,
.danger-btn,
.outline-btn,
.tool-chip {
  border-radius: 12px;
  color: white;
  padding: 10px 14px;
}

.primary-btn {
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  box-shadow: 0 12px 24px rgba(91, 97, 255, 0.28);
}

.ghost-btn,
.outline-btn,
.tool-chip {
  background: rgba(148, 163, 184, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.danger-btn {
  background: linear-gradient(135deg, #ef4444, #b91c1c);
}

.full-width {
  width: 100%;
}

.segmented-control {
  display: flex;
  gap: 10px;
  margin-bottom: 14px;
}

.segmented-control button {
  flex: 1;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(148, 163, 184, 0.12);
  color: inherit;
}

.segmented-control button.active {
  background: rgba(124, 58, 237, 0.2);
  border: 1px solid rgba(170, 152, 255, 0.2);
}

textarea {
  min-height: 120px;
  resize: vertical;
}

.toolbar {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 14px;
}

.tool-chip {
  font-size: 0.7rem;
  padding: 8px 10px;
}

.embed-fields {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.inline-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.upload-box {
  margin-top: 18px;
  border: 1px dashed rgba(146, 159, 255, 0.2);
  border-radius: 18px;
  padding: 16px;
}

.upload-label {
  display: block;
  margin-bottom: 10px;
  opacity: 0.8;
}

.uploaded-list {
  display: grid;
  gap: 10px;
  margin-top: 12px;
}

.upload-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(125, 136, 255, 0.07);
}

.discord-preview {
  background: rgba(32, 36, 50, 0.8);
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 18px;
}

.discord-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.discord-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  font-weight: 700;
}

.discord-time {
  opacity: 0.7;
  font-size: 0.72rem;
}

.discord-body h4 {
  margin: 0 0 8px;
}

.discord-image {
  width: 100%;
  margin-top: 12px;
  border-radius: 12px;
}

.settings-row {
  margin-top: 12px;
}

.interval-row {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr 60px;
  gap: 12px;
}

.estimate-box {
  justify-content: space-between;
  margin-top: 18px;
  padding: 16px 18px;
  border-radius: 14px;
  background: rgba(109, 118, 255, 0.08);
}

.page-card {
  max-width: 980px;
  margin: 10px auto;
  border-radius: 24px;
  padding: 26px;
}

.settings-stack {
  display: grid;
  gap: 18px;
}

.field-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.toggle-row {
  justify-content: space-between;
}

.doc-list {
  display: grid;
  gap: 10px;
  padding-left: 20px;
}

.log-table {
  display: grid;
  gap: 12px;
  margin-top: 20px;
}

.log-head,
.log-row {
  display: grid;
  grid-template-columns: 1.2fr 1fr 0.9fr 2fr;
  gap: 10px;
  align-items: center;
}

.log-head {
  opacity: 0.7;
  font-size: 0.75rem;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.log-row {
  padding: 14px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.log-status.success { color: #4ade80; }
.log-status.error { color: #f87171; }

.empty-log {
  opacity: 0.7;
  padding: 18px 0;
}

.mobile-nav {
  display: none;
}

.footer {
  max-width: 1400px;
  margin: 18px auto 0;
  border-radius: 18px;
  padding: 16px 20px;
  text-align: center;
  opacity: 0.8;
}

@media (max-width: 980px) {
  .main-nav {
    display: none;
  }

  .mobile-nav {
    position: fixed;
    left: 12px;
    right: 12px;
    bottom: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    border-radius: 18px;
    z-index: 20;
    background: rgba(15, 21, 30, 0.78);
  }

  .mobile-link {
    text-decoration: none;
    color: inherit;
    font-size: 0.72rem;
    opacity: 0.8;
  }

  .hero-panel,
  .webhook-panel,
  .editor-panel,
  .preview-panel,
  .control-panel {
    grid-column: span 12;
  }

  .app-shell {
    padding-bottom: 110px;
  }
}

@media (max-width: 620px) {
  .topbar,
  .panel,
  .page-card {
    padding-left: 14px;
    padding-right: 14px;
  }

  .stats-grid,
  .inline-row,
  .interval-row,
  .log-head,
  .log-row {
    grid-template-columns: 1fr;
  }

  .field-row,
  .password-row,
  .row-actions,
  .header-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .row-actions button {
    width: 100%;
  }
}

[dir='rtl'] {
  text-align: right;
}

[dir='rtl'] .main-nav,
[dir='rtl'] .header-actions,
[dir='rtl'] .field-row,
[dir='rtl'] .password-row,
[dir='rtl'] .row-actions,
[dir='rtl'] .settings-row,
[dir='rtl'] .estimate-box,
[dir='rtl'] .progress-head,
[dir='rtl'] .progress-meta,
[dir='rtl'] .brand-wrap {
  direction: rtl;
}
