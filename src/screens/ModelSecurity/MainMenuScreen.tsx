// screens/ModelSecurity/MainMenuScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/Menu/Header';
import Carousel from '../../components/Menu/Carousel';
import MessageBox from '../../components/Menu/MessageBox';
import SideMenu from '../../modals/SideMenu';
import HelpModal from '../../modals/HelpModal';
import Navbar from '../../components/Narvar/Navbar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

const MainMenuScreen = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [showMenu, setShowMenu] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Header
        onMenuPress={() => setShowMenu(true)}
        onHelpPress={() => setShowHelp(true)}
      />
      <Carousel />
      <MessageBox />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <SideMenu visible={showMenu} onClose={() => setShowMenu(false)} navigation={navigation} />
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
