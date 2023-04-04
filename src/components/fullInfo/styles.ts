import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '70%',
    width: '100%',
    color: 'black',
    paddingHorizontal: 40
  },
  backButton: {
    marginBottom: 155,
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    width: '100%',
    height: '10%',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#000000c0'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8
  },
  value: {
    marginBottom: 16
  }
})
