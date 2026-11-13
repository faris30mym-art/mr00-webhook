import { NavLink } from 'react-router-dom';
import { getText, useLanguage } from '../i18n';

const navItems = [
  { to: '/', label: 'nav.dashboard' },
  { to: '/activity', label: 'nav.activity' },
  { to: '/settings', label: 'nav.settings' },
  { to: '/about', label: 'nav.about' },
  { to: '/docs', label: 'nav.docs' }
];

export default function Layout({ children, language, setLanguage, theme, setTheme }) {
  const { t } = useLanguage();

  return (
    <div className={`app-shell ${theme} ${language}`}>
      <header className="topbar glass-panel">
        <div className="brand-wrap">
          <div className="brand-mark">M</div>
          <div>
            <div className="brand-title">{getText(language, 'appName')}</div>
            <div className="brand-sub">SaaS Webhook Console</div>
          </div>
        </div>

        <nav className="main-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {getText(language, item.label)}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <select
            className="minimal-select"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>

          <select
            className="minimal-select"
            value={theme}
            onChange={(event) => setTheme(event.target.value)}
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
      </header>

      <main className="page-shell">{children}</main>

      <nav className="mobile-nav glass-panel">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className="mobile-link">
            {getText(language, item.label)}
          </NavLink>
        ))}
      </nav>

      <footer className="footer glass-panel">
        <span>{getText(language, 'footer').replace('\n', ' ')}</span>
      </footer>
    </div>
  );
}
