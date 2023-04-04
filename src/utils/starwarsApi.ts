import axios from 'axios'

export const getAllCharacters = async (page: number) => {
  const res = await axios(`https://swapi.dev/api/people/?page=${page}`)
  return res.data.results
}
