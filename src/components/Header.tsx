// components/Header.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  onMenuPress: () => void;
  onHelpPress: () => void;
};

const Header = ({ onMenuPress, onHelpPress }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.welcome}>BIENVENIDO</Text>
        <Text style={styles.subtitle}>Padre de familia</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onHelpPress} style={styles.iconButton}>
          <Ionicons name="help-circle-outline" size={24} color="#1E1E50" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
          <Ionicons name="menu" size={28} color="#1E1E50" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textContainer: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E1E50',
  },
  subtitle: {
    fontSize: 14,
    color: '#1E1E50',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    padding: 6,
  },
});
