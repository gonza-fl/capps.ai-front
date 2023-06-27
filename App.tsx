import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen, RegisterScreen, StarterScreen } from '@screens';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name='Starter' component={StarterScreen} options={{ title: 'Starter' }} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
