// src/screens/Menu/MainMenuScreen.tsx
import React, { useState, useContext, useEffect } from 'react';
import { 
  View, 
  StyleSheet, 
  RefreshControl, 
  ScrollView,
  Alert 
} from 'react-native';
import Header from '../../components/Menu/Header';
import Carousel from '../../components/Menu/Carousel';
import MessageBox from '../../components/Menu/MessageBox';
import SideMenu from '../../modals/SideMenu';
import HelpModal from '../../modals/HelpModal';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { AuthContext } from '../../context/AuthContext';

const MainMenuScreen = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { logout, refreshUserData, user, person, error } = useContext(AuthContext);

  // Cargar datos al montar el componente si no están disponibles
  useEffect(() => {
    if (!user || !person) {
      refreshUserData().catch(err => {
        console.error("Error al cargar datos iniciales:", err);
      });
    }
  }, []);

  // Mostrar error si existe
  useEffect(() => {
    if (error) {
      Alert.alert(
        'Aviso',
        'Hubo un problema al cargar algunos datos. Desliza hacia abajo para actualizar.',
        [{ text: 'OK' }]
      );
    }
  }, [error]);

  const handleLogout = async () => {
    try {
      await logout();
      navigation.replace('Inicio');
    } catch (err) {
      console.error("Error durante logout:", err);
      Alert.alert('Error', 'No se pudo cerrar sesión correctamente');
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await refreshUserData();
    } catch (err) {
      console.error("Error al refrescar datos:", err);
      Alert.alert('Error', 'No se pudieron actualizar los datos');
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#5DA3FA"
            colors={['#5DA3FA']}
          />
        }
        showsVerticalScrollIndicator={false}
      >
        <Header
          onMenuPress={() => setShowMenu(true)}
          onHelpPress={() => setShowHelp(true)}
        />
        <Carousel />
        <MessageBox />
      </ScrollView>
      
      <SideMenu
        visible={showMenu}
        onClose={() => setShowMenu(false)}
        navigation={navigation}
      />
      
      <HelpModal 
        visible={showHelp} 
        onClose={() => setShowHelp(false)} 
      />
    </View>
  );
};

export default MainMenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17144B',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 40,
    paddingBottom: 20,
  },
});