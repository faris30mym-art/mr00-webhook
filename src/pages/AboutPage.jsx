import { getText } from '../i18n';

export default function SettingsPage({ language, setLanguage, theme, setTheme, onClearData }) {
  return (
    <div className="page-card glass-panel">
      <h2>{getText(language, 'settings.title')}</h2>
      <div className="settings-stack">
        <label className="field-row">
          <span>{getText(language, 'settings.lang')}</span>
          <select value={language} onChange={(event) => setLanguage(event.target.value)}>
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
        </label>

        <label className="field-row">
          <span>{getText(language, 'settings.theme')}</span>
          <select value={theme} onChange={(event) => setTheme(event.target.value)}>
            <option value="dark">{getText(language, 'settings.dark')}</option>
            <option value="light">{getText(language, 'settings.light')}</option>
          </select>
        </label>

        <div className="field-row toggle-row">
          <span>{getText(language, 'settings.autoSave')}</span>
          <input type="checkbox" defaultChecked readOnly />
        </div>

        <button className="danger-btn" onClick={onClearData}>{getText(language, 'settings.clearData')}</button>
      </div>
    </div>
  );
}
