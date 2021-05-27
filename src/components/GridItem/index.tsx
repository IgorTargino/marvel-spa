import React from 'react'
import styles from './styles.module.scss';

interface Props {
  id: number;
  title: string;
  thumb?: string;
}

const GridItem = ({id, title, thumb}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
          <h3>{title}</h3>
      </div>
      <img src={thumb} alt={`${id}-${title}`} />
    </div>
  )
}

export default GridItem;
