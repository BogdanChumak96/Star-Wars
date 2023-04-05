import { View, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Layout = ({ children }: any): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View>{children}</View>
    </SafeAreaView>
  )
}

export default Layout
