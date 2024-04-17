import React from 'react';

import { View, Button, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import ButtonPlus from '../../components/Button/ButtonPlus';

const App = ({ navigation }) => {

  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <Button
        title="Ir para a página 1"
        onPress={() => navigation.navigate('AddKcal')}
      />
      <Button
        title="Ir para a página 2"
        onPress={() => navigation.navigate('Page2')}
      />
      <Button
        title="Ir para a página 3"
        onPress={() => navigation.navigate('Page3')}
      />
      <Button
        title="Ir para a página 4"
        onPress={() => navigation.navigate('Page4')}
      />
    </View>

    <SafeAreaView style={{ flex: 1 , alignItems: 'center', }}>
   <TouchableOpacity
        onPress={() => navigation.navigate('AddLunch')}
        style={{ flexDirection: 'row', alignItems: 'center' }}
      >
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddLunch')}
        style={{ flexDirection: 'row', alignItems: 'center' }}
      >
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddDinner')}
        style={{ flexDirection: 'row', alignItems: 'center' }}
      >
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddSnack')}
        style={styles.button}
      >
      </TouchableOpacity> 
      <TouchableOpacity
        onPress={() => navigation.navigate('AddLunch')}
        style={styles.button}
        >
        <ButtonPlus/>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 100,
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: 'red'
  }
})

export default App;
