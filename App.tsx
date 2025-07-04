import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen'; // 👈 import it

import HomeScreen from './screens/HomeScreen';
import KritisScreen from './screens/KrithiScreen';
import VarnasScreen from './screens/VarnasScreen';
import BasicsScreen from './screens/BasicsScreen';
//import GeetesScreen from './screens/GeetesScreen';
import SaraleScreen from '././screens/basics/SaraleScreen';
import DatuScreen from '././screens/basics/DatuScreen';
import JantiScreen from '././screens/basics/JantiScreen';
import AlankaraScreen from '././screens/basics/AlankaraScreen';
import GamakaScreen from '././screens/basics/GamakaScreen';
import SwarajatiScreen from '././screens/basics/SwarajatiScreen';
import GeetegaluScreen from '././screens/basics/GeetegaluScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); // 👈 hide splash screen after mount
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Carnatic Music' }} />
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
  );
};

export default App;
