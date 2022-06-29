import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const PruebaScreen = () => {
    useEffect(() => {
        console.log('PruebaScreen')
    })
    console.log('Prueba2')
  return (
    <View>
      <Text>PruebaScreen</Text>
    </View>
  )
}

export default PruebaScreen