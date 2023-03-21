import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, View, Button } from 'react-native';

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

function HomeScreen({ navigation }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Button title='Go to Register' onPress={() => navigation.navigate('Register')} />
      <Button title='Go to Login' onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
