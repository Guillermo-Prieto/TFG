import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const InjertosItem = ({injertos}) => {
  return (
    <View style={styles.item}>
      <Text>{injertos.edad}</Text>
      <Text>{injertos.sexo}</Text>
    </View>
  )
}
const styles = StyleSheet.create({

    item:{
        backgroundColor:"#FFFFFF",
        padding:20,
        marginVertical:8,
        borderRadius:5,
    }
})

export default InjertosItem