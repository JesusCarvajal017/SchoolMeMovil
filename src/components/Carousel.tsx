import React, { useRef, useEffect } from 'react';
import {
  View,
  Animated,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const images = [
  require('../assets/images/colegio3.jpg'),
  require('../assets/images/colegio1.jpg'),
  require('../assets/images/colegio2.png'),
];

const Carousel = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item} style={styles.image} resizeMode="cover" />
          </View>
        )}
      />
    </Animated.View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginVertical: 20,
  },
  listContent: {
    paddingHorizontal: 12,
  },
  card: {
    width: width * 0.85,
    height: 180,
    marginRight: 16,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
