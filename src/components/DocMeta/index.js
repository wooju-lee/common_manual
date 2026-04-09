import React from 'react';
import styles from './styles.module.css';

export default function DocMeta({author, created}) {
  if (!author && !created) return null;

  return (
    <div className={styles.docMeta}>
      {created && <span>작성일: {created}</span>}
      {author && <span>작성자: {author}</span>}
    </div>
  );
}
