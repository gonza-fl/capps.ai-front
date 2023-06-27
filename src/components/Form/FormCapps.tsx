import React, { useState, Dispatch, SetStateAction } from 'react';
import InputForm from '@components/Form/InputForm';
import { LinearGradient } from 'expo-linear-gradient';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
}

const INITIAL_DATA = {
  title: '',
  description: '',
};

type TData = {
  title: string;
  description: string;
};

const FormCapps = ({ isModalVisible, setIsModalVisible }: Props) => {
  const [taskData, setTaskData] = useState<TData>(INITIAL_DATA);
  const handleOnChange = (key: string, text: string) => {
    // setTargetTask({ ...targetTask, [key]: text });
    setTaskData({ ...taskData, [key]: text });
  };
  const closeModal = () => {
    setTaskData(INITIAL_DATA);
    // setTargetTask({ ...INITIAL_DATA, id: '' });
    setIsModalVisible(false);
  };
  const handlePress = () => true;
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Nuevo Paciente</Text>
          <InputForm
            placeholder='Titulo'
            content=''
            // value={isEdit ? targetTask.title : taskData.title}
            handleOnChange={text => handleOnChange('nombre', text)}
          />
          <InputForm
            placeholder='Descripcion de la tarea'
            content=''
            // value={isEdit ? targetTask.description : taskData.description}
            handleOnChange={text => handleOnChange('description', text)}
          />
          <View style={styles.buttonsContainer}>
            <LinearGradient colors={['#a00498', '#f7bd56']} style={styles.gradient1}>
              <TouchableOpacity style={styles.touchableOpacity1} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient colors={['#a00498', '#f7bd56']} style={styles.gradient1}>
              <TouchableOpacity style={styles.touchableOpacity1} onPress={handlePress}>
                <Text style={styles.closeButtonText}>Guardar</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FormCapps;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  modalContent: {
    width: '75%',
    backgroundColor: '#161819',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1.22,
    shadowRadius: 4.22,
    elevation: 2,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 'auto',
  },
  closeButton: {
    backgroundColor: '#161819',
    padding: 10,
    borderRadius: 5,
    margin: 20,
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  gradient1: {
    width: 70,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableOpacity1: {
    width: 60,
    height: 30,
    borderRadius: 6,
    backgroundColor: '#161819',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
