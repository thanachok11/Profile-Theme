import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import SubjectScreen from './CourseScreen'; // ✅ import ใหม่

import AboutMeScreen from './AboutMeScreen';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { toggleTheme, theme } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.background },
          headerTitleStyle: { color: theme.text },
          headerRight: () => (
            <Button
              title={theme.name === 'light' ? '🌙' : '☀️'}
              onPress={toggleTheme}
              color={theme.name === 'light' ? '#333' : '#fff'}
            />
          ),
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AboutMe" component={AboutMeScreen} />
        <Stack.Screen name="CourseScreen" component={SubjectScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
