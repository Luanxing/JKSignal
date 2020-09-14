import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { PicInfoProps, Text } from './Themed';
import { convertX, convertY, winWidth } from '../utils/styles';
import Res from '../assets/images';
import i18n from '../i18n';
export default class PicInfo extends React.Component<PicInfoProps> {
  render() {
    const { style } = this.props;
    return (
      <View style={[styles.main, style]}>
        <View style={styles.userInfo}>
          <Image source={Res.avatar} style={styles.avatar} />
          <Text style={styles.name}>{i18n.t('name')}</Text>
          <Text style={styles.time}>· 2h ago</Text>
        </View>
        <Image source={Res.mainImage} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    width: winWidth,
    height: convertY(400),
    paddingHorizontal: convertX(10),
  },
  userInfo: {
    flexDirection: 'row',
    paddingLeft: convertX(10),
    alignItems: 'center',
    paddingBottom: convertX(10),
  },
  avatar: {
    marginRight: convertX(10),
  },
  name: {
    fontWeight: 'bold',
  },
  time: {
    color: '#333333',
  },
});
