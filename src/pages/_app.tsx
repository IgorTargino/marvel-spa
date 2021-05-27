import { MarvelContextProvider } from "../context/MarvelContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <MarvelContextProvider>
      <Component {...pageProps} />
    </MarvelContextProvider>
  );
}

export default MyApp;
