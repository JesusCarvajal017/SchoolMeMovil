import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens de seguridad y flujo principal
import InicioScreen from '../screens/ModelSecurity/InicioScreen';
import LoginScreen from '../screens/ModelSecurity/LoginScreen';
import MainTabsScreen from '../screens/ModelSecurity/MainTabsScreen';

// Otras pantallas de tu app
import AgendaScreen from '../screens/AgendaScreen';
import ReportesScreen from '../screens/ReportesScreen';
import PadresScreen from '../screens/PadresScreen';

export type RootStackParamList = {
  Inicio: undefined;
  Login: undefined;
  Main: undefined; // Contenedor con Navbar y tabs
  Agenda: undefined;
  Reportes: undefined;
  Padres: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Inicio"
      screenOptions={{ headerShown: false }}
    >
      {/* Seguridad */}
      <Stack.Screen name="Inicio" component={InicioScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />

      {/* Contenedor con Navbar y tabs */}
      <Stack.Screen name="Main" component={MainTabsScreen} />

      {/* Otras pantallas fuera de los tabs */}
      <Stack.Screen name="Agenda" component={AgendaScreen} />
      <Stack.Screen name="Reportes" component={ReportesScreen} />
      <Stack.Screen name="Padres" component={PadresScreen} />
    </Stack.Navigator>
  );
}
