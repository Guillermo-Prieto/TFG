import React from 'react'
import { StyleSheet, Text, View } from 'react-native-web'

import { Dimensions } from 'react-native'

export default function Header () {
  return (
    <View style={styles.header}>

            <Text style={styles.HeaderText}>Login Asdasdapp</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('screen').width,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'

  },
  HeaderText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1
  },
  icon: {
    position: 'absolute',
    left: 16
  }
})
