import { RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export interface Character {
  name: string
  height: string
  mass: string
  gender: string
  hair_color: string
  eye_color: string
  image: string
  url?: string
}
export interface NavBarProps {
  handlePrev: () => void
  handleNext: () => void
  page: number
}

export type RootStackParamList = {
  Home: undefined
  All: { categoryId: string }
  About: { character: Character }
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>
export type AboutScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'About'>
export type AllCharactersScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'All'>

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>
export type AboutScreenRouteProp = RouteProp<RootStackParamList, 'About'>
export type AllCharactersScreenRouteProp = RouteProp<RootStackParamList, 'All'>
