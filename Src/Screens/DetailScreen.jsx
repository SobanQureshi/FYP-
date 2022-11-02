import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../Contants/Colors';

const DetailScreen = ({route, naviagtion}) => {
  const {data} = route.params;

  return (
    <View style={{backgroundColor: Colors.backgroundColor,flex: 1}}  >
      <Text style={{color: Colors.textColor}} >DetailScreen {data}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
