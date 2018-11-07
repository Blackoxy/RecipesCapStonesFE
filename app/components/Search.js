import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, Button, Alert } from 'react-native';
import Logo from '../../Pictures/berries.jpg';
import {SearchBar} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import './Routes';

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
           TextInputValue: '',
           ingredients: []
        }
    }
    buttonClickListener = () =>{
        this.setState(prevState => ({ ingredients: [...prevState.ingredients, this.state.TextInputValue]}))
    }
        render(){
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.bg} source={Logo}>
                <Text style={styles.text}>Search For Recipes</Text>
                <Text style={styles.info}>Start typing in the ingredients you have and we will get you cookin!</Text>
                <TextInput 
                    style={{height: 45,width: "100%",borderColor: "gray",borderWidth: 2}}
                    placeholder="Enter Ingredient"
                    onChangeText={TextInputValue => this.setState({TextInputValue})}
                    underlineColorAndroid="transparent" />
                    { this.state.ingredients.map(ingredient => <Text style={styles.ingre}>{ingredient}</Text>) } 
                 <View style={[{ width: "10%", margin: 15, backgroundColor: 'grey', color: 'white' }]}>
                    <Button
                        style={styles.button}
                        onPress={this.buttonClickListener}
                        title="+"
                        color="#00B0FF"
                    />
                </View>
                    <Button style={styles.submit} title='Search!' onPress= {() => {Actions.Recipes(); }}>
                    <Text>
                        Search For Recipes
                    </Text>
                </Button>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // alignItems: 'center',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        padding: 20,
        backgroundColor: 'black'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    ingre: {
        width: '100%',
        padding: 10,
    },
    submit: {
        width: '100%',
        backgroundColor: 'grey',
        color: 'grey',
        padding: 10,
    },
    info: {
        textAlign: 'center',
        fontWeight: "600",
        color: 'white',
        padding: 22,
        backgroundColor: 'gray',
        opacity: .8,
    },
    bg: {
        flex: 1,
        resizeMode: 'cover',
        
    }
})

export default Search