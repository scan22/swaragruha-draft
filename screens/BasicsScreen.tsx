// screens/BasicsScreen.tsx

import React from 'react';
import musicData from '../assets/music.json';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const BasicsScreen = ({ navigation }) => {
  type Section = {
  name: string;
  screen: string;
  key: string;
};

const sections: Section[] = [
  { name: 'Sarali Varsai', screen: 'SaraleScreen', key: 'Sarali Varsai' },
  { name: 'Datu Varsai', screen: 'DatuScreen', key: 'Datu Varsai' },
  { name: 'Janti Varsai', screen: 'JantiScreen', key: 'Janti Varsai' },
  { name: 'Alankaras', screen: 'AlankaraScreen', key: 'Alankaras' },
  { name: 'Gamaka', screen: 'GamakaScreen', key: 'Gamaka' },
  { name: 'Swarajathi', screen: 'SwarajatiScreen', key: 'Swarajathi' },
  { name: 'Geetegalu', screen: 'GeetegaluScreen', key: 'Geetegalu' },
];



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Basics Sections</Text>
      {sections.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => {
  const sectionData = musicData[item.key] || [];  // Correctly fetch by key
  navigation.navigate(item.screen, { data: sectionData });
}}

        >
          <Text style={styles.buttonText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#5A9',
    padding: 15,
    width: '100%',
    borderRadius: 12,
    marginVertical: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});


export default BasicsScreen;
