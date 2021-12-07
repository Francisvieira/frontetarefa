import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './Telas/Login';
import Conta from './Telas/Conta';


const Stack = createNativeStackNavigator();
export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Conta" component={Conta} options={{ headerShown: false }} />
      </Stack.Navigator>


    </NavigationContainer>

  );
}

