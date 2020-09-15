import * as React from 'react';
import { StyleSheet, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import MasonryList from '@appandflow/masonry-list';
import Res from '../../assets/images';
import { convertX, convertY, winWidth } from '../../utils/styles';
import PicInfo from '../../components/picInfo';
import { Text, View } from '../../components/Themed';
import i18n from '../../i18n';
import JkRes from '../../assets/images/JKImages';
const itemWidth = (winWidth - 16) / 2;

export default class HomeScreen extends React.Component {
  PicInfoProps = {
    title: '',
  };
  state = {};
  get data() {
    return new Array(47).fill(0).map((item, index) => {
      const path = `../../assets/images/JKImages/jk_${index}.jpg`;
      return {
        key: index,
        image: JkRes[`jk${index}`],
        name:'沙华',
        desc:'2',
      };
    });
  }


  _renderItem = ({ item }) => {
    const itemHeight = this._getHeightForItem({item});
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        // onPress={() => this._onPressContent(item)}
        style={styles.item}
      >
        <Image
          source={item.image}
          style={{ width: itemWidth, height: itemHeight, borderRadius: 4 }}
        />
        <View style={styles.itemText}>
    <Text style={{ color: '#fff' }}>{item.name}</Text>
          <Text style={{ color: '#fff' }}>{item.desc}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  _getHeightForItem = ({item}) => {
    const width = Image.resolveAssetSource(item.image).width;
    const height = Image.resolveAssetSource(item.image).height;
    return Math.max(itemWidth, itemWidth / width * height);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <PicInfo /> */}
        {/* <FlatList data={this.data} renderItem={this.renderItem} style={{ flex: 1 }} /> */}
        <MasonryList
          data={this.data}
          numColumns={2}
          renderItem={this._renderItem}
          getHeightForItem={this._getHeightForItem}
          // refreshing={this.state.refreshing}
          // onRefresh={this.onRefreshing}
          onEndReachedThreshold={0.5}
          // onEndReached={this._onEndReached}
          // keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 19,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: '80%',
  // },
  title: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  titleText: {
    color: '#d0bbab',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    color: 'rgb(58, 45, 91)',
  },
  item:{
    margin:4
  },
  itemText: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingHorizontal: 10, 
    position: 'absolute', 
    left: 0, 
    right: 0, 
    bottom: 0, 
    height: 30, 
    backgroundColor: '#0002', 
    borderBottomLeftRadius: 4, 
    borderBottomRightRadius: 4
  }
});
