/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/home/Home'
import About from './screens/about/About'
import AllCharacters from './screens/allCharacters/AllCharacters'
import { StackNavigationProp } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import { store } from './store/store'
const queryClient = new QueryClient()
const Stack = createNativeStackNavigator()

type RootStackParamList = {
  Home: undefined
  All: undefined
  About: undefined
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>
type AllCharactersScreenNavigationProp = StackNavigationProp<RootStackParamList, 'All'>
type AboutScreenNavigationProp = StackNavigationProp<RootStackParamList, 'About'>

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="All" component={AllCharacters} />
            <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  )
}

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp
}
export type AllCharactersScreenProps = {
  navigation: AllCharactersScreenNavigationProp
}

export type AboutScreenProps = {
  navigation: AboutScreenNavigationProp
}

export default App
