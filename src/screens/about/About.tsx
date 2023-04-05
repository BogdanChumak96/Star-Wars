import React from 'react'
import Layout from '../../components/layout/Layout'
import FullInfo from '../../components/fullInfo/FullInfo'
import { useRoute } from '@react-navigation/native'
import { AboutScreenRouteProp } from '../../common/types/types'

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
