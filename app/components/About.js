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
    
  },
  instructions: {
    textAlign: 'center',
    color: 'black',
    marginTop: 40,
    margin: 20,
    fontSize: 14,
    padding: 25,
    borderWidth: 1,
    borderColor: '#55b4d1',
    borderRadius: 16,
    fontWeight: "600",
  },
});

export default About;


