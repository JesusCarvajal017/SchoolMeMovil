// src/components/Menu/Header.tsx
import React, { useEffect, useRef, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  Platform,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import { environment } from '../../api/constant/Enviroment';

type Props = {
  onMenuPress: () => void;
  onHelpPress: () => void;
};

const Header = ({ onMenuPress, onHelpPress }: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { user, person, loading } = useContext(AuthContext);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  // Construir el nombre completo
  const getFullName = () => {
    if (loading) return 'Cargando...';
    if (!person) return 'Usuario';
    
    const nameParts = [
      person.fisrtName,
      person.secondName,
      person.lastName,
      person.secondLastName,
    ].filter(Boolean); // Filtra valores undefined/null/empty
    
    return nameParts.length > 0 ? nameParts.join(' ') : 'Usuario';
  };

  // Obtener la imagen del perfil
  const getProfileImage = () => {
    if (user?.photo) {
      return { uri: `${environment.urlApi}/uploads/${user.photo}` };
    }
    return require('../../assets/default.jpg');
  };

  // Obtener el email de manera segura
  const getEmail = () => {
    if (loading) return 'Cargando...';
    return user?.email || 'No disponible';
  };

  // Obtener la identificación de manera segura
  const getIdentification = () => {
    if (loading) return 'Cargando...';
    return person?.identification || 'No disponible';
  };

  return (
    <>
      <StatusBar 
        translucent 
        backgroundColor="#ffffff" 
        barStyle="dark-content" 
        animated 
      />
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        {/* Fila superior */}
        <View style={styles.topRow}>
          <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
            <Ionicons name="menu" size={28} color="#000" />
          </TouchableOpacity>

          <View style={styles.rightIcons}>
            <TouchableOpacity onPress={onHelpPress} style={styles.helpButton}>
              <Ionicons name="help-circle-outline" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.profileWrapper}>
              {loading ? (
                <View style={styles.loadingProfile}>
                  <ActivityIndicator size="small" color="#5DA3FA" />
                </View>
              ) : (
                <Image source={getProfileImage()} style={styles.profileImage} />
              )}
            </View>
          </View>
        </View>

        {/* Bienvenida */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcome}>BIENVENIDO</Text>
          <Text style={styles.subtitle} numberOfLines={2} ellipsizeMode="tail">
            {getFullName()}
          </Text>
        </View>

        {/* Información del usuario */}
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Ionicons name="mail-outline" size={16} color="#1E1E50" />
            <Text style={styles.infoText} numberOfLines={1} ellipsizeMode="tail">
              {getEmail()}
            </Text>
          </View>
          
          <View style={styles.infoBox}>
            <Ionicons name="card-outline" size={16} color="#1E1E50" />
            <Text style={styles.infoText} numberOfLines={1} ellipsizeMode="tail">
              {getIdentification()}
            </Text>
          </View>
        </View>

        {/* Indicador de carga general */}
        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="small" color="#5DA3FA" />
            <Text style={styles.loadingText}>Cargando datos...</Text>
          </View>
        )}
      </Animated.View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) + 10 : 16,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    width: '100%',
    alignSelf: 'center',
    minHeight: 220,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuButton: {
    padding: 6,
  },
  helpButton: {
    padding: 6,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    borderWidth: 2,
    borderColor: '#5DA3FA',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  loadingProfile: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeSection: {
    marginTop: 20,
    alignItems: 'flex-start',
    paddingHorizontal: 4,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E1E50',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#1E1E50',
    fontWeight: '500',
  },
  infoContainer: {
    marginTop: 20,
    gap: 12,
  },
  infoBox: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  infoText: {
    fontSize: 14,
    color: '#1E1E50',
    fontWeight: '500',
    flex: 1,
  },
  loadingOverlay: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  loadingText: {
    fontSize: 12,
    color: '#5DA3FA',
  },
});