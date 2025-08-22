// components/Carousel.tsx
import React from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const images = [
  require('../assets/images/logo_colegio.png'),
  require('../assets/images/logo_colegio.png'),
  require('../assets/images/logo_colegio.png'),
];

const Carousel = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image source={item} style={styles.image} resizeMode="cover" />
        )}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    height: 180,
    marginVertical: 16,
  },
  image: {
    width: width,
    height: 180,
    borderRadius: 12,
  },
});
