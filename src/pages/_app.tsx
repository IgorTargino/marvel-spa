import { CharactersContextProvider } from "../contexts/CharactersContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <CharactersContextProvider>
      <Component {...pageProps} />
    </CharactersContextProvider>
  );
}

export default MyApp;
