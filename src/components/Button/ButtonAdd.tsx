import React from "react";
import { View, StyleSheet } from "react-native";
import {Entypo} from '@expo/vector-icons'


export default function ButtonAdd({size, color}){
    return(
        <View style={styles.container}>
            <Entypo name="plus" color={color} size={size}/>           
        </View>
    )

}
    const styles = StyleSheet.create({
        container:{
             width: 60,
             height: 60,
             borderRadius: 30,
             backgroundColor: '#3eccf5',
             alignItems: 'center',
             justifyContent: 'center'
        }
    })