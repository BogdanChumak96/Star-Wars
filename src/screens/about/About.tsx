import React from 'react'
import Layout from '../../components/layout/Layout'
import FullInfo from '../../components/fullInfo/FullInfo'
import { AboutScreenRouteProp } from '../../App'
import { useRoute } from '@react-navigation/native'

type Props = {
  route: AboutScreenRouteProp
}

const About: React.FC<Props> = ({ route }) => {
  const { params } = useRoute()
  const character = params?.character

  return (
    <Layout>
      <FullInfo character={character} />
    </Layout>
  )
}

export default About
