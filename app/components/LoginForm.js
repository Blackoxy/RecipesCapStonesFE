import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Button } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

import {Actions} from 'react-native-router-flux';
import './Routes'

const LoginForm = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.info}>R E C I P E . d i a</Text> 
                <TextInput placeholder='Username or Email' style={styles.input} />
                <TextInput placeholder='Enter Password' style={styles.input} secureTextEntry={true} />
                <Button style={styles.button} color='#55b4d1' title='Login' onPress= {() => {Actions.Home(); }} />
                <Button style={styles.button} color='#2b5a68' title='Signup' onPress={() => 5} />
            </View>
        )
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    info: {
        fontFamily: 'Arial Rounded MT Bold',
        textAlign: 'center',
        fontSize: 30,
        margin: 5,
        padding: 20,
        marginBottom: 20,
        fontWeight: '700',
        borderWidth: 5,
        borderColor: 'black',
        borderRadius: 16,
    },
    input: {
        height: 30,
        width: 200,
        color: 'red',
        marginBottom: 20,
        color: 'black',
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        alignSelf: 'center'
    },
    button: {
        flex: 1,
        padding: 10,
        margin: 0,
    }

})
   
export default LoginForm;