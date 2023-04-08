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
import ButtonCapps from '../components/ButtonCapps';
import AccountText from '../components/AccountText';

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <StatusBar style='auto' />
          <View style={styles.margin}>
            <Text style={[styles.titleText]}>Bienvenidos a CappsIA</Text>
            <InputForm Content={'email o nombre de usuario'} Placeholder={'benito@camelo.com'} />
            <InputForm Content={'contraseña'} Placeholder={'su contraseña'} />
            <View style={styles.marginbutton}>
              <ButtonCapps textContent='Ingresar' />
            </View>
            <AccountText textContent='No tengo una cuenta' />
            <View style={styles.apart}>
              <Text style={styles.aparttext}>Olvidé mi contraseña</Text>
              <Text style={styles.aparttext}>Política de privacidad</Text>
            </View>
          </View>
        </>
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
    marginHorizontal: 30,
  },
  marginbutton: {
    marginTop: 30,
  },
  titleText: {
    fontSize: 23,
    fontWeight: '500',
    marginBottom: 20,
  },
  apart: {
    marginTop: '15%',
  },
  aparttext: {
    color: '#00e0e0',
    fontSize: 16,
  },
});
