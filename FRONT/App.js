/* eslint-disable no-unused-vars */
/* // import { StatusBar } from 'expo-status-bar'
import React from 'react'
import 'react-native-gesture-handler'
import { AppNavigator } from './routes/drawer'
 import Navigator from './routes/HomeStack'

export default function App () {
  return (

     <AppNavigator/>
  )
}
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
      /* {isLoggedIn ? <MyDrawer /> : <Login/>} }

    </NavigationContainer>
  )
} */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Text, TouchableOpacity, View } from 'react-native'

import HomeScreen from './Screens/Home'
import Listado from './Screens/Listado'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Pagina de inicio de ValHepaticos',
            headerStyle: {
              backgroundColor: '#222f3e'
            },
            headerTitleStyle: {
              color: '#ffffff'
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Listado')}
              >
                <Text style={{ color: '#fff', marginRight: 20, fontSize: 15 }}>
                  Ver el listado de injertos
                </Text>
              </TouchableOpacity>
            )
          })}
        />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
