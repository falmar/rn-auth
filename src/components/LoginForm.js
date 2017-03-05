import React, {Component} from 'react'
import {Text} from 'react-native'
import firebase from 'firebase'

import {Button, Card, CardSection, Input, Spinner} from './common'

class LoginForm extends Component {
  constructor (props) {
    super(props)

    this.onLoginSuccess = this.onLoginSuccess.bind(this)
    this.onRegisterSuccess = this.onRegisterSuccess.bind(this)
    this.onLoginError = this.onLoginError.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)

    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    }
  }

  // logic

  // events
  onChangeHandler (key) {
    return text => {
      this.setState({[key]: text})
    }
  }

  onSubmitHandler () {
    const {email, password} = this.state

    this.setState({error: '', loading: true})

    firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess)
    .catch(() => {
      firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(this.onRegisterSuccess)
      .catch(this.onLoginError)
    })
  }

  onLoginSuccess (response) {
    console.log(response)
    this.setState({
      email: '',
      password: '',
      loading: false
    })
  }

  onRegisterSuccess () {
    this.setState({loading: false})
  }

  onLoginError () {
    this.setState({error: 'Authentication Failed', loading: false})
  }

  // render
  renderButton () {
    if (this.state.loading) {
      return <Spinner />
    }

    return (
      <Button
        text='Log In'
        onPress={() => this.onSubmitHandler()}
      />
    )
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            value={this.state.email}
            placeholder='user@email.com'
            onChangeText={this.onChangeHandler('email')}
            onFocus={() => this.setState({error: ''})}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Password'
            placeholder='*********'
            value={this.state.password}
            onChangeText={this.onChangeHandler('password')}
            secureTextEntry
          />
        </CardSection>

        {
          !this.state.loading &&
          <Text style={styles.errorStyle}>
            {this.state.error}
          </Text>
        }

        <CardSection>

          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorStyle: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm
