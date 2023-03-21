import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputForm from '../components/InputForm';
import ButtonCAps from '../components/ButtonCApps';
import TermsAndConditions from '../components/TermsAndConditions';
import AccountText from '../components/AccountText';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' backgroundColor='#999' />
      <View style={(styles.title, styles.margin)}>
        <Text style={[styles.titleText]}>Bienvenidos a CApps</Text>
        <InputForm Content={'nombre completo'} Placeholder={'arnaldo benito camelo mclovin'} />
        <InputForm Content={'email'} Placeholder={'benito@camelo.com'} />
        <InputForm Content={'contraseña'} Placeholder={'su contraseña'} />
        <InputForm Content={'confirmar contraseña'} Placeholder={'repita su contraseña'} />
        <TermsAndConditions />
        <ButtonCAps text='Registrarme' />
        <AccountText text='Ya tengo una cuenta' />
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
  titleText: {
    fontSize: 23,
    fontWeight: '500',
    marginTop: 110,
    marginBottom: 20,
  },
});
