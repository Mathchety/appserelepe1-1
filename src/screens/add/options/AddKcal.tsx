import React, { useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { HistoryContext } from '../../../Context/HistoryContext';
import alimentos from '../../../data/alimentos.json';

type HistoryContextData = {
  history: any[];
  addToHistory: (item: any) => void;
};

const AddKcal: React.FC = () => {
  const { history, addToHistory } = useContext<HistoryContextData>(HistoryContext);

  const [inputText, setInputText] = React.useState('');
  const [suggestions, setSuggestions] = React.useState<any[]>(alimentos.slice(0, 10));

  const handleAddToHistory = (item: any) => {
    addToHistory(item);
  };

  function removeDiacritics(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const handleInputChange = text => {
    setInputText(text);
    if (text === '') {
      setSuggestions(alimentos.slice(0, 10));
    } else {
      let filteredAlimentos = alimentos.filter(alimento => removeDiacritics(alimento.nome.toLowerCase()).includes(removeDiacritics(text.toLowerCase())));
      if (filteredAlimentos.length < 10) {
        const additionalItems = alimentos.filter(alimento => !filteredAlimentos.includes(alimento)).slice(0, 10 - filteredAlimentos.length);
        filteredAlimentos = [...filteredAlimentos, ...additionalItems];
      }
      setSuggestions(filteredAlimentos.slice(0, 10));
    }
  };


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View >
        <Text>Total de kcal: {history.reduce((total, { valorkcal }) => total + valorkcal, 0)} Kcal</Text>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={handleInputChange}
          placeholder="Digite o nome do alimento"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Button title="Add to history" onPress={() => {
          const selectedItem = alimentos.find(alimento => removeDiacritics(alimento.nome.toLowerCase()) === removeDiacritics(inputText.toLowerCase()));
          if (selectedItem) {
            addToHistory(selectedItem);
            setInputText('');
          }
        }} />
      </View>
      <View style={styles.suggestionsTop}>
        {suggestions.length > 0 && (
          <View style={styles.suggestionsContainer}>
            {suggestions.map((suggestion, index) => (
              <View key={index} style={styles.suggestionItem}>
                <Text onPress={() => setInputText(suggestion.nome)}>
                  {suggestion.nome} - {suggestion.porcao} - {suggestion.valorkcal} Kcal
                </Text>
                <Button title="+" onPress={() => handleAddToHistory(suggestion)} />
              </View>
            ))}
          </View>
        )}
      </View>
      <ScrollView style={styles.historyScrollView}>
        <View style={styles.historyContainer}>
          {history.map((item, index) => (
            <Text key={index} style={styles.historyItem}>
              {item.nome} - {item.porcao} - {item.valorkcal} kcal
            </Text>
          ))}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  containerTop: {
    paddingTop: 50,
    flex: 1,
    height: 60,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  suggestionsContainer: {
    width: '100%',
    marginTop: 10,
    backgroundColor: '#fff',
  },
  input: {
    height: 30,
    minWidth: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    borderRadius: 10,
  },
  suggestionsTop: {
    width: '90%',
  },
  suggestionItem: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  historyScrollView: {
    flex: 2,
    width: '90%',
    marginTop: 20,
    padding: 5,
    backgroundColor: 'red',
  },
  historyContainer: {
    width: '90%',
    marginTop: 20,
    padding: 5,
  },
  historyItem: {
    marginBottom: 5,
  },
  totalKcal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default AddKcal;
