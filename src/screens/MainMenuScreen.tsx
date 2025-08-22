import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { styles } from '../styles/MainMenuStyles';

type MenuItem = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  screen: keyof RootStackParamList;
};

const menuItems: MenuItem[] = [
  { title: 'Agenda', icon: 'calendar-outline', screen: 'Agenda' },
  { title: 'Reportes', icon: 'bar-chart-outline', screen: 'Reportes' },
  { title: 'Padres', icon: 'people-outline', screen: 'Padres' },
];

const MainMenuScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showSideModal, setShowSideModal] = useState(false);

  const renderItem = ({ item }: { item: MenuItem }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Ionicons name={item.icon} size={28} color="#1E1E50" />
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header blanco con íconos */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => setShowHelpModal(true)}>
          <Ionicons name="help-circle-outline" size={28} color="#1E1E50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Menú Principal</Text>
        <TouchableOpacity onPress={() => setShowSideModal(true)}>
          <Ionicons name="menu-outline" size={28} color="#1E1E50" />
        </TouchableOpacity>
      </View>

      {/* Lista de opciones */}
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        contentContainerStyle={styles.menuContainer}
      />

      {/* Modal de ayuda */}
      <Modal visible={showHelpModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>¿Necesitas ayuda?</Text>
            <Text style={styles.modalText}>Aquí puedes encontrar información sobre cómo usar la app.</Text>
            <TouchableOpacity onPress={() => setShowHelpModal(false)} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal lateral */}
      <Modal visible={showSideModal} transparent animationType="slide">
        <View style={styles.sideModalContainer}>
          <View style={styles.sideModal}>
            <Text style={styles.sideModalTitle}>Opciones</Text>
            <TouchableOpacity onPress={() => setShowSideModal(false)} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Cerrar menú</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MainMenuScreen;
