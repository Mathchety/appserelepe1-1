import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Modal, Button, TextInput } from 'react-native';
import { ProgressBar, Title } from 'react-native-paper';
import ProgressContext from '../../Context/ProgressContext';
import Slider from '@react-native-community/slider';
import Header from '../../components/Header/HeaderMetas';

export default function Metas() {
  const { progressValue, setProgressValue } = useContext(ProgressContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [calorieGoal, setCalorieGoal] = useState(0); // Altere para 0 ou outro valor numérico inicial
  const [waterGoal, setWaterGoal] = useState(0);

  const progress = (progressValue / calorieGoal) * 100;


  return (
    <View style={styles.container}>
      <Header/>
      <Text> Sua meta diaria é {calorieGoal} Kcal</Text>
      <Text> Sua meta diaria é {waterGoal.toFixed(3)} Litros</Text>
      <ProgressBar progress={progress} color="#0000ff" />
      <Text style={styles.title}>Defina suas Metas</Text>
      <ProgressBar progress={10} color="#0000ff" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Definir Metas</Text>

            <TextInput
              style={styles.input}
              onChangeText={(text) => setCalorieGoal(Number(text))}
              value={calorieGoal.toString()}
              placeholder="Meta de ingestão de calorias"
              keyboardType="numeric"
            />

            <Text>Meta de ingestão de água: {waterGoal.toFixed(3)} litros</Text>
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={0}
              maximumValue={5}
              step={0.05}
              value={waterGoal}
              onValueChange={setWaterGoal}
            />

            <Button
              title="Finalizado"
              onPress={() => {
                setModalVisible(!modalVisible);
                setProgressValue(calorieGoal);
              }}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.buttonContainer}>
        <Button
          title="Definir Meta"
          onPress={() => setModalVisible(true)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
  },
  buttonContainer: {
    marginBottom: 20,
  },
});