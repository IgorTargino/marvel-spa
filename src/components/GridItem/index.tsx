import React from "react";

import styles from "./styles.module.scss";
interface Props {
  id: number;
  title: string;
  thumb?: string;
}

const GridItem = ({ id, title, thumb }) => {
  return (
    <figure className={styles.container} >
      <img src={thumb} alt={`${id}-${title}`} />
      <figcaption className={styles.title}>{title}</figcaption>
    </figure>
  );
};

export default GridItem;
