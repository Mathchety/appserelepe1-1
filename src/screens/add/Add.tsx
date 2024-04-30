import React from 'react';

import { View, TouchableOpacity, StyleSheet, SafeAreaView, Text } from 'react-native';
import ButtonPlus from '../../components/Button/ButtonPlus';

const Add = ({ navigation }) => {

  return (

    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddKcal')}
          style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'blue', width: '80%', height: 100 }}

        ><Text>Adicionar consumo calorico</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddWater')}
          style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'green', width: '80%', height: 100 }}
        ><Text>Adicionaaaaaaaaaaaaaaaaaaaaaaaaaaar consumo de Água</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Button: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red'
  }
})

export default Add;
