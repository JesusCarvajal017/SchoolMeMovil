import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const { width } = Dimensions.get('window');

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    const emailValid = email.trim() !== '';
    const passwordValid = password.trim() !== '';

    setEmailError(!emailValid);
    setPasswordError(!passwordValid);

    if (emailValid && passwordValid) {
      navigation.navigate('Main');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.centeredContent}
      >
        <View style={styles.formContainer}>
          <Image source={require('../assets/curvas.png')} style={styles.curves} />
          <Image source={require('../assets/ilustracion_login.png')} style={styles.illustration} />

          <CustomInput
            label="Correo Electrónico"
            value={email}
            onChangeText={setEmail}
            placeholder="ejemplo@correo.com"
            hasError={emailError}
          />
          <CustomInput
            label="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="••••••••"
            hasError={passwordError}
          />

          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgotText}>¿olvidó su contraseña?</Text>
          </TouchableOpacity>

          <CustomButton title="Ingresar" onPress={handleLogin} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 25,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    position: 'relative',
    overflow: 'hidden',
  },
  curves: {
    position: 'absolute',
    top: -20,
    left: -20,
    width: width * 0.5,
    height: width * 0.5,
    resizeMode: 'contain',
    opacity: 0.3,
  },
  illustration: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  forgotContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotText: {
    color: '#1E1E50',
    fontSize: 13,
    fontWeight: '500',
  },
});
