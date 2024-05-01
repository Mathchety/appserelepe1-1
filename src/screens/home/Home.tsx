import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FAB, PaperProvider, Portal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export default function Feed() {
  const [state, setState] = React.useState({ open: false });
  const navigation = useNavigation();
  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <>
      <PaperProvider>
        <Portal >
          <View style={styles.container}>
            {/* aqui vai o conteudo da pagina */}
            <Text style={styles.title}>Home </Text>
          </View>
          <FAB.Group
            open={open}
            visible
            icon={open ? 'close' : 'plus'}
            actions={[
              { icon: 'plus', onPress: () => '' },
              {
                icon: 'water',
                label: 'Água',
                onPress: () => navigation.navigate('AddWater'),
              },
              {
                icon: 'food-apple',
                label: 'Lanche',
                onPress: () => navigation.navigate('AddBreakFast'),
              },
              {
                icon: 'food',
                label: 'Almoço',
                onPress: () => navigation.navigate('AddLunch'),
              },
              {
                icon: () => <MaterialIcons name="dinner-dining" size={24} color="#21005d" />,
                label: 'Jantar',
                onPress: () => navigation.navigate('AddDinner'),
              },
              {
                icon: 'food-variant',
                label: 'Café da manhã',
                onPress: () => navigation.navigate('AddBreakFast') ,
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundcolor_secondary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  fab: {

    // Add your desired style values for the 'fab' property here
  },
});
