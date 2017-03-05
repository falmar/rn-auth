/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {AppRegistry, View} from 'react-native'
import firebase from 'firebase'

import {Header} from './src/components/common'
import LoginForm from './src/components/LoginForm'

class rnauth extends Component {
  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBpTxPIwVTU44dhnLMKerYVUGdRKgiPwOI',
      authDomain: 'rnauth-31ae6.firebaseapp.com',
      databaseURL: 'https://rnauth-31ae6.firebaseio.com',
      storageBucket: 'rnauth-31ae6.appspot.com',
      messagingSenderId: '255886186791'
    })
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <Header title='Auth' />
        <LoginForm />
      </View>
    )
  }
}

AppRegistry.registerComponent('rnauth', () => rnauth)
