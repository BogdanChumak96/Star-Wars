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
