import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Image, Button } from 'react-native'
import ListView from '../Components/ListView'

import SearchBar from '../Components/SearchBar'
import styles from './Styles/LaunchScreenStyles'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { requestApiData } from '../Redux/actions'

class HomeScreen extends Component {
  // constructor () {
  //   super()
  // }

  componentDidMount () {
    this.props.requestApiData()
    console.log('Hello')
  }

  consoleMessage=() => {
    alert('clicked')
    console.log('button clicked --- start')
    console.log('console message button clicked')
    console.log('button clicked --- end')
  }

  render () {
    const categories = this.props.results
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
        <Button
          title=" Console Message Example "
          onPress={this.consoleMessage}
          color="#E91E63"
        />
        <ListView
          title={categories[0].categories.name}
        />
        <ListView
          title="Title"
        />
        <ListView
          title="Title"
        />
       <ListView
         title="Title"
       />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({ data: state.data })

const mapDispatchToProps = (dispatch) => bindActionCreators({ requestApiData }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
