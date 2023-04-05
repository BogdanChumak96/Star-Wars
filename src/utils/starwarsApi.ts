import axios from 'axios'
import { Character } from '../common/types/types'

export const getAllCharacters = async (page: number) => {
  const res = await axios(`https://swapi.dev/api/people/?page=${page}`)
  const characters = res.data.results
  const charactersWithImages = characters.map((character: Character) => {
    return {
      ...character,
      image: `https://starwars-visualguide.com/assets/img/characters/${getCharacterId(character.url)}.jpg`
    }
  })
  return charactersWithImages
}
const getCharacterId = (url: string): string | undefined => {
  const matches = url.match(/\/(\d+)\/$/)
  if (matches) {
    return matches[1]
  }
  return undefined
}
