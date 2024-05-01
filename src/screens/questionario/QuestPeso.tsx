import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header/HeaderMetas';
import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';

export default function QuestPeso() {
  const navigation = useNavigation();

  const handleGoHome = () => {
    navigation.navigate('Home');
  }
  return (
    <View style={styles.container}>
{/*       <Header/>
 */}      <Text style={styles.title}>Qual o seu objetivo</Text>
      <View style={{backgroundColor: '#41f812', width: '90%', height: 400, alignItems: 'center', borderRadius: 15 }}>
        <TouchableOpacity style={styles.button} onPress={handleGoHome} >
          <Text style={styles.title}>Perda de peso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleGoHome} >
          <Text style={styles.title}>Ganho de peso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleGoHome} >
          <Text style={styles.title}>Manter o peso</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundcolor_primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 8,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    marginTop: 50,
  },
});