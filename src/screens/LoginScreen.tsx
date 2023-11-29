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
import InputForm from '@components/Form/InputForm';
import ButtonCapps from '@components/ButtonCapps';
import AccountText from '@components/AccountText';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export default function LoginScreen({ navigation }: Props) {
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
            <InputForm content={'Email'} placeholder={'usuario@mail.com'} />
            <InputForm content={'Contraseña'} placeholder={'su contraseña'} />
            <View style={styles.marginbutton}>
              <ButtonCapps> Ingresar </ButtonCapps>
            </View>
            <AccountText
              textContent='No tengo una cuenta'
              navigation={navigation}
              screen='Register'
            />
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
