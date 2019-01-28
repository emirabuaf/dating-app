import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

class User extends Component{
  constructor(props){
    super(props);
    this.state= {
      image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Image style={styles.thumbnail} source={{uri:this.state.image}} />
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

const styles={
  thumbnail: {
  width: 350,
  height: 400,
  flex:1,
  marginRight:50
  }
}


export default User;
