import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import api from "../services/api";

interface ResultsData {
  id: number;
  name?: string;
  title?: string;
  description: string;
  thumbnail?: {
    path: string;
    extension: string;
  };
  image?: {
    path: string;
    extension: string;
  };
}

interface MarvelContextData {
  resultsData: ResultsData[];
  totalItens: number;
  loading: boolean;
  getMarvelData: (url: string, currentPage: number) => Promise<void>;

}

interface MarvelContextProviderPropr {
  children: ReactNode;
}

const MarvelContext = createContext<MarvelContextData>({} as MarvelContextData);

const MarvelContextProvider = ({children}: MarvelContextProviderPropr) => {
  const [resultsData, setResultsData] = useState<ResultsData[]>([]);
  const [totalItens, setTotalItens] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMarvelData = async (url: string, currentPage: number) => {
    const offset = ((currentPage * 15) < 0 ? 0 : ((currentPage) * 15));

    try {
      setError(null);
      setLoading(true);
      const { data } = await api.get(`${url}`, {
        params: {
          offset: offset,
          limit: 15,
        }
      });

      setTotalItens(data.data.total);
      setResultsData(data.data.results);

    } catch (error) {
      setError(error.message);
    } finally {
      console.log(resultsData);
      setLoading(false);
    }
  };

  return (
    <MarvelContext.Provider value={{
      resultsData,
      totalItens,
      loading,
      getMarvelData
    }}>
      { children }
    </MarvelContext.Provider>
  )
}

const useMarvelContext = () => {
  const context = useContext(MarvelContext);

  return context;
}

export { MarvelContextProvider, useMarvelContext }