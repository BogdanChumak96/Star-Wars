import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useQuery } from 'react-query'
import { styles } from './styles'
import { Character } from '../../common/types/types'
import Ionicons from 'react-native-vector-icons/Ionicons'

type FullInfoProps = {
  character: Character
}

const FullInfo = ({ character }: FullInfoProps): JSX.Element => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <View>
          <Ionicons
            testID="prevButton"
            name="return-down-back"
            color="rgba(255, 255, 255, .9)"
            size={30}
            style={{ backgroundColor: 'transparent' }}
          />
        </View>
      </TouchableOpacity>
      <View>
        <Image style={styles.image} alt={character.name} source={{ uri: character.image }} />
        <Text style={styles.title}>Name: {character.name}</Text>
        <Text style={styles.label}>Height: {character.height}</Text>
        <Text style={styles.label}>Mass: {character.mass}</Text>
        <Text style={styles.label}>Gender: {character.gender}</Text>
        <Text style={styles.label}>Hair color: {character.hair_color}</Text>
        <Text style={styles.label}>Eye color: {character.eye_color}</Text>
      </View>
    </View>
  )
}

export default FullInfo
