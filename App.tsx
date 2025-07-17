// App.tsx
import React, { useEffect } from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider,useTheme } from './src/theme/ThemeContext';
import { globalStyles } from './src/theme/globalStyles';
import { Theme } from './src/theme/types';

import PdfViewerScreen from './screens/PdfViewerScreen';
import HomeScreen from './screens/HomeScreen';
import KritisScreen from './screens/KrithiScreen';
import VarnasScreen from './screens/VarnasScreen';
import BasicsScreen from './screens/BasicsScreen';
import SaraleScreen from './screens/basics/SaraleScreen';
import DatuScreen from './screens/basics/DatuScreen';
import JantiScreen from './screens/basics/JantiScreen';
import AlankaraScreen from './screens/basics/AlankaraScreen';
import GamakaScreen from './screens/basics/GamakaScreen';
import SwarajatiScreen from './screens/basics/SwarajatiScreen';
import GeetegaluScreen from './screens/basics/GeetegaluScreen';

const Stack = createNativeStackNavigator();

const ThemedApp = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={globalStyles(theme).container}>
      <Text style={globalStyles(theme).heading}>Welcome to Themed App</Text>
      <Text style={globalStyles(theme).text}>This is using a global theme.</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Carnatic Music' }} />
          <Stack.Screen name="PDFViewer" component={PdfViewerScreen} />
          <Stack.Screen name="KritisScreen" component={KritisScreen} />
          <Stack.Screen name="VarnasScreen" component={VarnasScreen} />
          <Stack.Screen name="BasicsScreen" component={BasicsScreen} />
          <Stack.Screen name="SaraleScreen" component={SaraleScreen} />
          <Stack.Screen name="DatuScreen" component={DatuScreen} />
          <Stack.Screen name="JantiScreen" component={JantiScreen} />
          <Stack.Screen name="AlankaraScreen" component={AlankaraScreen} />
          <Stack.Screen name="GamakaScreen" component={GamakaScreen} />
          <Stack.Screen name="SwarajatiScreen" component={SwarajatiScreen} />
          <Stack.Screen name="GeetegaluScreen" component={GeetegaluScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}
