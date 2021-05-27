import { useState } from "react";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { useMarvelContext } from "../context/MarvelContext";
import styles from "../styles/Home.module.scss";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("characters");
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <div className={styles.container}>
      <Header
        inputValue={inputValue}
        setInputValue={setInputValue}
        selected={selected}
        setSelected={setSelected}
      />
      <Grid
        inputValue={inputValue}
        selected={selected}
        currentPage={currentPage}
      />

      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;
