import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, Button, Alert } from 'react-native';
import Logo from '../../Pictures/fruitsflowers.jpg';
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
                <Text style={styles.text}>Find A Recipe</Text>
                <Text style={styles.info}>Start typing in the ingredients you have and we will get you cookin!</Text>
                <TextInput 
                    style={{height: 45,width: "90%",borderColor: "gray",borderWidth: 2, borderRadius: 16, alignSelf: 'center'}}
                    placeholder="Enter Ingredient"
                    onChangeText={TextInputValue => this.setState({TextInputValue})}
                    underlineColorAndroid="transparent" />
                    {this.state.ingredients.map(ingredient => {
                        return (
                                <Text 
                                key={ingredient} 
                                style={styles.ingre}>
                                {ingredient}
                        </Text> )
                        })
                    } 
                 <View style={[{ width: "10%", margin: 10, backgroundColor: 'grey', color: 'white', alignSelf: 'center' }]}>
                    <Button
                        style={styles.button}
                        onPress={this.buttonClickListener}
                        title="+"
                        color='#55b4d1'
                    />
                </View>
                    <Button color='#55b4d1' style={styles.submit} title='Search!' onPress= {() => {Actions.Recipes(); }}>
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
        marginTop: 20,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        padding: 20,
        backgroundColor: 'black'
    },
    button: {
        alignSelf: 'center',
    },
    ingre: {
        width: '100%',
        padding: 8,
        textAlign: 'center',
        fontWeight: '400'

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
        color: 'black',
        padding: 22, 
    },
    bg: {
        flex: 1,
        resizeMode: 'cover',   
    }
})

export default Search