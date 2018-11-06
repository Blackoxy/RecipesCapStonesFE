/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Home from './app/components/Home';
import logo from './Pictures/berries.jpg';
import About from './app/components/About';
import Login from './app/components/Login';
import Profile from './app/components/Profile';
import Recipes from './app/components/Recipes';
import {NativeRouter, Switch, Route} from 'react-router-native';
import Routes from './app/components/Routes'

export default class App extends Component{


  render() {
    return (
     
      <View style={styles.container}>
       
        <ImageBackground style={styles.backgroundImage} source={logo}>
          <Routes />
        </ImageBackground>
      </View>
     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: 'lightgray',
    marginBottom: 5,
    margin: 1,
  },
});
