import { getText } from '../i18n';

export default function DocsPage({ language }) {
  const items = [
    getText(language, 'docs.step1'),
    getText(language, 'docs.step2'),
    getText(language, 'docs.step3'),
    getText(language, 'docs.step4'),
    getText(language, 'docs.step5')
  ];

  return (
    <div className="page-card glass-panel">
      <h2>{getText(language, 'docs.title')}</h2>
      <p>{getText(language, 'docs.intro')}</p>
      <ol className="doc-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
