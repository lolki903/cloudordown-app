import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabNavigator } from './components/NativeBottomTabs';
export default function App() {
  return (
  <SafeAreaProvider>
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  </SafeAreaProvider>
  );
}


