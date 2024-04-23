
import { useContext } from 'react';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import ProgressContext from '../../Context/ProgressContext';

export default function Metas() {
  const { progressValue } = useContext(ProgressContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metas</Text>
      <ProgressBar progress={progressValue} color="#0000ff" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:24,
    fontWeight: 'bold',
  }
});