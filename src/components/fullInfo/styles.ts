import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    justifyItems: 'center',
    gap: 10,
    backgroundColor: '#000000c0',
    height: '100%',
    width: '100%',
    color: 'white'
    // paddingHorizontal: 40
  },
  backButton: {
    marginBottom: 15,
    color: 'white',
    fontSize: 62,
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
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
    // marginBottom: 16
  },
  image: {
    height: '60%',
    width: '80%',
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10
  },
  label: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8
  }
})
