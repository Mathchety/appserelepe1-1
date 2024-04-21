import React from "react";
import { TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';


const ConfigButton = () => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => { }}
                style={{ flexDirection: 'row', alignItems: 'center' }}
            >
                <AntDesign name="setting" size={24} color="black" />
                </TouchableOpacity>
        </View>
    )
}
export default ConfigButton;