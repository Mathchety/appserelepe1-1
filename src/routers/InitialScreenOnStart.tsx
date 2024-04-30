import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login/Login";
import Signup from "../screens/login/Signup";
import Forgot from "../screens/login/Forgot";
import React from 'react';
const Stack = createNativeStackNavigator();

export const InitialScreenOnStart = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Forgot"
        component={Forgot}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
