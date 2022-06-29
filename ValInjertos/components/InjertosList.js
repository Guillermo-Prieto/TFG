import { Text, FlatList } from 'react-native'
import React from 'react'
import InjertosItem from './InjertosItem'

const InjertosList = ({injertos}) => {

  const renderItem = ({ item }) =>{
    return <InjertosItem injertos={item}/>
  }
  return (
    <FlatList
    style={{width:'50%', height:'50%'}}
            data={injertos}
            keyExtractor={(item) => item.id +''}
            renderItem = {renderItem}
    />
  )
}

export default InjertosList;