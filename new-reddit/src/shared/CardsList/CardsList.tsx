import React from 'react';
import styles from './cardslist.css';
import { Card } from './Card/Card';

interface ICardsListProps {
  children ?: React.ReactNode;
}

export function CardsList({ children }: ICardsListProps) {
  return (
    <ul className={styles.cardslist}>
      { children }
    </ul>
  );
}

// export function CardsList() {
//   return (
//     <ul className={styles.cardslist}>
//       <Card />
//     </ul>
//   );
// }
