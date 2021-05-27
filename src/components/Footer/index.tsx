import React, { useEffect, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import { useMarvelContext } from "../../context/MarvelContext";
import styles from "./styles.module.scss";

interface Props {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Footer = ({ currentPage, setCurrentPage }: Props) => {
  const { resultsData, totalItens } = useMarvelContext();
  const [current, setCurrent] = useState(0);

  const totalsPages = Math.floor(totalItens / 15) + 1;
  const lastLimit = totalItens%15;

  const nextPage = () => {
    console.log(currentPage, totalsPages);
    if (currentPage < totalsPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <footer className={styles.container}>
      <div className={styles.maxWidth}>
        <button onClick={previousPage}>
          <BiLeftArrow size={20} />
        </button>
        <div className={styles.currentPage}>{currentPage}</div>
        <button onClick={nextPage}>
          <BiRightArrow size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
