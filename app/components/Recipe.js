import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const Recipe = ({name, picture, description, ingredients}) => {
    return (
        <View>
        <Image source={picture}/>
        <Text>{name}</Text >
        <Text>{description}</Text>
        <Text>{ingredients}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 14,
    }
})

export default Recipe