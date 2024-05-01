import React from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: '#007AFF', // Estilo padrão do botão
          padding: 10,
          borderRadius: 8,
        },
        style,
      ]}
    >
      <Text style={{ color: 'white', textAlign: 'center' }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

/*<Button onPress={() => {
        navigation.navigate('Local de destino');
      }} title={"Click"} /> 
      
      codigo para chaamr o botão*/