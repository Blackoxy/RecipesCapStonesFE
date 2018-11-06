import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import Logo from '../../Pictures/woodtable.jpg';

class Favorites extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Recipes You Can Make</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'gray',
    },
})

export default Favorites