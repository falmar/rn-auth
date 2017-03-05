/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {AppRegistry, View} from 'react-native'
import firebase from 'firebase'

import {Header, Button, Spinner} from './src/components/common'
import LoginForm from './src/components/LoginForm'

class rnauth extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hydrated: false,
      isLoggedIn: false
    }
  }

  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBpTxPIwVTU44dhnLMKerYVUGdRKgiPwOI',
      authDomain: 'rnauth-31ae6.firebaseapp.com',
      databaseURL: 'https://rnauth-31ae6.firebaseio.com',
      storageBucket: 'rnauth-31ae6.appspot.com',
      messagingSenderId: '255886186791'
    })

    firebase.auth().onAuthStateChanged(user => {
      this.setState({hydrated: true, isLoggedIn: user})
    })
  }

  onClickLogout () {
    firebase.auth().signOut()
  }

  renderContent () {
    if (!this.state.hydrated) {
      return <Spinner />
    }

    if (this.state.isLoggedIn) {
      return (
        <Button
          text='Log Out'
          onPress={() => this.onClickLogout()}
        />
      )
    }

    return <LoginForm isLoggedIn={this.state.isLoggedIn} />
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <Header title='Auth' />
        {this.renderContent()}
      </View>
    )
  }
}

AppRegistry.registerComponent('rnauth', () => rnauth)
