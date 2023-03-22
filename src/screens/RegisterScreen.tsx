import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import InputForm from '../components/InputForm';
import ButtonCAps from '../components/ButtonCApps';
import TermsAndConditions from '../components/TermsAndConditions';
import AccountText from '../components/AccountText';

export default function RegisterScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar style='auto' />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.margin}>
          <Text style={[styles.titleText]}>Bienvenidos a CappsIA</Text>
          <InputForm Content={'Nombre completo'} Placeholder={'arnaldo benito camelo mclovin'} />
          <InputForm Content={'Email'} Placeholder={'benito@camelo.com'} />
          <InputForm Content={'Contraseña'} Placeholder={'su contraseña'} />
          <InputForm Content={'Confirmar contraseña'} Placeholder={'repita su contraseña'} />
          <TermsAndConditions />
          <ButtonCAps textContent='Registrarme' />
          <AccountText textContent='Ya tengo una cuenta' />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  margin: {
    paddingHorizontal: 30,
  },
  titleText: {
    fontSize: 23,
    fontWeight: '500',
    marginTop: 110,
    marginBottom: 20,
  },
});
