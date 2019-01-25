import React from 'react'
import { StyleSheet, Platform, Image, Text, View,Button } from 'react-native'
import firebase from '../fire';

export default class Main extends React.Component {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()

    this.setState({ currentUser })
  }

  handleSignOut = () =>{
      firebase.auth().signOut()
      this.props.navigation.navigate('Login')
    }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Button onPress={this.handleSignOut} title='signout' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
