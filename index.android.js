/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {AppRegistry, View} from 'react-native'

import Header from './src/components/Header'

class firstapp extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <Header title='Auth' />
      </View>
    )
  }
}

AppRegistry.registerComponent('firstapp', () => firstapp)
