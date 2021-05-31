import React from "react";

import styles from "./styles.module.scss";

interface Props {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({
  inputValue,
  setInputValue,
  selected,
  setSelected,
}: Props) => {
  return (
    <header className={styles.container}>
      <div className={styles.maxWidth}>
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
          <select
            value={selected}
            onChange={(event) => setSelected(event.target.value)}
          >
            <option defaultValue="characters">characters</option>
            <option value="series">series</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
