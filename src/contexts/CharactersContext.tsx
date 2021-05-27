import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import api from "../services/api";

interface CharacterData {
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface CharactersContextData {
  charactersData: Array<CharacterData>;
  getCharactersData: () => Promise<void>;
}

interface CharactersContextProviderProps {
  children: ReactNode;
}

const CharactersContext = createContext<CharactersContextData>(
  {} as CharactersContextData
);

const CharactersContextProvider = ({ children }: CharactersContextProviderProps) => {
  const [charactersData, setCharactersData] = useState();
  const [newUpdate, setNewUpdate] = useState(false)
  const [error, setError] = useState(null);

  const getCharactersData = useCallback(async () => {
    try {
      setError(null);
      const { data } = await api.get('/');
      setCharactersData(data);
      console.log(data);
    } catch (errors) {
      setError(errors.message);
    }
  }, []);


  return (
    <CharactersContext.Provider value={{
      charactersData,
      getCharactersData
    }}>

    </CharactersContext.Provider>
  )
}

const useCharacter = () => {
  const context = useContext(CharactersContext);

  return context;
}

export { CharactersContextProvider, useCharacter };
