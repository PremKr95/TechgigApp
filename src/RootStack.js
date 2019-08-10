import React, { Component } from 'react';
import { Container, Header, Content, Icon } from 'native-base';
import {Text, Button, Platform, View, Image, StyleSheet, TouchableOpacity,Dimensions} from 'react-native'
import App from '../App'
import { createStackNavigator,createAppContainer, StackNavigator,DrawerNavigator,NavigationActions } from 'react-navigation';

import HomeScreen from './files/HomeScreen'
import TrafficPoliceMap from './files/TrafficPoliceMap'
import TrafficPoliceHome from './files/TrafficPoliceHome'
import PoliceStationHome from './files/PoliceStationHome'
 

import UserHome from '../src/component/User/UserHome'
import LodgeAComplaintStepOne from '../src/component/User/LodgeAComplaintStepOne'
import CreateComplaint from '../src/component/User/CreateComplaint'
import SubmitAlert from '../src/component/User/SubmitAlert'
import SelectComplainType from '../src/component/User/SelectComplainType'
import InfoPage from '../src/component/User/InfoPage';
import FirePolice from '../src/firepolice/FirePolice';


var height=800
var fontsize = 18
var textColor ='white'

var navTitleHeight
if(Platform.OS === 'ios') {
  navTitleHeight = 0
} else {
  navTitleHeight = height*.03+height*.02
}

const RootStack = createStackNavigator(
  {
    App: {
      screen: App,
    },
    HomeScreen: {
      screen: HomeScreen,
    },
    TrafficPoliceMap: {
      screen: TrafficPoliceMap,
    },
    TrafficPoliceHome: {
      screen: TrafficPoliceHome,
    },
    PoliceStationHome: {
      screen: PoliceStationHome,
    },
    PoliceStationHome: {
      screen: PoliceStationHome,
    },
    FirePolice: {
      screen: FirePolice,
    },

  },
  {
    initialRouteName: 'App',
  }
);


const RootStacks = createStackNavigator(
  {
    App: {
      screen: App,
    },

    UserHome: {
      screen: UserHome,
    },

    LodgeAComplaintStepOne: {
        screen: LodgeAComplaintStepOne,
      },

    CreateComplaint: {
        screen: CreateComplaint,
      },
      SubmitAlert: {
        screen: SubmitAlert,
      },
      SelectComplainType: {
        screen: SelectComplainType,
      },
      InfoPage: {
        screen: InfoPage,
      },
  },
  {
    initialRouteName: 'App',
  }
);



// const GlobalStack = StackNavigator(
//   {
//     RootStack:{
//       screen:RootStack,
//     },
    
//     UserStack:{
//         screen:UserStack,
//       },
//   },
//   {
//     initialRouteName: 'loginStack',
//     headerMode: 'none',
//   }
// );

// export default createAppContainer(RootStacks);
export default createAppContainer(RootStack);
