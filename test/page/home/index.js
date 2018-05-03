import React from 'react';
import { StyleSheet, Text, View, FlatList, TabBarIOS, StatusBar} from 'react-native';

import ListContent from './list.js'
import Header from './header.js'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '首页',
  };
  render() {
    return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#444" barStyle="light-content"/>
      <View style={{flex:1,width:"100%",backgroundColor:"#444"}}>
        <Header></Header>
      </View>
      <View style={{backgroundColor: "#e1e1e1",width:"100%",flex:8,opacity:0.5}}>
        <View>
           <ListContent navigation={this.props.navigation}></ListContent>
        </View>
      </View>
      <View style={{backgroundColor: "#fff",flex:-1,height:50,width: "100%"}}>
        <TabBarIOS  style={styles.bottomText} unselectedTintColor="yellow" tintColor="blue" barTintColor="#fff">
          <TabBarIOS.Item title="全部"></TabBarIOS.Item>
          <TabBarIOS.Item title="精华"></TabBarIOS.Item>
          <TabBarIOS.Item title="问答"></TabBarIOS.Item>
          <TabBarIOS.Item title="招聘"></TabBarIOS.Item>
        </TabBarIOS>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

