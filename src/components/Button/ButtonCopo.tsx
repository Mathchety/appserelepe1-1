import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from "../../constants/Colors";

const ButtonCopo = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.botaoCopo} onPress={onPress}>
            <MaterialCommunityIcons name="cup" size={28} color={Colors.lightBlue} />
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    botaoCopo: {
        width: 24,
        height: 24,
        padding: 0,

    }
})

export default ButtonCopo;