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
import TermsAndConditions from '../components/TermsAndConditions';
import AccountText from '../components/AccountText';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export default function RegisterScreen({ navigation }: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar style='auto' />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.formContainer}>
          <Text style={[styles.titleText]}>Bienvenidos a CappsIA</Text>
          <InputForm Content={'Nombre completo'} Placeholder={'arnaldo benito camelo mclovin'} />
          <InputForm Content={'Email'} Placeholder={'benito@camelo.com'} />
          <InputForm Content={'Contraseña'} Placeholder={'su contraseña'} />
          <InputForm Content={'Confirmar contraseña'} Placeholder={'repita su contraseña'} />
          <TermsAndConditions />
          <ButtonCapps textContent='Registrarme' />
          <AccountText textContent='Ya tengo una cuenta' navigation={navigation} screen='Login' />
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
  formContainer: {
    paddingHorizontal: 30,
  },
  titleText: {
    fontSize: 23,
    fontWeight: '500',
    marginBottom: 20,
  },
});
