import React from 'react';
import {useDocusaurusContext} from '@docusaurus/theme-common';
import useDocusaurusContextHook from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function DocMeta({author, created}) {
  if (!author && !created) return null;

  const {i18n} = useDocusaurusContextHook();
  const isEn = i18n.currentLocale === 'en';

  return (
    <div className={styles.docMeta}>
      {created && <span>{isEn ? 'Created' : '작성일'}: {created}</span>}
      {author && <span>{isEn ? 'Author' : '작성자'}: {author}</span>}
    </div>
  );
}
