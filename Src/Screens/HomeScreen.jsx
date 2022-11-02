import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../Contants/Colors';

const HomeScreen = ({navigation}) => {

    let data = 123;

  return (
    <View style={{backgroundColor: Colors.backgroundColor,flex: 1}} >
      <Text style={[styles.h1,{color: 'blue',fontFamily: ''}]} >HomeScreen</Text>
      <Button
        title="Go to Detail Screen."
        onPress={() => {
          navigation.navigate('Detail',{
            data: data
          });
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  h1: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'xyz'
  }
});
