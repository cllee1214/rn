import React from 'react';
import { StyleSheet, Text, View, FlatList, TabBarIOS, StatusBar} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from "./page/home/index.js"
import DetailScreen from "./page/detail/index.js"

// export default class App extends React.Component {
//     render() {
//       return (
//         <HomeScreen></HomeScreen>
//       )
//     }
// }

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Detail: {
      screen: DetailScreen,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}

