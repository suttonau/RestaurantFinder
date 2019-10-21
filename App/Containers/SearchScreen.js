import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'

import SearchBar from '../Components/SearchBar'

export default class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }
}
