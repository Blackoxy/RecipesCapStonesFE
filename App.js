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
import logo from './Pictures/food-background.jpg'


export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} source={logo}>
            <Text style={styles.welcome}>What's In Your Fridge?</Text>
            <Text style={styles.instructions}>What's In Yo Fridge gives you the power to make delicious meals with what you already have! No more going to the store for just one ingredient!</Text>
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
