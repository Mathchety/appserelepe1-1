import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FAB, PaperProvider, Portal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

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
                icon: 'food',
                label: 'Almoço',
                onPress: () => navigation.navigate('AddKcal'),              },
              {
                icon: 'food-apple',
                label: 'Lanche',
                onPress: () => navigation.navigate('AddKcal'),              },
              {
                icon: 'food-variant',
                label: 'Jantar',
                onPress: () => navigation.navigate('AddWater'),              },
              {
                icon: 'water',
                label: 'Água',
                onPress: () => navigation.navigate('AddWater'),
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
    backgroundColor: 'red',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  fab: {

    // Add your desired style values for the 'fab' property here
  },
});
