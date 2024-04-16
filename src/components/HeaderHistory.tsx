import React from 'react';
import { View,  StyleSheet, Text } from 'react-native';
import BackButton from './Button/BackButton';
import ConfigButton from './Button/ConfigButton';


const Header = () => {
    return (
        <View style={styles.header}>
            <BackButton/>
            <Text style={styles.textContainer}>Historico</Text>
            <ConfigButton/>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 33,
        marginLeft:10,
        marginRight:10,
    },
    textContainer: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})
export default Header;