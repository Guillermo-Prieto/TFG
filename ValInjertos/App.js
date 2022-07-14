import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddInjertos from './screens/AddInjertos';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import PruebaScreen from './screens/PruebaScreen';
import UpdateInjertos from './screens/UpdateInjertos';
import ViewInjertos from './screens/ViewInjertos';

const Stack = createStackNavigator();

const App = ()=> {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="HomeScreen"
        component = {HomeScreen} 
        options={ ({navigation}) => ({
          title:"Inicio",
          headerStyle: {backgroundColor: "#9af88c"},
          headerTitleAlign: 'center',
          headerTitleStyle:{
            fontWeight: 'bold',
          },
          headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("AddInjertos")}>
            <Text style={{marginRight:'10px'}}>Añadir Injertos</Text>
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("AddInjertos")}>
            <Text style={{marginLeft:'10px'}}>Añadir Injsadasertos</Text>
          </TouchableOpacity>
        )
      })}
        />
        <Stack.Screen name="UpdateInjertos" 
        title="Modificar Injertos"
        component={UpdateInjertos}
        options={{
          title:'Modificar Injertos',
          headerStyle:{backgroundColor: "#9af88c"},
          headerTitleStyle:{
            fontWeight:'bold'},
          headerTitleAlign:'center',
          headerTintColor: "black",
        }}
        /> 
         <Stack.Screen name="ViewInjertos" 
        title="Ver Injertos"
        component={ViewInjertos}
        options={{
          title:'Ver Injertos',
          headerStyle:{backgroundColor: "#9af88c"},
          headerTitleStyle:{
            fontWeight:'bold'},
          headerTitleAlign:'center',
          headerTintColor: "black",
        }}
        /> 
        

        <Stack.Screen name="AddInjertos" 
        title="Añadir Injertos"
        component={AddInjertos}
        options={{
          title:'Añadir Injertos',
          headerStyle:{backgroundColor: "#9af88c"},
          headerTitleStyle:{
            fontWeight:'bold'},
          headerTitleAlign:'center',
          headerTintColor: "black",
        }}
        /> 


        <Stack.Screen name="Login" 
        component = {LoginScreen} 
        options={{
          title: 'Login',
        headerStyle:{backgroundColor: "#9af88c"},
        headerTitleStyle: {
          fontWeight: 'bold',
          
        }
        ,headerTitleAlign: 'center',}}
        />

            
        
       

        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
