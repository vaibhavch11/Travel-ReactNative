import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    
      <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    
  );
}


