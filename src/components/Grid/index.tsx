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
    <div>
      <p>{charactersData}</p>
    </div>
  )
}

export default Grid;
