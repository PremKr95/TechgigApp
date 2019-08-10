/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, NativeModules } from 'react-native';
import BridgeModule from './Bridging.js'
import LottieView from 'lottie-react-native'
import CustomMapView from './src/component/CustomMapView';
import firebase from 'react-native-firebase'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  callingModule() {
    console.log("hiii");
    BridgeModule.testMethod();
    BridgeModule.testCallBackMethod(X => {
      console.log(X);
    })
  }


  static navigationOptions = {
    header: null,
  };

  componentDidMount(){
  //   var firebaseConfig = {
  //     apiKey: "AIzaSyBYF-SrdAWSYXyGf38R_YKRV1_4mw1X85E",
  //     authDomain: "techigfinal.firebaseapp.com",
  //     databaseURL: "https://techigfinal.firebaseio.com",
  //     projectId: "techigfinal",
  //     storageBucket: "techigfinal.appspot.com",
  //     messagingSenderId: "529831432325",
  //     appId: "1:529831432325:web:5f75f8b37e650057"
  // };

  // // Initialize Firebase
  //     firebase.initializeApp(firebaseConfig);

  //     firebase.messaging().subscribeToTopic("foo-bar")

  //     firebase.messaging().sendMessage({

  //     })
    setTimeout(()=>{
      this.props.navigation.navigate('HomeScreen') 
    },5000)

//     fetch('https://fcm.googleapis.com/fcm/send', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'AIzaSyBjVUYJ9IGXxAMPAhOxrPmJ9_B-_KkFKHY'
//     },
//     body: JSON.stringify({
//       "message":{
//         "topic" : "foo-bar",
//         "notification" : {
//           "body" : "This is a Firebase Cloud Messaging Topic Message!",
//           "title" : "FCM Message"
//           }
//        }
//     })
// })
  } 

  render() {
    return (
      <LottieView source={require('./src/res/splashs.json')} autoPlay loop />
      // <CustomMapView
      // style={{ flex: 1, width: '100%', height: '100%' }}       
      // url="https://www.radiantmediaplayer.com/media/bbb-360p.mp4" /> 
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
