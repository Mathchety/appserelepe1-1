import React, { useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { HistoryContext } from '../../../Context/HistoryContext';
import alimentos from '../../../data/alimentos.json';
import Header from '../../../components/HeaderAddkcal';
import { SafeAreaView } from 'react-native-safe-area-context';


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
      <SafeAreaView>
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
            <Text>Add to history</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.suggestionsTop}>
          {suggestions.length > 0 && (
            <View style={styles.suggestionsContainer}>
              {suggestions.map((suggestion, index) => (
                <View key={index} style={styles.suggestionItem}>
                  <Text onPress={() => setInputText(suggestion.nome)}>
                    <Text>{suggestion.nome} - </Text>
                    <Text>{suggestion.porcao} - </Text>
                    <Text>{suggestion.valorkcal} kcal</Text>
                  </Text>
                  <Button title="+" onPress={() => handleAddToHistory(suggestion)} />
                </View>
              ))}
            </View>
          )}
        </View>
        <ScrollView style={styles.historyScrollView}>
          <View style={styles.historyContainer}>
            {history
              .slice()
              .reverse()
              .map((item, index) => (
                <View key={index} style={styles.historyItem}>
                  <Text>{item.nome}</Text>
                  <Text>{item.porcao}</Text>
                  <Text>{item.valorkcal} kcal</Text>
                </View>
              ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80ed99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#fff',
    width: '100%'
  },
  containerTop: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  suggestionsContainer: {
    width: '100%',
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
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
  suggestionsTop: {
    width: '100%',
  },
  suggestionItem: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 2,
    paddingLeft: 10,
    paddingRight: 10,
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    backgroundColor: 'red',
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
