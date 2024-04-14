import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/HeaderHistory';

export default function Historico() {
  return (
    <View style={{ flex: 1}}>
      <Header/>
    <View style={styles.container}>
      <Text style= {styles.title}>Historico teste</Text>
    </View>
    </View>
  );
}

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
  }
});