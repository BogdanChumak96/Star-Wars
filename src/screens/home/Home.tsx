import React from 'react'
import Layout from '../../components/layout/Layout'
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

const Home = (): JSX.Element => {
  const navigate = useNavigation()
  return (
    <Layout>
      <ImageBackground
        style={styles.backgroundImage}
        source={{
          uri: 'https://w0.peakpx.com/wallpaper/808/293/HD-wallpaper-clone-wars-star-star-wars-war-thumbnail.jpg'
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigate.navigate('All')
          }}
        >
          <View style={styles.container}>
            <View>
              <Text style={styles.header}>Star Wars</Text>
              <Text style={styles.startApp}>click to start</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </Layout>
  )
}

export default Home
