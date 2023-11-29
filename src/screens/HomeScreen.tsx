import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import ButtonCapps from '../components/ButtonCapps';
import FormCapps from '@components/Form/FormCapps';
import InputForm from '@components/Form/InputForm';
import PatientList from '@components/PatientList/PatientList';

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase>;
}
interface Patient {
  id: number;
  name: string;
  present: boolean;
}

function HomeScreen({ navigation }: Props): JSX.Element {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [patients, setPatients] = useState<Patient[]>([
    { id: 1, name: 'Paciente 1', present: false },
    { id: 2, name: 'Paciente 2', present: false },
  ]);

  const handlePatientSelected = (selectedPatient: Patient) => {
    console.log('Paciente seleccionado:', selectedPatient);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <StatusBar style='auto' />
      <View style={styles.buttonsContainer}>
        <InputForm placeholder='Buscar Paciente' />
      </View>
      <PatientList
        patients={patients}
        onPatientSelected={handlePatientSelected}
        onSetPatients={setPatients}
      />
      <View style={styles.buttonsContainer}>
        <ButtonCapps press={() => setIsModalVisible(true)} isRounded>
          +
        </ButtonCapps>
      </View>
      <FormCapps isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
    </KeyboardAvoidingView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
});
