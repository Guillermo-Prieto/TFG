import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer'
import Home from '../Screens/Home'
import About from '../Screens/About'
import Listado from '../Screens/Listado'
import { Fontisto, FontAwesome } from '@expo/vector-icons'

// import LinearGradient from 'react-native-linear-gradient'

/* function Feed () {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  )
}

function Article () {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  )
} */

function CustomDrawerContent (props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{
        display: 'block',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center',

        backgroundColor: '#7ee8fa',

        marginBottom: 20
      }}>

        <View style={{ display: 'block', textAlign: 'center' }}>
        <Text style={styles.nombre}> Guillermo Prieto</Text>
        <Fontisto name="doctor" size={24} color="white" style={styles.icon}/>

        </View>

        <Text style={styles.correo}> guilleprieto08@gmail.com</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  )
}

const Drawer = createDrawerNavigator()

export function MyDrawer () {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#7ee8fa',
        drawerActiveTintColor: '#ff',
        drawerInactiveTintColor: '#333',
        drawerStyle: {

          backgroundColor: '#fff',
          width: 240,
          paddingTop: 0
        }
      }}
    >
      <Drawer.Screen name="Inicio" component={Home} options={{
        drawerIcon: () => (
          <FontAwesome name="hospital-o" size={24} color="black" />
        )
      }}/>
      <Drawer.Screen name="Listado" component={Listado} options={{
        drawerIcon: () => (
          <FontAwesome name="list-ul" size={20} color="black" />
        )
      }}/>
      <Drawer.Screen name="About" component={About} options={{
        drawerIcon: () => (
          <FontAwesome name="info-circle" size={24} color="black" />
        )
      }}/>
    </Drawer.Navigator>
  )
}
const styles = StyleSheet.create({
  icon: {
    borderRadius: 30,
    border: '1px solid rgba(0, 0, 0, 0.95)',
    padding: 5,
    textAlign: 'end'

  },
  correo: {
    display: 'block',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center'

  },
  nombre: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    alignItems: 'center'

  }
})
