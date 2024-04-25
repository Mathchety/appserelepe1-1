import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, SafeAreaView, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { HistoryContext } from '../../../Context/HistoryContext';
import alimentos from '../../../data/alimentos.json';
import Header from '../../../components/HeaderAddkcal';

import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Icon from 'react-native-vector-icons/FontAwesome';


const AddKcal = () => {

  type HistoryContextData = {
    history: any[];
    addToHistory: (item: any) => void;
  };
  const { history, addToHistory } = useContext<HistoryContextData>(HistoryContext);
  const [inputText, setInputText] = React.useState('');
  const [suggestions, setSuggestions] = React.useState<any[]>(alimentos.slice(0, 7));
  const [checkedIndex, setCheckedIndex] = useState<number | null>(null);
  const handleAddToHistory = (item: any) => {
    addToHistory(item);

  };

  function removeDiacritics(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const handleInputChange = text => {
    setInputText(text);
    if (text === '') {
      setSuggestions(alimentos.slice(0, 7));
    } else {
      let filteredAlimentos = alimentos.filter(alimento => removeDiacritics(alimento.nome.toLowerCase()).includes(removeDiacritics(text.toLowerCase())));
      if (filteredAlimentos.length < 7) {
        const additionalItems = alimentos.filter(alimento => !filteredAlimentos.includes(alimento)).slice(0, 7 - filteredAlimentos.length);
        filteredAlimentos = [...filteredAlimentos, ...additionalItems];
      }
      setSuggestions(filteredAlimentos.slice(0, 7));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >

        <View style={styles.header}>
          <Header />
        </View>

        <View style={styles.containerTop}>
          <Text style={styles.totalKcal}>Total de kcal: {history.reduce((total, { valorkcal }) => total + valorkcal, 0)} Kcal</Text>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={handleInputChange}
            placeholder="Digite o nome do alimento"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const selectedItem = alimentos.find(alimento => removeDiacritics(alimento.nome.toLowerCase()) === removeDiacritics(inputText.toLowerCase()));
              if (selectedItem) {
                addToHistory(selectedItem);
                setInputText('');
              }
            }}>
            <Text>Adicionar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.suggestionsTop}>
          {suggestions.length > 0 && (

            <View style={styles.suggestionsContainer}>
              {suggestions.map((suggestion, index) => (

                <View key={index} style={styles.suggestionBox}>

                  <TouchableOpacity style={styles.suggestionItem} onPress={() => setInputText(suggestion.nome)}>
                    <View >
                      <Text style={{ fontSize: 18 }}>{suggestion.nome}  </Text>
                      <Text style={{ fontSize: 12 }}>{suggestion.porcao}  </Text>
                    </View>
                    <Text style={{ fontSize: 18 }}>{suggestion.valorkcal} kcal</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                      handleAddToHistory(suggestion);
                      setCheckedIndex(index);
                      setTimeout(() => setCheckedIndex(null), 1000);
                    }}
                  >
                    <Icon
                      name={checkedIndex === index ? 'check-circle' : 'plus-circle'}
                      size={checkedIndex === index ? 30 : 20}
                      color={checkedIndex === index ? 'green' : 'blue'}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
        </View>

        <ScrollView style={styles.historyScrollView}>
          <View style={styles.historyContainer}>
            <Text style={{ alignSelf: 'center' }}>Itens consumidos</Text>
            {history
              .slice()
              .map((item, index) => (
                <View key={index} style={styles.historyItem}>
                  <View>
                    <Text style={{ fontSize: 18 }}>{item.nome}</Text>
                    <Text style={{ fontSize: 12 }}>{item.porcao}</Text>
                  </View>
                  <Text>{item.valorkcal} kcal</Text>
                  <Text>{formatDistanceToNow(item.timestamp, { addSuffix: true, locale: ptBR })}</Text>
                </View>
              ))}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 33,
    backgroundColor: '#fff',
    width: '100%'
  },
  containerTop: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    height: 40,
    minWidth: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
  suggestionsContainer: {
    width: '95%',
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  suggestionsTop: {
    width: '100%',
  },
  suggestionBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 2,
    paddingLeft: 10,
    paddingRight: 10,
  },
  suggestionItem: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  historyScrollView: {
    width: '100%',
    marginTop: 10,
    padding: 5,
    backgroundColor: '#ffffeb',
  },
  historyContainer: {
    width: '100%',
    padding: 5,
  },
  historyItem: {
    padding: 7,
    backgroundColor: '#FFFFFF',
    fontSize: 18,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#18ADB7',
  },
  totalKcal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#0AD1C8',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default AddKcal;
