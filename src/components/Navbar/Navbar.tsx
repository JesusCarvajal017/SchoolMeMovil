import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavButton from './NavButton';

const tabs = [
  { icon: 'home-outline' },
  { icon: 'person-outline' },
  { icon: 'notifications-outline' },
  { icon: 'settings-outline' },
] as const;

type Props = {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
};

const Navbar: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbar}>
        {tabs.map((tab, index) => (
          <NavButton
            key={index}
            icon={tab.icon}
            active={activeTab === index}
            onPress={() => setActiveTab(index)}
          />
        ))}
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 14,
    elevation: 5,
    shadowColor: '#000000ff',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
});
