import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

type AvatarProps = {
  uri?: string;
  size?: number;
  alt?: string;
};

const colors = {
  border: '#E5E7EB',
  placeholderBg: '#E2E8F0',
  placeholderText: '#334155',
};

export const Avatar: React.FC<AvatarProps> = ({ uri, size = 88, alt = 'Avatar de usuario' }) => {
  const radius = size / 2;

  if (uri) {
    return (
      <Image
        source={{ uri }}
        style={[styles.image, { width: size, height: size, borderRadius: radius }]}
        accessible
        accessibilityRole="image"
        accessibilityLabel={alt}
      />
    );
  }

  // Placeholder elegante en ausencia de imagen
  return (
    <View
      style={[
        styles.placeholder,
        { width: size, height: size, borderRadius: radius, backgroundColor: colors.placeholderBg },
      ]}
      accessible
      accessibilityRole="image"
      accessibilityLabel={`${alt} placeholder`}
    >
      <Text style={styles.initial}>👤</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderWidth: 1,
    borderColor: colors.border,
  },
  placeholder: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  initial: {
    fontSize: 28,
    color: colors.placeholderText,
  },
});
