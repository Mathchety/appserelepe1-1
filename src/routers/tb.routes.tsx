import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
//Contextos
import { HistoryProvider } from '../Context/HistoryContext';
import {ProgressProvider} from '../Context/ProgressContext';
//Telas
import Home from '../screens/home/Home';
import Metas from '../screens/meta/Metas';
import Historico from '../screens/history/Historico';
import AddKcal from '../screens/add/options/AddKcal';
import AddWater from '../screens/add/options/AddAgua';
import Logout from '../screens/login/Logout';

const Tab = createBottomTabNavigator();

export default function TabsRoutes() {
  return (

    <ProgressProvider>
    <HistoryProvider>
      <Tab.Navigator backBehavior={'order'} screenOptions={{ headerShown: false }}>
        <Tab.Screen
            name='Home'
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
              tabBarLabel: ''
            }}
          />
          <Tab.Screen
            name='metas'
            component={Metas}
            options={{
              tabBarIcon: ({ color, size }) => <MaterialIcons name="auto-graph" size={24} color={color} />,
              tabBarLabel: ''
            }}
          />
          {/* <Tab.Screen
            name='Add'
            component={Add}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (<ButtonAdd size={size} color={color} />),
            }}
          /> */}
          <Tab.Screen
            name='historico'
            component={Historico}
            options={{
              tabBarIcon: ({ color, size }) => <FontAwesome6 name="clock-rotate-left" size={24} color={color} />,
              tabBarLabel: ''
            }}
          />
          {<Tab.Screen
            name='perfil'
            component={Logout}
            options={{
              tabBarIcon: ({ color, size }) => <Feather name='user' color={color} size={size} />,
              tabBarLabel: ''
            }}
          />}
          <Tab.Screen
            name="AddWater"
            component={AddWater}
            options={{ tabBarButton: () => null }}
          />
          <Tab.Screen
            name="AddKcal"
            component={AddKcal}
            options={{ tabBarButton: () => null }}
          />
      </Tab.Navigator>
    </HistoryProvider>
    </ProgressProvider>
  )
}
