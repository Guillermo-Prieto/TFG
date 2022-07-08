import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { TextInput } from 'react-native-web'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

const LoginScreen = () => {


  const[body,setBody] = useState({username: '', password: ''})

  const inputChange = ({target}) => {
    const {name,value}= target
    setBody({
      ...body,
      [name]: value
    })
  }

   useEffect(function () {
        console.log('render!')
     })
    

     C
   return (
      <View style={{backgroundColor: '#fff',flex: 1,}}>
        <View style={styles.container}>
          <View style={styles.formulario}>
            <Text style={styles.nombre}> <strong>Introduzca Nombre: </strong></Text>
  
            <View style={styles.item}>
                <AntDesign style={styles.imagen} name="user" size={35} color="black" />
                <TextInput style={styles.input} placeholder='Usuario' keyboardtype='email' value={body.username} onChange={inputChange} name='username'/>
                
            </View>
  
            <Text style={styles.nombre}> <strong>Introduzca Contraseña: </strong></Text>
  
            <View style={styles.item}>
                <AntDesign style={styles.imagen} name="lock" size={35} color="black" />
                <TextInput style={styles.input} placeholder='Contraseña' keyboardtype='numeric' value={body.password} onChange={inputChange} name='password'/>
            </View>
  
            <Button style={styles.iniciar} title='Iniciar Sesión' backgroundColor='red' onPress={() =>
              this.props.navigation.navigate('Home')
            }/>
  
          </View>
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: '40px',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      shadowRadius: 0,
      shadowColor: 'transparent'
    },
    icon: {
      padding: 5,
      paddingLeft: 10,
      marginTop: 5
    },
    input: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      marginTop: 20,
      marginBottom: 30,
      marginLeft: 10,
      width: 200
    },
    formulario: {
      alignItems: 'center',
      backgroundColor: '#eee',
      borderStyle: 2,
      borderColor: 'black',
      shadowRadius: 5,
      shadowColor: '#69c269',
      height: 290,
      width: 330
    },
    nombre: {
      paddingTop: 10
    },
    item: {
      flexDirection: 'row',
      display: 'block'
      /* padding: 16,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: 'Dashed',
      borderRadius: 10 */
    },
    imagen: {
      textAlignVertical: 'center'
  
    },
    imagen2: {
      textAlignVertical: 'center'
  
    },
    iniciar: {
      backgroundColor: 'red'
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flow-root',
      textAlign: 'center',
      backgroundColor: '#77DD77',
      paddingBottom: 10
  
    },
    HeaderText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#333',
      letterSpacing: 1,
      marginTop: 3
    }
  })

export default LoginScreen

