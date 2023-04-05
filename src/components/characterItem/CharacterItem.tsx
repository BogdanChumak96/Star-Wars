import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import { addToFavorites, isFavorite } from '../../store/starwarsSlice'
import Ionicons from 'react-native-vector-icons/Ionicons'

const CharacterListItem = ({ character }: any) => {
  // console.log(character.image)

  const navigation = useNavigation()
  const isFav = useAppSelector(state => isFavorite(state, character.name))
  const dispatch = useAppDispatch()
  const handlePress = () => {
    navigation.navigate('About', { character })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <View style={{flex:1, flexDirection: 'row'}}>
          <Image
            resizeMode="contain"
            style={{ height: '100%',
             width: '30%',
              marginRight: 8,
            borderRadius: 5 }}
            alt={character.name}
            source={{ uri: character.image }}
          />
          <View>
            <Text style={styles.text}>Name: {character.name}</Text>
            <Text style={styles.text}>Height: {character.height}</Text>
            <Text style={styles.text}>Mass: {character.mass}</Text>
            <Text style={styles.text}>Gender: {character.gender}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          onPress={() => {
            dispatch(addToFavorites(character))
          }}
        >
          <Ionicons
            testID="prevButton"
            name={!isFav ? 'heart-outline' : 'heart-sharp'}
            color={!isFav ? 'rgba(255, 255, 255, .9)' : 'rgba(255, 255, 255, .9)'}
            size={50}
            style={styles.icons}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CharacterListItem
