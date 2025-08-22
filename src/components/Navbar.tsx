// components/Navbar.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavButton from './NavButton';

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const tabs = [
  { label: 'Inicio', icon: 'home-outline' },
  { label: 'Agenda', icon: 'calendar-outline' },
  { label: 'Reportes', icon: 'document-text-outline' },
  { label: 'Padres', icon: 'people-outline' },
];

const Navbar = ({ activeTab, setActiveTab }: Props) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <NavButton
          key={tab.label}
          label={tab.label}
          icon={tab.icon}
          active={activeTab === tab.label}
          onPress={() => setActiveTab(tab.label)}
        />
      ))}
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
