import React, { useEffect, useState } from "react";
import { useMarvelContext } from "../../context/MarvelContext";
import GridItem from "../GridItem";
import Loading from "../Loading";
import styles from "./styles.module.scss";

interface Props {
  inputValue: string;
  selected: string;
  currentPage: number;
}

const Grid = ({ inputValue, selected, currentPage }: Props) => {
  const { getMarvelData, loading, resultsData } = useMarvelContext();

  useEffect(() => {
    if (inputValue === "") getMarvelData(`/${selected}`, currentPage);
    else {
      getMarvelData(
        `/${selected}?${
          selected === "characters" ? "name" : "title"
        }StartsWith=${inputValue}`,
        currentPage
      );
    }
  }, [inputValue, selected, currentPage]);

  return (
    <main className={styles.container}>
      <div className={styles.maxWidth}>
        {resultsData.map((data, index) => {
          return (
            <GridItem
              id={data.id}
              title={data.name ? data.name : data.title}
              thumb={`${data.thumbnail.path}.${data.thumbnail.extension}`}
              key={index}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Grid;
