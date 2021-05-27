import { url } from 'inspector';
import React from 'react'
import styles from './styles.module.scss';
interface Props {
  id: number;
  title: string;
  thumb?: string;
}

const GridItem = ({id, title, thumb}) => {
  return (
    <div className={styles.container} >
      <img src={thumb} alt={`${id}-${title}`} />
      <div>{title}</div>
    </div>
  )
}

export default GridItem;
