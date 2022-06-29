import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const LoginScreen = () => {

   useEffect(function () {
        console.log('render!')
     })
    



  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen