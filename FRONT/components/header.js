import React from 'react'
import { StyleSheet, Text, View } from 'react-native-web'

export default function header () {
  return (
        <View style={styles.header}>
            <Text> <strong>Login APP</strong></Text>

        </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    width: 'auto',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'

  }
})
