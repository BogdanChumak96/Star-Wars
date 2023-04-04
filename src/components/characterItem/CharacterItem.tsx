import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch } from '../../utils/hooks'
import { addToFavorites } from '../../store/starwarsSlice'
import Ionicons from 'react-native-vector-icons/Ionicons'

const CharacterListItem = ({ character }: any) => {
  const navigation = useNavigation()
  const [click, setClick] = useState(false)
  const dispatch = useAppDispatch()
  const handlePress = () => {
    navigation.navigate('About', { character })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <View>
          <Text style={styles.text}>{character.name}</Text>
          <Text style={styles.text}>Height: {character.height}</Text>
          <Text style={styles.text}>Mass: {character.mass}</Text>
          <Text style={styles.text}>Gender: {character.gender}</Text>
        </View>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          onPress={() => {
            setClick(prev => !prev)
            dispatch(addToFavorites(character))
          }}
        >
          <Ionicons
            testID="prevButton"
            name="md-add-circle-outline"
            color={click ? 'rgba(255, 255, 255, .9)' : 'rgba(0, 0, 0, .9)'}
            size={50}
            style={{ backgroundColor: 'transparent' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CharacterListItem
