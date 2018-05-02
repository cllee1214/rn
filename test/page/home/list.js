import React from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import axios from 'axios';

export default  class ListContent extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.getListData()
  }
  getListData() {
    axios.get('https://cnodejs.org/api/v1/topics').then((response) => {
      this.setState({data: response.data.data})
    })
  }

  _keyExtractor(data, index) {
    return data.id
  }

  _renderItem (data) {
    return <ListContentItem key={data.index} index={data.index} avatar={data.item.author.avatar_url} replyCount={data.item.reply_count} visitCount={data.item.visit_count} title={data.item.title} />
  }

  render() {
    let data = this.state.data
    return data.length ? (
      <FlatList data={this.state.data} keyExtractor={this._keyExtractor} renderItem={this._renderItem}></FlatList>
    ) 
    :
    (
      <View>
        <Text>正在拉取数据...</Text>
      </View> 
    )
  }
}

class ListContentItem extends React.PureComponent {
  render(){
    return (
      <View style={{paddingLeft:10,paddingRight:10,paddingBottom:10,marginBottom:10,backgroundColor:"#fff"}}>
        <View style={{alignItems:"flex-start",flexDirection: "row",marginTop: 10}}>
          <Image style={{width:20,height:20}} source={{uri: this.props.avatar}}></Image>
          <Text style={{marginTop:3}}> 20分钟前</Text>
        </View>
        <Text key={this.props.index} style={{color: "#000",fontSize: 16,lineHeight:20,fontWeight: "800",marginTop:10,textAlign: "left"}}>{this.props.title}</Text>
        <Text style={{marginTop:10}}>{this.props.visitCount}人看过，{this.props.replyCount}个评论</Text>
      </View>
    )
   
  }
}
