import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import ButtonCapps from '../components/ButtonCapps';
import FormCapps from '@components/Form/FormCapps';

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

function HomeScreen({ navigation }: Props): JSX.Element {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.buttonsContainer}>
        <ButtonCapps press={() => setIsModalVisible(true)}>Nuevo Paciente</ButtonCapps>
        <ButtonCapps>Burcar Paciente</ButtonCapps>
      </View>
      <FormCapps isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
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
  buttonsContainer: {
    flex: 0.15,
    justifyContent: 'space-around',
  },
});
