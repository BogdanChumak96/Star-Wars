import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useQuery } from 'react-query'
import { styles } from './styles'

const FullInfo = ({ character }): JSX.Element => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: 'white' }}>Back</Text>
        </TouchableOpacity>
      </View>
      <View>
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
