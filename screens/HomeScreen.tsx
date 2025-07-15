import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import musicData from '../assets/music.json'; // adjust the path if needed

const HomeScreen = ({ navigation }) => {
  const goTo = (page, data = null) => {
    if (data) {
      navigation.navigate(page, { data });
    } else {
      navigation.navigate(page);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Carnatic App</Text>

      <TouchableOpacity style={styles.button} onPress={() => goTo('VarnasScreen', musicData['Varnas'])}>
        <Text style={styles.buttonText}>Varnas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => goTo('KritisScreen', musicData['Krithis'])}>
        <Text style={styles.buttonText}>Kritis</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => goTo('BasicsScreen')}>
        <Text style={styles.buttonText}>Basics</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 30, backgroundColor: '#fff' },
  header: { fontSize: 24, marginBottom: 40, textAlign: 'center', fontWeight: 'bold' },
  button: { backgroundColor: '#444', padding: 15, marginVertical: 10, borderRadius: 12 },
  buttonText: { color: '#fff', fontSize: 18, textAlign: 'center' },
});

export default HomeScreen;
