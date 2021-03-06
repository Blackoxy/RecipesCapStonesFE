import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../../Pictures/fruitsflowers.jpg';
import About from './About';
import Login from './Login';
// import Routes from './Routes';

const Home = () => {
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.logo} source={Logo}>
        <Text style={styles.h1}>R E C I P E . d i a</Text>
        <About />
        {/* <Routes /> */}
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'Arial Rounded MT Bold',
    textAlign: 'center',
    fontSize: 40,
    color: 'white',
    fontWeight: "700",
    backgroundColor: 'black',
    padding: 20,
    borderWidth: 3,
    borderColor: 'black',
    marginTop: -330,
    
  },
  container: {
    flex:1,
    backgroundColor: 'gray',
    
  },
  logo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
})

export default Home;


