import React from 'react';
import { Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import PruebaScreen from './screens/PruebaScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = ()=> {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component = {HomeScreen} />
        <Stack.Screen name="Prueba" component={PruebaScreen} />
        
        <Stack.Screen name="Login" component = {LoginScreen} />
       

        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
