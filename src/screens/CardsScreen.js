import React, { Component } from 'react';
import {View,Text} from 'react-native';
import firebase from '../fire';
import { Card } from 'react-native-elements';
import SwipeCards from 'react-native-swipeable-cards';
import User from '../components/User';


class CardsScreen extends Component {

  constructor(props){
    super(props);
    this.state= {
      users:[],
    }
    this.usersRef= firebase.database().ref('users/')
  }

  componentWillMount(){
    this.listenUsers();
  }

  listenUsers = () => {
    const {users} = this.state
    this.usersRef
    .on('value',snapshot => {
      snapshot.forEach(snap => {
        users.push(snap.val())
      })
      this.setState({users:Object.values(snapshot.val())})
    })
    console.log(this.state.users)
  }

  onSwipeRight (card) {
    console.log(`Yup for ${card.text}`)
  }
  onSwipeLeft (card) {
    console.log(`Nope for ${card.text}`)
  }
  onSwipeUp (card) {
    console.log(`Maybe for ${card.text}`)
  }


  renderNoMoreCards(){
  return(
    <View>
      <Text style={styles.noMoreCardsText}>No more cards</Text>
    </View>
  )
}

  render(){
    return(
      <SwipeCards
        cards={this.state.users}
        renderCard={(cardData) => <User {...cardData} />}
        renderNoMoreCards={this.renderNoMoreCards}
        onSwipeRight={this.handleYup}
        onSwipeLeft={this.handleNope}
        onSwipeUp={this.handleMaybe}
        hasMaybeAction
        source={{uri:this.state.image}}
      />
    )
  }
}

const styles={
  cardStyle:{
    height:300,
  },
 noMoreCardsText: {
   fontSize: 22,
 }
}

export default CardsScreen;
