import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Home from '../../screens/home/Home';

const BackButton = () => {
    const navigation = useNavigation();
    
    const handleGoHome= () => {
        navigation.navigate('Home');
        }
    
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={handleGoHome}            >
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