import { MarginBottom } from './../../../node_modules/csstype/index.d'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: '99%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyItems: 'center',
    alignItems: 'center',
    backgroundColor: '#000000c0',
   
  },
  header: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  
  },
  list: {
    paddingHorizontal: 15,
    flex: 1,
    borderColor: 'black'
  }
})
