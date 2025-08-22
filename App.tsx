import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioScreen from './src/screens/InicioScreen';
import LoginScreen from './src/screens/LoginScreen';
import MainMenuScreen from './src/screens/MainMenuScreen';

export type RootStackParamList = {
  Inicio: undefined;
  Login: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio" component={InicioScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
