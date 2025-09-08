import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function AgendaScreen({ navigation }: any) {
  const mockItems = [
    { id: '1', label: 'Fui puntual?', value: 'Sí' },
    { id: '2', label: 'Trabajé en clase?', value: 'Muy Poco' },
    { id: '3', label: 'Me porté bien?', value: 'No' },
    { id: '4', label: 'Cumplí con mis tareas?', value: 'Sí' },
    { id: '5', label: 'Comí bien?', value: 'Sí' },
    { id: '6', label: 'Tengo trabajos?', value: 'Debo Realizar' },
  ];

  const [comentario, setComentario] = React.useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.headerContainer}>
        {/* Burbujas invertidas en esquina */}
        <Image
          source={require('../assets/curvas.png')}
          style={styles.bubbles}
          resizeMode="contain"
        />

        {/* Contenido del header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>#Grupo Once-A</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.headerButton}>
            <Ionicons name="menu" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Contenido scrollable */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {mockItems.map(item => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.valor}>{item.value}</Text>
          </View>
        ))}

        <Text style={styles.subtitulo}>Comentario del padre (opcional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe un comentario..."
          placeholderTextColor="#9E9E9E"
          value={comentario}
          onChangeText={setComentario}
          multiline
        />

        <TouchableOpacity style={styles.boton} onPress={() => console.log('Enterado')}>
          <Text style={styles.botonTexto}>Enterado</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
  headerContainer: {
    backgroundColor: '#4d35a4ff',
    height: 80,
    justifyContent: 'center',
  },
  bubbles: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 100,
    height: 80,
    opacity: 0.3,
    transform: [{ scaleX: -1 }], // 🔹 Invierte horizontalmente la imagen
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerButton: {
    padding: 6,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  contentContainer: {
    padding: 16,
    paddingTop: 20,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 8,
    color: '#1E1E50',
  },
  card: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: '#6B6B8A',
    marginBottom: 4,
  },
  valor: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 12,
    minHeight: 70,
    textAlignVertical: 'top',
    fontSize: 14,
    color: '#212121',
  },
  boton: {
    backgroundColor: '#1976D2',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  botonTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
