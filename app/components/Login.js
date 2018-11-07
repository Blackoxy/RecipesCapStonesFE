import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import Logo from '../../Pictures/fruitsflowers.jpg';
import LoginForm from './LoginForm';


class Login extends Component {
    render(){
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.logo} source={Logo}>   
                    <Text>RECIPEdia</Text>           
                    <LoginForm {...this.props} />
                </ImageBackground>
            </View>
            )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        color: 'black',
    },
    logo: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        width: '100%'
    },
})

export default Login