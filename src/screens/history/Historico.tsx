import React , { useContext} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/HeaderHistory';
import { HistoryContext } from '../../Context/HistoryContext';
import Colors from '../../constants/Colors';


type HistoryContextData = {
  history: any[];
};

const Historico: React.FC = () => {
  const { history } = useContext<HistoryContextData>(HistoryContext);

  return (
    <View style={{ flex: 1}}>
      <Header/>

      <ScrollView>
      <View style={styles.container}>
        <View style={styles.historyContainer}>
          {history.map((item, index) => (
            <Text key={index} style={styles.historyItem}>
              {item.nome} - {item.porcao} - {item.valorkcal} kcal
            </Text>
          ))}
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  title:{
    fontSize:24,
    fontWeight: 'bold',
  },
  historyContainer: {
    marginTop: 20,
  },
  historyItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Historico;