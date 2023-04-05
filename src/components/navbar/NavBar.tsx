import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import { clearFavorites } from '../../store/starwarsSlice'
import { styles } from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavBarProps } from '../../common/types/types'

const NavBar = ({ handlePrev, handleNext, page }: NavBarProps) => {
  const dispatch = useAppDispatch()
  const maleFans = useAppSelector(state => state.starWars.maleFans)
  const femaleFans = useAppSelector(state => state.starWars.femaleFans)
  const otherFans = useAppSelector(state => state.starWars.othersFans)

  return (
    <View style={styles.container}>
      <TouchableOpacity disabled={page <= 1} onPress={handlePrev}>
        <Ionicons
          testID="prevButton"
          name="ios-arrow-back-outline"
          color={page <= 1 ? 'rgba(100, 100, 100, .9)' : 'rgba(255, 255, 255, .9)'}
          size={30}
          style={{ backgroundColor: 'transparent' }}
        />
      </TouchableOpacity>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Ionicons
          testID="prevButton"
          name="ios-male"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
        <Text style={styles.icons}> {maleFans}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Ionicons
          testID="prevButton"
          name="ios-female"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
        <Text style={styles.icons}> {femaleFans}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Ionicons
          testID="prevButton"
          name="ios-male-female-sharp"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
        <Text style={styles.icons}>{otherFans}</Text>
      </View>

      <TouchableOpacity onPress={() => dispatch(clearFavorites())}>
        <View>
          <Ionicons
            testID="prevButton"
            name="md-trash-bin-outline"
            color="rgba(255, 255, 255, .9)"
            size={24}
            style={{ backgroundColor: 'transparent' }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity disabled={page >= 9} onPress={handleNext}>
        <Ionicons
          color={page >= 9 ? 'rgba(100, 100, 100, .9)' : 'rgba(255, 255, 255, .9)'}
          testID="nextButton"
          name="ios-arrow-forward-outline"
          size={30}
          style={{ backgroundColor: 'transparent' }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default NavBar
