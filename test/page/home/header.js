import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TabBarIOS} from 'react-native';
import SvgUri from 'react-native-svg-uri';

export default class Header extends React.Component {
  render() {
    return (
      <View style={{marginLeft:15,marginTop:10}}>
       <SvgUri width="100" height="60" source={{uri:"http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg"}} />
      </View>
    )
  }
}
