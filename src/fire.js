import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyDkUZCmRQHWHcX8RgNb0JmHsIJPPtGMofI",
  authDomain: "react-native-firebase-au-501e7.firebaseapp.com",
  databaseURL: "https://react-native-firebase-au-501e7.firebaseio.com",
  projectId: "react-native-firebase-au-501e7",
  storageBucket: "react-native-firebase-au-501e7.appspot.com",
  messagingSenderId: "740331459245"
};
var fire = firebase.initializeApp(config);

export default fire;
