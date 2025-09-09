import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AjustesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ajustes</Text>
      <Text style={styles.text}>Configura tu aplicación aquí.</Text>
    </SafeAreaView>
  );
};

export default AjustesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E1E50',
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
});
