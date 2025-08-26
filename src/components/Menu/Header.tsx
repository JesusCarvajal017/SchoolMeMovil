import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  onMenuPress: () => void;
  onHelpPress: () => void;
};

const { width } = Dimensions.get('window');

const Header = ({ onMenuPress, onHelpPress }: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <>
      <StatusBar translucent backgroundColor="#ffff" barStyle="dark-content" animated={true} />
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        {/* Top Row: Menu + Profile + Help */}
        <View style={styles.topRow}>
          <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
            <Ionicons name="menu" size={28} color="#000" />
          </TouchableOpacity>

          <View style={styles.rightIcons}>
            <TouchableOpacity onPress={onHelpPress} style={styles.helpButton}>
              <Ionicons name="help-circle-outline" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.profileWrapper}>
              <Image
                source={{
                  uri: 'https://fotografias.lasexta.com/clipping/cmsimages02/2019/11/14/66C024AF-E20B-49A5-8BC3-A21DD22B96E6/default.jpg?crop=1299,731,x0,y0&width=1900&height=1069&optimize=low',
                }}
                style={styles.profileImage}
              />
            </View>
          </View>
        </View>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcome}>BIENVENIDO</Text>
          <Text style={styles.subtitle}>Padre de familia</Text>
        </View>

        {/* Info Boxes */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Estudiante: Santiago Chaparro Riaño</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Grado: Once-A</Text>
        </View>
      </Animated.View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffffff',
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) + -30 : 16,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    width: '100%',
    alignSelf: 'center',
    minHeight: 160,

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
    backgroundColor: '#ccc',
    borderWidth: 2,
    borderColor: '#5DA3FA',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  welcomeSection: {
    marginTop: 30,
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
  },
  infoBox: {
    backgroundColor: '#dfd7d7ff',
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#1E1E50',
    fontWeight: '500',
  },
});
