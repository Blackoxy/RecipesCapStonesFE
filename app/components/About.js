import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'

const About = () => {
  
  return (
    <View style={styles.container}>
        <Text style={styles.instructions}>RECIPEdia gives you the power to make delicious meals with what you already have! No more wasted food! No more going to the store for just one ingredient!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: -10
  },
  instructions: {
    textAlign: 'center',
    color: 'black',
    marginTop: 50,
  },
});

export default About;


