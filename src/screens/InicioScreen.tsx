import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

const { width } = Dimensions.get('window');

const InicioScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Curvas decorativas */}
      <Image source={require('../assets/curvas.png')} style={styles.curves} />

      {/* Logo en esquina superior derecha */}
      <Image source={require('../assets/logo_colegio.png')} style={styles.logo} />

      {/* Ilustración central */}
      <Image source={require('../assets/ilustracion_inicio.png')} style={styles.illustration} />

      {/* Texto de bienvenida */}
      <Text style={styles.title}>Bienvenidos a DR PHILIPS Mobil</Text>
      <Text style={styles.subtitle}>
        Lleva tu proceso educativo desde casa, y vive una experiencia más cómoda desde cualquier parte del mundo!
      </Text>

      {/* Botón */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default InicioScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  curves: {
    position: 'absolute',
    top: -16,
    left: 0,
    width: width * 0.5,
    height: width * 0.5,
    resizeMode: 'contain',
  },
  logo: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  illustration: {
    width: 220,
    height: 220,
    marginTop: 80,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E1E50',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#1E1E50',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
