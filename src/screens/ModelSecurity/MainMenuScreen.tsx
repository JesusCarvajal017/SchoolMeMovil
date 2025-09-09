import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/Menu/Header';
import Carousel from '../../components/Menu/Carousel';
import MessageBox from '../../components/Menu/MessageBox';
import SideMenu from '../../modals/SideMenu';
import HelpModal from '../../modals/HelpModal';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { AuthContext } from '../../context/AuthContext';

const MainMenuScreen = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
    navigation.replace('Inicio');
  };

  return (
    <View style={styles.container}>
      <Header
        onMenuPress={() => setShowMenu(true)}
        onHelpPress={() => setShowHelp(true)}
      />
      <Carousel />
      <MessageBox />
      <SideMenu
        visible={showMenu}
        onClose={() => setShowMenu(false)}
        navigation={navigation}
      />
      <HelpModal visible={showHelp} onClose={() => setShowHelp(false)} />
    </View>
  );
};

export default MainMenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17144B',
    paddingTop: 40,
  },
});
