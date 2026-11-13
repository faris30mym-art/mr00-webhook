import { getText } from '../i18n';

export default function AboutPage({ language }) {
  return (
    <div className="page-card glass-panel">
      <h2>{getText(language, 'about.title')}</h2>
      <p>{getText(language, 'about.description')}</p>
      <p>{getText(language, 'about.text')}</p>
    </div>
  );
}
