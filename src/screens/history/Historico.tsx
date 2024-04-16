import React , { useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/HeaderHistory';
import { HistoryContext } from '../../Context/HistoryContext';

type HistoryContextData = {
  history: any[];
};

const Historico: React.FC = () => {
  const { history } = useContext<HistoryContextData>(HistoryContext);

  return (
    <View style={{ flex: 1}}>
      <Header/>
      <View style={styles.container}>
        <Text style= {styles.title}>Historico teste</Text>
        <View style={styles.historyContainer}>
          {history.map((item, index) => (
            <Text key={index} style={styles.historyItem}>
              {item.nome} - {item.porcao} - {item.valorkcal} kcal
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
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