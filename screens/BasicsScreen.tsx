// screens/BasicsScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const BasicsScreen = ({ navigation }) => {
  const sections = [
    { name: 'Saralevarse', screen: 'SaraleScreen' },
    { name: 'Datuvarse', screen: 'DatuScreen' },
    { name: 'Jantivarse', screen: 'JantiScreen' },
    { name: 'Alankara', screen: 'AlankaraScreen' },
    { name: 'Gamaka', screen: 'GamakaScreen' },
    { name: 'Swarajati', screen: 'SwarajatiScreen' },
    { name: 'Geetegalu', screen: 'GeetegaluScreen' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Basics Sections</Text>
      {sections.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => navigation.navigate(item.screen)}
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
