// import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function About ({ navigation }) {
  const goAbout = () => {
    navigation.navigate('About')
  }

  return (
    <View style={styles.container}>
      <Text>Bienvenido a </Text>

      <Button style={styles.iniciar} title='Ir About' onPress={goAbout} backgroundColor='red'/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 20,
    shadowRadius: 0,
    shadowColor: 'transparent'
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 10,
    width: 200
  },
  formulario: {
    alignItems: 'center',
    backgroundColor: '#eee',
    borderStyle: 2,
    borderColor: 'black',
    shadowRadius: 5,
    shadowColor: '#177245',
    height: 290,
    width: 330
  },
  nombre: {
    paddingTop: 10
  },
  item: {
    flexDirection: 'row',
    display: 'block'
    /* padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'Dashed',
    borderRadius: 10 */

  },
  imagen: {
    textAlignVertical: 'center'

  },
  imagen2: {
    textAlignVertical: 'center'

  },
  iniciar: {
    backgroundColor: 'red'
  }
})
