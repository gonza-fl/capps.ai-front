import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import ButtonCapps from '@components/ButtonCapps';

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

function StarterScreen({ navigation }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.buttonsContainer}>
        <ButtonCapps press={() => navigation.navigate('Login')}>Ingresar</ButtonCapps>
        <ButtonCapps press={() => navigation.navigate('Register')}>Registrarse</ButtonCapps>
      </View>
    </View>
  );
}

export default StarterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flex: 0.15,
    justifyContent: 'space-around',
  },
});
