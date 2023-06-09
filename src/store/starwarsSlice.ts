import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface Character {
  name: string
  gender: 'male' | 'female' | 'n/a'
  isFavorite?: boolean
}

export interface CounterState {
  femaleFans: number
  maleFans: number
  othersFans: number
  favorites: Character[]
}

const initialState: CounterState = {
  femaleFans: 0,
  maleFans: 0,
  othersFans: 0,
  favorites: []
}

export const starWarsSlice = createSlice({
  name: 'fans',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Character>) => {
      const character = action.payload
      const index = state.favorites.findIndex(c => c.name === character.name)
      if (index === -1) {
        // Add character to favorites
        state.favorites.push({ ...character, isFavorite: true })
        if (character.gender === 'male') {
          state.maleFans += 1
        } else if (character.gender === 'female') {
          state.femaleFans += 1
        } else {
          state.othersFans += 1
        }
      } else {
        // Remove character from favorites
        state.favorites.splice(index, 1)
        if (character.gender === 'male') {
          state.maleFans -= 1
        } else if (character.gender === 'female') {
          state.femaleFans -= 1
        } else {
          state.othersFans -= 1
        }
      }
    },
    clearFavorites: state => {
      state.favorites = []
      state.maleFans = 0
      state.femaleFans = 0
      state.othersFans = 0
    }
  }
})

export const selectIsFavorite = (state: RootState, character: Character) => {
  const favorites = state.starWars.favorites
  return favorites.findIndex(c => c.name === character.name) !== -1
}

export const isFavorite = (state: RootState, name: string): boolean => {
  const favorites = state.starWars.favorites
  const index = favorites.findIndex(c => c.name === name)
  return index !== -1
}

export const { addToFavorites, clearFavorites } = starWarsSlice.actions

export default starWarsSlice.reducer
