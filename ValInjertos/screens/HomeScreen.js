import React, {useEffect, useState} from "react";
import { View , StyleSheet } from 'react-native';
import {getInjertos} from '../api';
import InjertosList from '../components/InjertosList'
import Layout from "../components/Layout";

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
        
            <Layout>
                <InjertosList  injertos ={injertos}/>
            </Layout>
        
    )
}

export default HomeScreen