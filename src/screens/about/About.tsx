import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../../components/layout/Layout'
import FullInfo from '../../components/fullInfo/FullInfo'

import { useRoute } from '@react-navigation/native'
const About = (): JSX.Element => {
  const { params } = useRoute()
  const character = params?.character

  return (
    <Layout>
      <FullInfo character={character} />
    </Layout>
  )
}

export default About
