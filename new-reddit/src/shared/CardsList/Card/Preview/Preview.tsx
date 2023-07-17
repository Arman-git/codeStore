import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
    <img 
      className={styles.previewImg}
      src="https://cdn.dribbble.com/users/2293994/screenshots/5326648/media/9a5ecb77e427e839c778bffc68d17579.jpg"
    />
    </div>
  );
}
