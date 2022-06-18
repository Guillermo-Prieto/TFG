// import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { event } from 'react-native-reanimated'
import axios from 'axios'
import { TextInput } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native-web'

export default function About ({ navigation }) {
  const goAbout = () => {
    navigation.navigate('About')
  }

  //VIDEO DE LISTADO
  constructor() {
    super()
    this.guardar= this.guardar.bind(this)
    this.state={
      lista:[],
      nombre:'',
      precio:'',
    }
  }
  componentDidMount(){
    this.getProducto();
  }

  async getProducto() {
  try{
    const res= await axios.get('localhost');
    console.log(res.data)
    this.setState({lista:res.data})

  }catch (error) {console.error(error)}

  async guardar(event){
    event.preventDefault();
    try{
      let{nombre,precio}= this.state;
      const obj= {nombre,precio}
      const res = await axios.post('localhost',obj);
      console.log(res.data)
    }catch(error){ console.log(error)
      this.setState({nombre:'', precio:''})
      this.getProducto();

    }

  }
// HASTA AQUI
  return (
    <View style={styles.container}>
      <Text>Bienvenido a APP  </Text>

      <Button style={styles.iniciar} title='Ir About' onPress={goAbout} backgroundColor='red'/>

      <TextInput style={styles.input}
      placeholder="Nombre"
      onChangeText={(nombre)=>this.setState({nombre})}
      value={this.state.nombre}/>

<TextInput style={styles.input}
      placeholder="Precio"
      onChangeText={(precio)=>this.setState({precio})}
      value={this.state.nombre}/>
      
     <TouchableOpacity style={styles.buttonGuardar}>
      onPress={this.guardar}
      <Text style={styles.ButtonTexto}>Guardar</Text>

     </TouchableOpacity>

     <View style={{flex:1}}>
      {this.state.lista.map(item =>(
        <View style={styles.mycard} key={item.id}>
          <Text>{item.nombre}</Text>
          <Text>{item.precio}</Text>
        </View>
      ))}
     </View>

    </View>
  )
}
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 20,
    shadowRadius: 0,
    shadowColor: 'transparent'
  },
  mycard:{
    backgroundColor: '#E8EBEC',
    padding:20,
    marginVertical:5,
    marginHorizontal:12,
    elevation:3
  },
  buttonGuardar:{
    backgroundColor:'#C132F3',
    padding:12,
    marginHorizontal:15,
    marginTop:10,
    marginBottom:12,
    borderRadius:24,

    },
  ButtonTexto:{
    alignSelf:'center',
    color:'white',
    fontSize:19,
    fontWeight:'bold'
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
    shadowColor: '#177245',
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
  }
})
