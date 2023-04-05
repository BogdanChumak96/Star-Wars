import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { getAllCharacters } from '../../utils/starwarsApi'
import CharacterListItem from '../characterItem/CharacterItem'
import { styles } from './styles'
import NavBar from '../navbar/NavBar'
import Loader from '../loader/Loader'

const CharacterList = (): JSX.Element => {
  const [page, setPage] = useState<number>(1)
  const { isLoading, data } = useQuery(['characters', page], () => getAllCharacters(page))

  const handlePrev = () => {
    page > 1 && setPage(Math.max(page - 1, 1))
  }

  const handleNext = () => {
    page < 9 && setPage(page + 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Characters</Text>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={item => item.name}
        //TODO: loader
        renderItem={({ item }) => (isLoading ? <Loader /> : <CharacterListItem character={item} />)}
      />
      <NavBar page={page} handleNext={handleNext} handlePrev={handlePrev} />
    </View>
  )
}

export default CharacterList
