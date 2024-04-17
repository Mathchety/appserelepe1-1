import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const BackButton = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { }}
                style={{ flexDirection: 'row', alignItems: 'center' }}
            >
                <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: 24,
        height: 24,
        margin: 10,
        padding: 0,

    }
})

export default BackButton;