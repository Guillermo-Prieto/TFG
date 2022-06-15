import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import About from '../screens/About'
import Header from '../shared/header'

const { Navigator, Screen } = createStackNavigator()

export const AboutStack = () => (
  <Navigator
    headerMode='screen'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#eee'
      },
      headerTintColor: '#444',
      height: 60
    }}
  >
    <Screen
      name='About'
      component={About}
      options={{ headerTitle: () => <Header/> }}
    />
  </Navigator>
)

export default AboutStack

/*
import { createStackNavigator } from 'react-navigation-stack'

import About from '../Screens/About'

const screens = {

  About: {
    screen: About,
    navigationOptions: {

      title: 'About APP',
      headerStyle: { backgroundColor: '#9af88c' },
      headerTitleAlign: 'center',
      style: {
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0 // remove shadow on iOS
      }

    }

  }
}
const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
})

export default AboutStack
*/
