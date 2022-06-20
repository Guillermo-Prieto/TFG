import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const InjertoItem = ({ injerto, handleDelete }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('TaskFormScreen', { id: injerto.id })}
      >
        <Text style={styles.itemTitle}>{injerto.title}</Text>
        <Text style={{ color: '#8395a7' }}>{injerto.description}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: '#ee5253', padding: 7, borderRadius: 5 }}
        onPress={() => handleDelete(injerto.id)}
      >
        <Text style={{ color: '#fff' }}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#333333',
    padding: 20,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5
  },
  itemTitle: {
    color: '#ffffff'
  }
})
export default InjertoItem
