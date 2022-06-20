import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Alert, RefreshControl } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import { deleteInjerto, getInjertos } from '../api'
import InjertoItem from './InjertoItem.js'

const InjertosList = ({ navigation }) => {
  const [injertos, setInjertos] = useState([])
  const [refreshing, setRefreshing] = React.useState(false)
  const isFocused = useIsFocused()

  const getUsers = async () => {
    try {
      const injertos = await getInjertos()
      setInjertos(injertos)
    } catch (error) {
      console.log(error)
    }
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true)
    // wait(2000).then(() => setRefreshing(false));
    await getUsers()
    setRefreshing(false)
  }, [])

  const handleDelete = (id) => {
    Alert.alert('Delete Injerto', 'Are you sure you want to delete the injerto', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Ok',
        onPress: async () => {
          await deleteInjerto(id)
          await getUsers()
        }
      }
    ])
  }

  useEffect(() => {
    getUsers()
    console.log('called')
  }, [isFocused])

  const renderItem = ({ item }) => (
    <InjertoItem injerto={item} handleDelete={handleDelete} />
  )

  return (
    <SafeAreaView style={{ flex: 1, width: '90%' }}>
      <FlatList
        data={injertos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#78e08f']}
            progressBackgroundColor="#0a3d62"
          />
        }
      />
    </SafeAreaView>
  )
}

export default InjertosList
