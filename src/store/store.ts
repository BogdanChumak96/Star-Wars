import starWarsSlice from './starwarsSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: { starWars: starWarsSlice }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
