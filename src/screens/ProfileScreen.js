import React, { Component } from 'react';
import {Button,View,Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import firebase from '../fire';


class ProfileScreen extends Component {

  handleSignOut = () =>{
      firebase.auth().signOut()
      this.props.navigation.navigate('Login')
    }

  render(){
    return(
      <View>
        <Text style={{fontSize: 40, marginTop:40}}>Account</Text>
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
  />
  <Button onPress={this.handleSignOut} title='signout' />

    </View>
    )
  }
}

export default ProfileScreen;
