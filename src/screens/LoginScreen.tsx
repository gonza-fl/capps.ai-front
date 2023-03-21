import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputForm from '../components/InputForm';
import ButtonCAps from '../components/ButtonCApps';
import AccountText from '../components/AccountText';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' backgroundColor='#999' />
      <View style={(styles.title, styles.margin)}>
        <Text style={[styles.titleText]}>Bienvenidos a CApps</Text>
        <InputForm Content={'email o nombre de usuario'} Placeholder={'benito@camelo.com'} />
        <InputForm Content={'contraseña'} Placeholder={'su contraseña'} />
        <View style={styles.marginbutton}>
          <ButtonCAps textContent='Ingresar' />
        </View>
        <AccountText textContent='No tengo una cuenta' />
        <View style={styles.apart}>
          <Text style={styles.aparttext}>Olvidé mi contraseña</Text>
          <Text style={styles.aparttext}>Política de privacidad</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'flex-start',
  },
  margin: {
    marginHorizontal: 30,
  },
  marginbutton: {
    marginTop: 30,
  },
  titleText: {
    fontSize: 23,
    fontWeight: '500',
    marginTop: 110,
    marginBottom: 20,
  },
  apart: {
    marginTop: '50%',
  },
  aparttext: {
    color: '#00e0e0',
    fontSize: 16,
  },
});
