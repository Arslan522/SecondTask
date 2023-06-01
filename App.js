import { View, StatusBar,StyleSheet, TouchableOpacity, Dimensions,Image, Video } from 'react-native';
import React, { useEffect, useState } from 'react';
import VideoPlayer from 'react-native-video-controls';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from './imgs/logo.png'


export default function App() {
  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);
   
  return (
    <View style={styles.container}>
      
      <VideoPlayer
        source={require('./imgs/2.mp4')}
        disableBack={true}
        disableFullscreen={true}
        controlTimeout={5000}
        />
        <View style={styles.logoCon}>
        <Image 
        style={styles.logo}
        resizeMode='contain'
        source={require('./imgs/logo.png')}/>
        </View>
        <View style={styles.priceCon}>
        <Image 
        style={styles.price}
        resizeMode='contain'
        source={require('./imgs/price.png')}/>
        </View>
        <View style={styles.codeCon}>
        <Image 
        style={styles.code}
        resizeMode='contain'
        source={require('./imgs/code.png')}/>
        </View>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
    color: "white"
  },
  logoCon:{
    marginTop: "1%",
    position:"absolute",
    alignSelf:"center",
  },
  logo:{
    height: 20,
  },
  priceCon:{
    marginTop: 10,
    position:"absolute",
    alignSelf:"center",
    top:"90%"
  },
  price:{
    height: 15,
  },
  codeCon:{
    marginTop: 10,
    position:"absolute",
    alignSelf:"flex-end",
    top:"90%"
  },
  code:{
    height: 18,
  },
});
