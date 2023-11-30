import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import { Patient } from './interface';

interface Props {
  item: Patient;
  onPatientSelected: (selectedPatient: Patient) => void;
}

export const PatientItem = ({ item, onPatientSelected }: Props) => (
  <TouchableHighlight
    style={styles.rowFront}
    onPress={() => onPatientSelected(item)}
    underlayColor={'#AAA'}
  >
    <View>
      <Text>{item.name}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
});
