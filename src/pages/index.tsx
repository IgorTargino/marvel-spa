import Header from "../components/Header";
import styles from "../styles/Home.module.scss";

import api from "../services/api";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    api
      .get('/characters')
      .then((response) => console.log(response.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}
