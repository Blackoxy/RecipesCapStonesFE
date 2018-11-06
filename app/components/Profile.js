import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, Button, TouchableHighlight } from 'react-native';
import Selfie from '../../Pictures/Selfie.jpg';
import { Actions } from 'react-native-router-flux';
import Logo from '../../Pictures/berries.jpg'

class Profile extends Component {

    
    render(){
    
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.bg} source={Logo}>
                <TouchableHighlight style={ styles.imageContainer }>
                    <Image style={styles.self} source={Selfie} />
                </TouchableHighlight>
                <View style={styles.container2}>
                    <Text style={styles.username}>Username: Dev.AnhNguyen</Text>
                    <Text style={styles.password}>Password: <Text style={styles.changepw} >Change Password</Text></Text>
                </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignSelf: 'center',
        width: '100%',
    },
    text: {
        color: 'white',
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
        padding: 20,
        marginTop: 5,
        backgroundColor: 'gray',
        opacity: .7,
    },
    bg: {
        flex: 1,
        resizeMode: 'stretch',
    },
    imageContainer: {
        marginTop: 15,
        height: 128,
        width: 128,
        borderRadius: 64,
        alignSelf: 'center',
      },
    self: {
        padding: 5,
        margin: 5,
        height:128,
        width: 128,
        borderRadius: 64,
    },
    container2: {
        alignSelf: 'center',
        fontSize: 14,
        fontWeight: '500',
        marginTop: 15,
    },
    changepw: {
        color: 'red',
    }

})

export default Profile