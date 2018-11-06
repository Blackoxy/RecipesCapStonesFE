import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import Logo from '../../Pictures/berries.jpg';
import { Image } from 'native-base';
import Recipe from './Recipe';


class Recipes extends Component {
    state = {recipe: [] }
    
    componentDidMount(){
        const URL = 'http://127.0.0.1:8000/recipes/';
        return fetch(URL)
            .then((res) => res.json())
            .then(res => { this.setState({recipe:res})
               
            })
    }


    render(){
        const recipe = this.state.recipe 
        ?  this.state.recipe.map(recipe => {
            return (
                <Recipe 
                key={recipe.id}
                {...recipe}
                />
            )
            }) : "Loading Recipes"

        return (
            <View style={styles.container}>
                <ImageBackground style={styles.bg} source={Logo}>
                {recipe}
                <Text style={styles.text}>Recipes You Can Make</Text>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
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

export default Recipes