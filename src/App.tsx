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
import { Provider } from 'react-redux'
import { store } from './store/store'
import Home from './screens/home/Home'
import About from './screens/about/About'
import AllCharacters from './screens/allCharacters/AllCharacters'
import { RootStackParamList } from './common/types/types'

const queryClient = new QueryClient()

type Props = {}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App: React.FC<Props> = () => {
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

export default App
