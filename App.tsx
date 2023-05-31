import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen, RegisterScreen, CalendarScreen } from '@screens';

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
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Calendar' component={CalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
