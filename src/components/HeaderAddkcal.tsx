import React from 'react';
import { View,  StyleSheet, Text } from 'react-native';
import BackButton from './Button/BackButton';
import ConfigButton from './Button/ConfigButton';


const Header = () => {
    return (
        <View style={styles.header}>
            <BackButton/>
            <Text style={styles.textContainer}>Adicionar calorias</Text>
            <ConfigButton/>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10
    },
    textContainer: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})
export default Header;