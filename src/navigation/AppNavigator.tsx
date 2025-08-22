import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import MainMenuScreen from '../screens/MainMenuScreen';
import AgendaScreen from '../screens/AgendaScreen';
import ReportesScreen from '../screens/ReportesScreen';
import PadresScreen from '../screens/PadresScreen';

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  Agenda: undefined;
  Reportes: undefined;
  Padres: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainMenuScreen} />
      <Stack.Screen name="Agenda" component={AgendaScreen} />
      <Stack.Screen name="Reportes" component={ReportesScreen} />
      <Stack.Screen name="Padres" component={PadresScreen} />
    </Stack.Navigator>
  );
}
