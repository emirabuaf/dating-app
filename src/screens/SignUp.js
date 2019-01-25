import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from '../fire'

export default class SignUp extends React.Component {
  state = {name:'', email: '', password: '', errorMessage: null }

  handleSignUp = () => {
    const { email, password,name } = this.state
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res) => {
    firebase.database().ref('users/' + res.user.uid).set({
        email:this.state.email,
        name:this.state.name
    })
  })
  .catch(error => this.setState({ errorMessage: error.message }))
}

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
