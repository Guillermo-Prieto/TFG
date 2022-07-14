import { createStackNavigator } from '@react-navigation/stack'
import { createAppContainer } from 'react-navigation'
import Login from '../Screens/Login'
import Home from '../Screens/Home'
import prueba from'prueba.css'
const screens = {

  Login: {
    screen: Login,
    navigationOptions: {

      title: 'Login APP',
      headerStyle: { backgroundColor: '#9af88c' },
      headerTitleAlign: 'center',
      style: {
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0 // remove shadow on iOS
      }

    }

  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home APP',
      headerStyle: { backgroundColor: '#9af88c' },
      headerTitleAlign: 'center'

    }
  }

}
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
})

export default createAppContainer(HomeStack)
