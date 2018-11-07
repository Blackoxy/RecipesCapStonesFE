import React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

const PostRecipe = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.info}>Share Your Delicious Recipe</Text>
            <TextInput style={styles.name} placeholder='Name of Recipe'>
            </TextInput>
            <TextInput style={styles.pic} placeholder='Picture URL'>
            </TextInput>
            <TextInput style={styles.des} placeholder='Description'>
            </TextInput>
            <TextInput style={styles.ing} placeholder='List Ingredients'>
            </TextInput>
            <Button style={styles.button} title='Post!' onPress={()=> 5} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    info: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        fontWeight: '500',
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'black',
    },
    name: {
        color: 'black',
        width: '100%',
        fontWeight: '400',
        padding: 15,
        backgroundColor: 'grey',
        opacity: .8,
        borderWidth: 1,
        borderColor: 'black'
        
    },
    pic: {
        color: 'black',
        width: '100%',
        fontWeight: '400',
        padding: 15,
        backgroundColor: 'grey',
        opacity: .8,
        borderWidth: 1,
        borderColor: 'black'
    },
    des: {
        color: 'black',
        width: '100%',
        fontWeight: '400',
        padding: 15,
        backgroundColor: 'grey',
        opacity: .8,
        borderWidth: 1,
        borderColor: 'black'
    },
    ing: {
        color: 'black',
        width: '100%',
        fontWeight: '400',
        padding: 15,
        backgroundColor: 'grey',
        opacity: .8, 
        borderWidth: 1,
        borderColor: 'black'
    },
    button: {
        width: "10%",
        margin: 15, 
        backgroundColor: 'grey', 
        color: 'white'
    }


})

export default PostRecipe