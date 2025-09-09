// src/screens/AgendaScreen.tsx
import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function AgendaScreen({ navigation }: any) {
  const observaciones = [
    { id: '1', label: 'Fui puntual?', value: 'Sí' },
    { id: '2', label: 'Trabajé en clase?', value: 'Muy Poco' },
    { id: '3', label: 'Me porté bien?', value: 'No' },
    { id: '4', label: 'Cumplí con mis tareas?', value: 'Sí' },
    { id: '5', label: 'Comí bien?', value: 'Sí' },
    { id: '6', label: '¿Tengo trabajos?', value: 'Sí' },
  ];

  const deboRealizar = 'Traer cuaderno de matemáticas';
  const [comentario, setComentario] = React.useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={20} color={stylesVars.primary} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>#Grupo Once-A</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.iconButton}>
          <Ionicons name="menu" size={20} color={stylesVars.primary} />
        </TouchableOpacity>
      </View>

      {/* Contenido */}
      <ScrollView contentContainerStyle={styles.formContainer} showsVerticalScrollIndicator={false}>
        {observaciones.map(item => (
          <View key={item.id} style={styles.fieldBlock}>
            <Text style={styles.fieldLabel}>{item.label}</Text>
            <View style={styles.readonlyField}>
              <Text style={styles.readonlyText}>{item.value}</Text>
            </View>
          </View>
        ))}

        <View style={styles.fieldBlock}>
          <Text style={styles.fieldLabel}>Debo realizar:</Text>
          <View style={styles.readonlyField}>
            <Text style={styles.readonlyText}>{deboRealizar}</Text>
          </View>
        </View>

        <View style={styles.fieldBlock}>
          <Text style={styles.fieldLabel}>Comentario del padre (opcional)</Text>
          <TextInput
            style={styles.input}
            placeholder="Escribe un comentario..."
            placeholderTextColor="#999"
            value={comentario}
            onChangeText={setComentario}
            multiline
          />
        </View>

        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirmar lectura</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

/* 🎨 Variables de color */
const stylesVars = {
  primary: '#1E1E50',
  secondaryText: '#333',
  white: '#fff',
  lightGray: '#F5F5F5',
  border: '#E0E0E0',
  success: '#16a34a',
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: stylesVars.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: stylesVars.white,
    borderBottomWidth: 1,
    borderBottomColor: stylesVars.border,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: stylesVars.primary,
  },
  iconButton: {
    backgroundColor: stylesVars.white,
    borderRadius: 20,
    padding: 8,
    borderWidth: 1,
    borderColor: stylesVars.border,
    elevation: 2,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  fieldBlock: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: stylesVars.primary,
    marginBottom: 6,
  },
  readonlyField: {
    backgroundColor: stylesVars.lightGray,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: stylesVars.border,
  },
  readonlyText: {
    color: stylesVars.secondaryText,
    fontSize: 14,
  },
  input: {
    backgroundColor: stylesVars.lightGray,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: stylesVars.border,
    padding: 10,
    minHeight: 60,
    color: stylesVars.secondaryText,
    fontSize: 14,
    textAlignVertical: 'top',
  },
  confirmButton: {
    backgroundColor: stylesVars.primary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    marginTop: 10,
  },
  confirmButtonText: {
    color: stylesVars.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
