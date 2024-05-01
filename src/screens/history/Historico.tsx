import React , { useContext, useEffect, useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header/HeaderHistory';
import { HistoryContext } from '../../Context/HistoryContext';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import  ProgressContext  from '../../Context/ProgressContext';

type HistoryContextData = {
  history: { nome: string; porcao: string; valorkcal: string; timestamp: Date }[];
};

const Historico: React.FC = () => {
  const { history } = useContext<HistoryContextData>(HistoryContext);
  const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());
  const { progressValue, setProgressValue } = useContext(ProgressContext);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMinute(new Date().getMinutes());
    }, 60000); // Atualiza a cada minuto

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <View style={{ flex: 1}}>
      <Header/>
    <View>
      <Text style={{fontSize: 18, alignSelf:'center'}}>Meta de calorias: {progressValue} Kcal</Text>
      <Text style={{fontSize: 18, alignSelf:'center'}}>Você ja consumiu: {history.reduce((total, { valorkcal }) => total + parseInt(valorkcal), 0)} Kcal</Text>
    </View>
      <ScrollView style={styles.historyScrollView}>
      <View style={styles.container}>
        <View style={styles.historyContainer}>
          {history.map((item, index) => (
            <View key={index} style={styles.historyItem}>
              <View>
              <Text style={{ fontSize: 18 }}>{item.nome}</Text>
              <Text style={{ fontSize: 12 }}>{item.porcao}</Text>
              </View>
              <Text>{item.valorkcal} Kcal</Text>
              <Text style={styles.timestamp}>{formatDistanceToNow(item.timestamp, { addSuffix: true, locale: ptBR })}</Text>
            </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  historyScrollView: {
    width: '100%',
  },
  title:{
    fontSize:24,
    fontWeight: 'bold',
  },
  historyContainer: {
    width: '100%',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  historyItem: {
    padding: 7,
    backgroundColor: '#FFFFFF',
    fontSize: 18,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
    borderBottomWidth: 1, 
    borderBottomColor: '#18ADB7', 
  },
  timestamp: {
    fontSize: 12,
  },
});

export default Historico;