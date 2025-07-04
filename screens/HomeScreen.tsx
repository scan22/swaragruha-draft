import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const goTo = (page) => navigation.navigate(page);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Carnatic App</Text>
      <TouchableOpacity style={styles.button} onPress={() => goTo('VarnasScreen')}>
        <Text style={styles.buttonText}>Varnas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => goTo('KritisScreen')}>
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
