import React, { useEffect, useRef, useContext } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { AuthContext } from '../context/AuthContext';

const { width } = Dimensions.get('window');

type Props = {
  visible: boolean;
  onClose: () => void;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SideMenu = ({ visible, onClose, navigation }: Props) => {
  const slideAnim = useRef(new Animated.Value(-width)).current;
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : -width,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  const handleNavigate = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
    onClose();
  };

  const handleLogout = () => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Estás seguro que deseas cerrar sesión?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Sí, salir",
          style: "destructive",
          onPress: async () => {
            await logout();
            onClose();
            navigation.reset({
              index: 0,
              routes: [{ name: 'Inicio' }],
            });
          },
        },
      ]
    );
  };

  const handleExit = () => {
    Alert.alert(
      "Salir del menú",
      "¿Quieres cerrar el menú o cerrar sesión?",
      [
        { text: "Cerrar Menú", style: "cancel", onPress: onClose },
        { text: "Cerrar Sesión", style: "destructive", onPress: handleLogout },
      ]
    );
  };

  return (
    <Modal transparent visible={visible} animationType="none">
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={handleExit}
      >
        <Animated.View style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}>
          {/* Perfil */}
          <View style={styles.profileContainer}>
            <Image
              source={{
                uri: 'https://fotografias.lasexta.com/clipping/cmsimages02/2019/11/14/66C024AF-E20B-49A5-8BC3-A21DD22B96E6/default.jpg?crop=1299,731,x0,y0&width=1900&height=1069&optimize=low',
              }}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>Santiago Chaparro</Text>
            <Text style={styles.profileRole}>Padre de Familia</Text>
          </View>

          {/* Opciones */}
          <View style={styles.optionsContainer}>
            <MenuOption icon="home-outline" label="Inicio" onPress={() => handleNavigate('Main')} />
            <MenuOption icon="calendar-outline" label="Mi Agenda" onPress={() => handleNavigate('Agenda')} />
            <MenuOption icon="bar-chart-outline" label="Reportes" onPress={() => handleNavigate('Reportes')} />
            <MenuOption icon="people-outline" label="Padres" onPress={() => handleNavigate('Padres')} />
          </View>

          {/* Cerrar sesión */}
          <TouchableOpacity style={styles.logout} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={20} color="#1E1E50" />
            <Text style={styles.logoutText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

const MenuOption = ({
  icon,
  label,
  onPress,
}: {
  icon: string;
  label: string;
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.option} onPress={onPress}>
    <Ionicons name={icon as any} size={20} color="#1E1E50" style={styles.optionIcon} />
    <Text style={styles.optionText}>{label}</Text>
  </TouchableOpacity>
);

export default SideMenu;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'flex-start',
  },
  menu: {
    width: width * 0.75,
    height: '100%',
    backgroundColor: '#F9FAFC',
    paddingHorizontal: 24,
    paddingTop: 60,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    elevation: 8,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  profileImage: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginBottom: 12,
    backgroundColor: '#ccc',
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E1E50',
  },
  profileRole: {
    fontSize: 14,
    color: '#6B6B8A',
    marginTop: 4,
  },
  optionsContainer: {
    gap: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    marginRight: 12,
  },
  optionText: {
    fontSize: 16,
    color: '#1E1E50',
    fontWeight: '500',
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    paddingVertical: 20,
  },
  logoutText: {
    fontSize: 16,
    color: '#1E1E50',
    marginLeft: 12,
    fontWeight: '500',
  },
});
