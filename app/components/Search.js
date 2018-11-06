import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import Logo from '../../Pictures/berries.jpg';

class Search extends Component {
    render(){
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.bg} source={Logo}>
                <Text style={styles.text}>Search For Recipes</Text>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    text: {
        color: 'gray',
        textAlign: 'center',
    },
    bg: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    }
})

export default Search