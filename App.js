import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createBottomTabNavigator,createSwitchNavigator,createAppContainer } from 'react-navigation'

// import the different screens
import Loading from './src/Loading'
import SignUp from './src/screens/SignUp'
import Login from './src/screens/Login'
import Main from './src/screens/Main'
import ProfileScreen from './src/screens/ProfileScreen';
import CardsScreen from './src/screens/CardsScreen';
import MatchesScreen from './src/screens/MatchesScreen';
// create our app's navigation stack
const App = createAppContainer(createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main:{
      screen:createBottomTabNavigator({
        profile:{screen:ProfileScreen},
        cards:{screen:CardsScreen},
        matches:{screen:MatchesScreen},
      })
    }
  },
  {
    initialRouteName: 'Loading'
  }
));

export default App
