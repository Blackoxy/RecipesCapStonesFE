import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Button } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

import {Actions} from 'react-native-router-flux';
import './Routes'

const LoginForm = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.info}>RECIPEdia</Text> 
                <TextInput placeholder='Username or Email' style={styles.input} />
                <TextInput placeholder='Enter Password' style={styles.input} secureTextEntry={true} />
                <Button title='Login' onPress= {() => {Actions.Home(); }}>
                    <Text>
                        Login
                    </Text>
                </Button>
                <Button title='Signup' onPress={() => 5} />
            </View>
        )
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignContent: 'center'
    },
    info: {
        textAlign: 'center',
        fontSize: 30
    },
    input:{
        height: 20,
        width: 200,
        color: 'red',
        backgroundColor: 'grey',
        marginBottom: 20,
        color: '#FFFFFF',
        paddingHorizontal: 10,
        borderRadius: 30
    }

})
   
export default LoginForm;