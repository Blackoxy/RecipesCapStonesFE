import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Button } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Home from './Home';
import {Actions} from 'react-native-router-flux';

const LoginForm = () => {
        return (
            <View style={styles.container}>
                <Text>SIGN-IN</Text>
                <TextInput placeholder='Username or Email' style={styles.input} />
                <TextInput placeholder='Enter Password' style={styles.input} />
                <Button title='Login' onPress={Actions.Home} />
            </View>
        )
    }


const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
    },
    input:{
        height: 40,
        color: 'red',
        backgroundColor: 'grey',
        marginBottom: 20,
        color: '#FFFFFF',
        paddingHorizontal: 10,
    },
})

export default LoginForm;