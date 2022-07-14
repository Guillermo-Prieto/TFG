import { View, TextInput, StyleSheet, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import {getInjerto} from "../api"
import {editarInjerto} from "../api"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RNPickerSelect from "react-native-picker-select";


const UpdateInjertos = ({navigation, route}) => {
  
//Estados
const [injertos,setInjertos]= useState({
  edad:"",
  sexo:"", 
  imc:"",
  hta:"",
  dm:"",
  dlp:"",
  apm:"",
  apq:"",
  got:"",
  gpt:"",
  ggt:"",
  na:"",
  bbt:"",
  acvhc:"",
  acvhbc:"",
  aminas:"",
  dosisna:"",
  ecografia:"",
  fecha:"",

});
const placeholderSexo = {
  label: 'Seleccione un Género',
  value: "",
  color: '#9EA0A4',
};
const [value, setSexo] = useState({
  value:""
});
const handleChangeSexo= (value) => {setSexo({value})}
const handleChange= (name, value) => setInjertos({...injertos, [name]:value,})

const placeholderEco = {
  label: 'Tipo de Ecografía...',
  value: "",
  color: '#9EA0A4',
};

const [valueEco, setEcografia] = useState({
  valueEco:""
});


const handleChangeEcografia= (valueEco) => {
  setEcografia({valueEco})
} 

  useEffect(()=>{
    if(route.params && route.params.id){  
      ( async () => {
        const injertos = await getInjerto(route.params.id)
        console.log(injertos)
        
        setInjertos({
          edad: injertos.edad,
          sexo: injertos.sexo,
          imc: injertos.imc,
          hta: injertos.hta,
          dm: injertos.dm,
          dlp: injertos.dlp,
          apm: injertos.apm,
          apq: injertos.apq,
          got: injertos.got,
          gpt: injertos.gpt,
          ggt: injertos.ggt,
          na: injertos.na,
          bbt: injertos.bbt,
          acvhc: injertos.acvhc,
          acvhbc: injertos.acvhbc,
          aminas: injertos.aminas, 
          dosisna: injertos.dosisna,
          ecografia: injertos.ecografia,
          fecha: injertos.fecha,

        
        
        
        })
        
      })();
    }
  }, []);

  return (
    <View style={{alignItems: 'center'}}>

      <Row style={{display:'flex'}}>
        <Col md={6} style={{display:'grid'}}>

        <Text style={{fontWeight: 'bold'}}>
          Edad:
        </Text>
          <TextInput style={styles.input}
            placeholder='Edad'
            onChangeText={text => handleChange('edad', text)}
            value={injertos.edad}/>

        <Text style={{fontWeight: 'bold'}}>
          IMC:
        </Text>
        <TextInput style={styles.input}
          placeholder='IMC'
          onChangeText={text => handleChange('imc', text)}
          value={injertos.imc}/>

        <Text style={{fontWeight: 'bold'}}>
          HTA:
        </Text>
        <TextInput style={styles.input}
          placeholder='HTA'
          onChangeText={text => handleChange('hta', text)}
          value={injertos.hta}/>

        <Text style={{fontWeight: 'bold'}}>
          DM:
        </Text>
          <TextInput style={styles.input}
            placeholder='DM'
            onChangeText={text => handleChange('dm', text)}
            value={injertos.dm}/>

        <Text style={{fontWeight: 'bold'}}>
          GPT:
        </Text>
          <TextInput style={styles.input}
          placeholder='GPT'
          onChangeText={text => handleChange('gpt', text)}
          value={injertos.gpt}/>

        <Text style={{fontWeight: 'bold'}}>
          GGT:
        </Text>
          <TextInput style={styles.input}
          placeholder='GGT'
          onChangeText={text => handleChange('ggt', text)}
          value={injertos.ggt}/>

        <Text style={{fontWeight: 'bold'}}>
          NA:
        </Text>
          <TextInput style={styles.input}
          placeholder='NA'
          onChangeText={text => handleChange('na', text)}
          value={injertos.na}/>

        <Text style={{fontWeight: 'bold'}}>
          BBT:
        </Text>
          <TextInput style={styles.input}
          placeholder='BBT'
          onChangeText={text => handleChange('bbt', text)}
          value={injertos.bbt}/>

        </Col>
        
      
      <Col md={6} style={{display:'grid', marginLeft:10}}>
        <Text style={{fontWeight: 'bold'}}>
          DLP:
        </Text>
          <TextInput style={styles.input}
            placeholder='DLP'
            onChangeText={text => handleChange('dlp', text)}
            value={injertos.dlp}/>

        <Text style={{fontWeight: 'bold'}}>
          APM:
        </Text>
          <TextInput style={styles.input}
            placeholder='APM'
            onChangeText={text => handleChange('apm', text)}
            value={injertos.apm}/>
          
        <Text style={{fontWeight: 'bold'}}>
          APQ:
        </Text>
          <TextInput style={styles.input}
            placeholder='APQ'
            onChangeText={text => handleChange('apq', text)}
            value={injertos.apq}/>

        <Text style={{fontWeight: 'bold'}}>
          GOT:
        </Text>
          <TextInput style={styles.input}
            placeholder='GOT'
            onChangeText={text => handleChange('got', text)}
            value={injertos.got}/>

        <Text style={{fontWeight: 'bold'}}>
          ACVHC:
        </Text>
          <TextInput style={styles.input}
          placeholder='ACVHC'
          onChangeText={text => handleChange('acvhc', text)}
          value={injertos.acvhc}/>

        <Text style={{fontWeight: 'bold'}}>
          ACVHBC:
        </Text>
          <TextInput style={styles.input}
          placeholder='ACVHBC'
          onChangeText={text => handleChange('acvhbc', text)}
          value={injertos.acvhbc}/>

        <Text style={{fontWeight: 'bold'}}>
          AMINAS:
        </Text>
          <TextInput style={styles.input}
          placeholder='AMINAS'
          onChangeText={text => handleChange('aminas', text)}
          value={injertos.aminas}/>

        <Text style={{fontWeight: 'bold'}}>
          DOSIS:
        </Text>
          <TextInput style={styles.input}
          placeholder='DOSIS'
          onChangeText={text => handleChange('dosisna', text)}
          value={injertos.dosisna}/>

      </Col>
      </Row>
      <Row >
        
        <Col>
        <Text style={{fontWeight: 'bold'}}>
          Género:
        </Text>
          <RNPickerSelect
            placeholder={placeholderSexo}
                  value={injertos.sexo}
                  onValueChange={(value) => handleChangeSexo(value)}
                  style={{
                    inputWeb: {
                      width:'50%',backgroundColor:'#FFFFFF',fontSize:15,marginBottom:7,borderWidth: 1, borderColor:'#9af88c',height:30,textAlign: 'center',padding: 4,borderRadius:5,
                    },
                    inputIOS:{
                      width:'95%',backgroundColor:'#FFFFFF',fontSize:15,marginBottom:7,borderWidth: 1, borderColor:'#9af88c',height:30,textAlign: 'center',padding: 4,borderRadius:5,flex: 1,
                    },
                    inputAndroid:{
                      width:'95%',backgroundColor:'#FFFFFF',fontSize:15,marginBottom:7,borderWidth: 1, borderColor:'#9af88c',height:30,textAlign: 'center',padding: 4,borderRadius:5,flex: 1,
                    }
                  }}
                  items={[
                      { label: "Masculino", value: "masculino" },
                      { label: "Femenino", value: "femenino" },
                      
          ]}/>

        <Text style={{fontWeight: 'bold'}}>
          Ecografía:
        </Text>

        <RNPickerSelect
            placeholder={placeholderEco}
                  onValueChange={(valueEco) => handleChangeEcografia(valueEco)}
                  value={injertos.ecografia}
                  style={{
                    inputWeb: {
                      width:'95%',backgroundColor:'#FFFFFF',fontSize:15,marginBottom:7,borderWidth: 1, borderColor:'#9af88c',height:30,textAlign: 'center',padding: 4,borderRadius:5,flex: 1,
                    },
                    inputIOS:{
                      width:'95%',backgroundColor:'#FFFFFF',fontSize:15,marginBottom:7,borderWidth: 1, borderColor:'#9af88c',height:30,textAlign: 'center',padding: 4,borderRadius:5,flex: 1,
                    },
                    inputAndroid:{
                      width:'95%',backgroundColor:'#FFFFFF',fontSize:15,marginBottom:7,borderWidth: 1, borderColor:'#9af88c',height:30,textAlign: 'center',padding: 4,borderRadius:5,flex: 1,
                    }
                  }}
                  items={[
                      { label: "Normal", value: "normal" },
                      { label: "Patológica", value: "patologica" },
                      { label: "Tipo 3", value: "si" },

                     
        ]}/>
        </Col> 
      </Row>
    </View>
  )
}
const styles = StyleSheet.create({
  input:{
    width:'100q%',
    backgroundColor:'#FFFFFF',
    fontSize:15,
    marginBottom:7,
    borderWidth: 1,
    borderColor:'#9af88c',
    height:30,
    textAlign: 'center',
    padding: 4,
    borderRadius:5,
    flex: 1,
  },
  inputFecha:{
    width:'100%',
    backgroundColor:'#FFFFFF',
    fontSize:15,
    marginBottom:7,
    borderWidth: 1,
    borderColor:'#9af88c',
    height:30,
    textAlign: 'center',
    padding: 4,
    borderRadius:5,
    flex: 1,
  },
  ButtonSave: {
    paddingTop:10,
    paddingBottom:10,
    borderRadius:10,
    marginBottom:3,
    backgroundColor:'#9af88c',
    width:'100%',
    textAlign:'center',
    
  },
  ButtonText:{
    fontWeight:'bold',

  }
})

export default UpdateInjertos