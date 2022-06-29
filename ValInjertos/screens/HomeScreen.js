import React, {useEffect, useState} from "react";
import { View, Text, FlatList } from 'react-native';
import {getInjertos} from '../api';

const HomeScreen = () => {
    const [injertos, setInjertos] = useState([])  

    const loadInjertos = async () =>{
        const data = await getInjertos();
        setInjertos(data);
         
      

    }

    useEffect(() => {    
        loadInjertos()
    }, [])
    console.log({injertos})  
    
    return (
        <View>
        <FlatList
            datos={injertos}
            renderItem = {(item) =>{
                console.log(item);
                return <Text>Hello world</Text>

            }}
        />
        </View>
    )


}

export default HomeScreen