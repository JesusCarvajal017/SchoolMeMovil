import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://';

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
//   const { token } = response.data;

//   await AsyncStorage.setItem('jwtToken', token);
//   return token;
};

export const getToken = async () => {
  return await AsyncStorage.getItem('jwtToken');
};

export const logout = async () => {
  await AsyncStorage.removeItem('jwtToken');
};
