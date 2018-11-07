import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import Logo from '../../Pictures/woodtable.jpg';
import LoginForm from './LoginForm';



class Login extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <ImageBackground style={styles.logo} source={Logo}/>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm {...this.props} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})

export default Login