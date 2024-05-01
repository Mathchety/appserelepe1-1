import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import ButtonCopo from '../../../components/Button/ButtonCopo';
import Header from "../../../components/Header/HeaderAgua";
import Colors from '../../../constants/Colors';

const AddWater = () => {
  const [value, setValue] = useState('');
  const [history, setHistory] = useState([]);
  const [sum, setSum] = useState(0);


  const handlePress = () => {
    const newValue = parseFloat(value);
    if (!isNaN(newValue)) {
      setHistory([{ value: newValue, id: Math.random().toString() }, ...history]);
      setSum(sum + newValue);
    }
    setValue('');
  };
  const handlePressCup = () => {
    const newValue = 250;
    if (!isNaN(newValue)) {
      setHistory([{ value: newValue, id: Math.random().toString() }, ...history]);
      setSum(sum + newValue);
    }
    setValue('');
  };


  const handleDelete = (id) => {
    const itemToDelete = history.find(item => item.id === id);
    setHistory(history.filter(item => item.id !== id));
    setSum(sum - itemToDelete.value);
  };


  return (
    <View style={styles.container}>
      <Header />
      <Text style={{ marginTop: 20 }}>Soma: {sum}ML</Text>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setValue(text)}
          value={value}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.botaoCopo}>
          <ButtonCopo onPress={handlePressCup} />
          <Text style={styles.textCup}>+250ML</Text>
        </TouchableOpacity>
      </View>

      <Button
        title="adicionar água"
        onPress={handlePress}
      />

      <Text style={{ marginTop: 20 }}>Histórico:</Text>
      <ScrollView style={styles.historico}>
        {history.map((item, index) => (
          <View key={index} style={styles.historyItem}>
            <Text>{item.value}ML</Text>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text style={{ color: 'red' }}>Excluir</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderWidth: 2,

    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '36%',
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
    gap: 20,
  },
  historico: {
    width: '100%', 
    backgroundColor: Colors.backgroundcolor_primary,
   
  },
  botaoCopo: {
    /* backgroundColor: 'blue', */
    alignItems: 'center',
    /* height: 24,
    width: 24,  */
  },
  containerInput: {
    flexDirection: 'row',
    width: '90%',
    /* backgroundColor: 'yellow', */
    alignItems: 'center',
    margin: 15,
    gap: 40,
  },
  textCup: {
    fontSize: 9,
    /* backgroundColor: 'green', */

  },
});

export default AddWater;
