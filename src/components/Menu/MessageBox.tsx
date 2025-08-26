import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        💡 El uso de procesos educativos desde casa, vía virtual, permite fortalecer el vínculo entre padres y estudiantes.
      </Text>
    </View>
  );
};

export default MessageBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
  },
  text: {
    fontSize: 14,
    color: '#1E1E50',
    textAlign: 'center',
    lineHeight: 20,
  },
});
