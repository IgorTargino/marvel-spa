import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

import styles from "./styles.module.scss";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [type, setType] = useState("");

  return (
    <header className={styles.container}>
      <div className={styles.maxWidth}>
        <div className={styles.info}>
          <AiOutlineInfoCircle size={20} color="white"/>
        </div>
        <div className={styles.logo}>
          <img src="./logo.png" alt="logo da marvel" />
        </div>

        <div className={styles.search}>
          <input
            type="search"
            placeholder="Spider Man"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <select value={type} onChange={(event) => setType(event.target.value)}>
            <option defaultValue="characters">personagens</option>
            <option value="stories">histórias</option>
            <option value="series">series</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
