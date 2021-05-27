import React, { useEffect } from 'react'
import { useCharacter } from '../../contexts/CharactersContext';

import styles from './styles.module.scss';

interface CharacterData {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Grid = () => {
  const {getCharactersData, charactersData} = useCharacter();

  useEffect(() => {
    getCharactersData()
  }, [])

  return (
    <main className={styles.container}>
      <ul>
        {charactersData.map((character: CharacterData) => (
          <li key={character.id}>
            <h1>{character.name}</h1>
            <img src={character.thumbnail.path + character.thumbnail.extension} alt="" />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Grid;
