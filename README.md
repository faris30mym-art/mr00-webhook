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
  background:
    radial-gradient(circle at top, rgba(100, 120, 255, 0.28), transparent 30%),
    linear-gradient(135deg, #070b17 0%, #110d1f 34%, #090e1a 100%);
  color: #edf2ff;
}

body.light-theme {
  background:
    radial-gradient(circle at top, rgba(120, 110, 255, 0.14), transparent 26%),
    linear-gradient(135deg, #eff2ff 0%, #edf1ff 35%, #f3f6ff 100%);
  color: #111827;
}

button, input, textarea, select {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
  transition: 0.25s ease;
}

input, textarea, select {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(15, 20, 38, 0.7);
  color: inherit;
  padding: 0.9rem 1rem;
  border-radius: 12px;
  outline: none;
}

body.light-theme input,
body.light-theme textarea,
body.light-theme select {
  background: rgba(255, 255, 255, 0.8);
  color: #121826;
}

.app-shell {
  min-height: 100vh;
  padding: 24px 22px 90px;
}

.glass-panel {
  background: rgba(17, 22, 35, 0.62);
  border: 1px solid rgba(157, 156, 255, 0.18);
  box-shadow: 0 18px 40px rgba(7, 12, 18, 0.35);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

body.light-theme .glass-panel {
  background: rgba(255, 255, 255, 0.68);
}

.topbar {
  max-width: 1400px;
  margin: 0 auto 24px;
  padding: 18px 20px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  box-shadow: 0 0 28px rgba(120, 109, 255, 0.6);
  font-size: 1.4rem;
  font-weight: 700;
}

.brand-title {
  font-weight: 700;
  font-size: 1.15rem;
}

.brand-sub {
  opacity: 0.7;
  font-size: 0.72rem;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.nav-link {
  text-decoration: none;
  color: #dfe7ff;
  opacity: 0.8;
  padding: 10px 13px;
  border-radius: 10px;
  transition: 0.2s ease;
}

.nav-link.active,
.nav-link:hover {
  opacity: 1;
  background: rgba(116, 92, 255, 0.18);
  box-shadow: inset 0 0 0 1px rgba(153, 164, 255, 0.2);
}

body.light-theme .nav-link {
  color: #162033;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.minimal-select {
  max-width: 120px;
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
  background: rgba(16, 22, 36, 0.7);
  border: 1px solid rgba(165, 170, 255, 0.12);
  border-radius: 22px;
  padding: 22px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

body.light-theme .panel {
  background: rgba(255, 255, 255, 0.7);
}

.hero-panel {
  grid-column: span 7;
}

.webhook-panel {
  grid-column: span 5;
}

.editor-panel {
  grid-column: span 7;
}

.preview-panel {
  grid-column: span 5;
}

.control-panel {
  grid-column: span 12;
}

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
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  background: rgba(94, 148, 255, 0.12);
  border: 1px solid rgba(138, 171, 255, 0.25);
}

.badge.sending { background: rgba(59, 130, 246, 0.18); }
.badge.paused { background: rgba(250, 204, 21, 0.18); }
.badge.completed { background: rgba(34, 197, 94, 0.2); }
.badge.error { background: rgba(239, 68, 68, 0.2); }
.badge.stopped { background: rgba(148, 163, 184, 0.2); }

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.stat-card {
  border-radius: 18px;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.stat-card label {
  opacity: 0.75;
}

.stat-card strong {
  font-size: clamp(1.4rem, 2vw, 2.2rem);
  line-height: 1;
}

.progress-box {
  margin-top: 18px;
  border-radius: 18px;
  padding: 18px 16px;
}

.progress-head,
.progress-meta {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  font-size: 0.82rem;
  opacity: 0.8;
}

.progress-bar {
  margin-top: 12px;
  width: 100%;
  height: 10px;
  border-radius: 999px;
  background: rgba(140, 138, 255, 0.12);
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
  font-size: 0.8rem;
  opacity: 0.8;
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
  padding: 10px 14px;
  color: white;
}

.primary-btn {
  background: linear-gradient(135deg, #7c3aed, #2563eb);
  box-shadow: 0 12px 30px rgba(101, 98, 255, 0.42);
}

.ghost-btn,
.outline-btn,
.tool-chip {
  background: rgba(148, 163, 184, 0.12);
  border: 1px solid rgba(204, 214, 255, 0.1);
}

.danger-btn {
  background: linear-gradient(135deg, #ef4444, #b91c1c);
}

.full-width {
  width: 100%;
}

.save-indicator {
  margin-top: 12px;
}

.muted-note {
  margin-top: 10px;
}

.segmented-control {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}

.segmented-control button {
  flex: 1;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(148, 163, 184, 0.12);
  color: inherit;
}

.segmented-control button.active {
  background: rgba(124, 58, 237, 0.22);
  border: 1px solid rgba(164, 147, 255, 0.28);
}

textarea {
  min-height: 120px;
  resize: vertical;
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.tool-chip {
  font-size: 0.72rem;
  padding: 8px 10px;
}

.embed-fields {
  margin-top: 18px;
  display: grid;
  gap: 12px;
}

.inline-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.upload-box {
  margin-top: 18px;
  border: 1px dashed rgba(169, 177, 255, 0.2);
  border-radius: 18px;
  padding: 16px;
}

.upload-label {
  display: block;
  margin-bottom: 12px;
  opacity: 0.8;
}

.uploaded-list {
  display: grid;
  gap: 12px;
  margin-top: 12px;
}

.upload-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(137, 146, 255, 0.08);
}

.discord-preview {
  background: rgba(38, 42, 58, 0.8);
  border-radius: 18px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.discord-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.discord-avatar {
  width: 36px;
  height: 36px;
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
  border-radius: 14px;
  margin-top: 12px;
}

.settings-row {
  margin-top: 14px;
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
  background: rgba(118, 128, 255, 0.1);
}

.page-card {
  max-width: 980px;
  margin: 10px auto;
  border-radius: 22px;
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
  padding-left: 20px;
  display: grid;
  gap: 10px;
}

.log-table {
  margin-top: 18px;
  display: grid;
  gap: 12px;
}

.log-head,
.log-row {
  display: grid;
  grid-template-columns: 1.2fr 1fr 0.9fr 2fr;
  gap: 10px;
  align-items: center;
}

.log-head {
  opacity: 0.75;
  font-size: 0.78rem;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.log-row {
  padding: 14px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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
  margin: 20px auto 0;
  border-radius: 18px;
  padding: 16px 20px;
  text-align: center;
  opacity: 0.85;
}

@media (max-width: 980px) {
  .topbar {
    flex-wrap: wrap;
  }

  .hero-panel,
  .webhook-panel,
  .editor-panel,
  .preview-panel,
  .control-panel {
    grid-column: span 12;
  }

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
    padding: 10px 10px;
    border-radius: 18px;
    z-index: 20;
  }

  .mobile-link {
    text-decoration: none;
    color: inherit;
    font-size: 0.72rem;
    opacity: 0.8;
  }

  .app-shell {
    padding-bottom: 120px;
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

[dir='rtl'] .main-nav,
[dir='rtl'] .header-actions,
[dir='rtl'] .brand-wrap,
[dir='rtl'] .field-row,
[dir='rtl'] .password-row,
[dir='rtl'] .row-actions,
[dir='rtl'] .settings-row,
[dir='rtl'] .estimate-box,
[dir='rtl'] .progress-head,
[dir='rtl'] .progress-meta,
[dir='rtl'] .theme-panel,
[dir='rtl'] .log-head,
[dir='rtl'] .log-row {
  direction: rtl;
}
