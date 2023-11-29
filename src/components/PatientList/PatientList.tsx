import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { PatientItem } from './patientItem';
import HiddenPatientItem from './HiddenPatientItem';

interface Patient {
  id: number;
  name: string;
  present: boolean;
}

interface PatientListProps {
  patients: Patient[];
  onPatientSelected: (selectedPatient: Patient) => void;
  onSetPatients: React.Dispatch<React.SetStateAction<Patient[]>>;
}

const PatientList: React.FC<PatientListProps> = ({
  patients,
  onPatientSelected,
  onSetPatients,
}) => {
  const handlePatientPresent = (rowKey: number) => {
    onSetPatients(prevPatients =>
      prevPatients.map(patient =>
        patient.id === rowKey ? { ...patient, present: true } : patient,
      ),
    );
  };

  const renderItem = ({ item }: { item: Patient }) => (
    <PatientItem item={item} onPatientSelected={onPatientSelected} />
  );

  const renderHiddenItem = ({ item }: { item: Patient }) => (
    <HiddenPatientItem item={item} handlePatientPresent={handlePatientPresent} />
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={patients}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        previewOpenDelay={3000}
      />
    </View>
  );
};

export default PatientList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 32,
    flex: 1,
  },
});
