import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/screens/RegisterScreen';
import Login from './src/screens/LoginScreen';
import HomeScreen from '@screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Overview' }} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
