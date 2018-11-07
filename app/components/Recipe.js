import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const Recipe = ({name, picture, description, ingredients}) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
        <Image style={styles.pics} source={{uri: picture }}/>
            </View>
        <Text style={styles.info}>{name}</Text >
        {/* <Text style={styles.info}>{ingredients}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        flex: 1,
        flexDirection: 'column'
    },
    info: {
        marginTop: 1,
        textAlign: 'center',
        fontSize: 14,
        color: 'black'
    },
    imageContainer: {
        flexDirection: 'row',
        marginTop: 10,
        height: 128,
        width: 128,
        borderRadius: 64,
        alignSelf: 'center',
    },
    pics: {
        padding: 5,
        margin: 2,
        height:128,
        width: 128,
        borderRadius: 64,
        borderWidth: 5,
        borderColor: '#bc3434',
        opacity: .8
        
    }

})

export default Recipe