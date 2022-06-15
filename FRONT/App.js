/* // import { StatusBar } from 'expo-status-bar'
import React from 'react'
import 'react-native-gesture-handler'
import { AppNavigator } from './routes/drawer'
 import Navigator from './routes/HomeStack'

export default function App () {
  return (

     <AppNavigator/>
  )
} */
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MyDrawer } from './routes/drawer'
// import Login from './Screens/Login'

export default function App () {
  // const isLoggedIn = false
  return (
    <NavigationContainer>
      {
      <MyDrawer/>
      /* {isLoggedIn ? <MyDrawer /> : <Login/>} */}

    </NavigationContainer>
  )
}
