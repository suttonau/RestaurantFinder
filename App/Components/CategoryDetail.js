import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import ListView from './ListView'

const CategoryDetail = ({ category }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{category.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default CategoryDetail
