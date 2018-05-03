import React from 'react';
import { StyleSheet, Text, View, FlatList, TabBarIOS, StatusBar} from 'react-native';


export default class DetailScreen extends React.Component {
  static navigationOptions = {
    title: '详情页',
  };

  render() {
    console.log(this.props.navigation.state)
    let params = this.props.navigation.state.params || {} 
    let topicId = params.id
    return (
      <Text>{params.title}{topicId}</Text>
    )
  }
}