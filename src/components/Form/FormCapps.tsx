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
            placeholder='Nombre'
            content='Nombre'
            // value={isEdit ? targetTask.title : taskData.title}
            handleOnChange={text => handleOnChange('nombre', text)}
          />
          <InputForm
            placeholder='Apellido'
            content='Apellido'
            // value={isEdit ? targetTask.title : taskData.title}
            handleOnChange={text => handleOnChange('nombre', text)}
          />
          <InputForm
            placeholder='Fech Nac'
            content='Fech Nac'
            // value={isEdit ? targetTask.description : taskData.description}
            handleOnChange={text => handleOnChange('description', text)}
          />
          <InputForm
            placeholder='Altura'
            content='Altura'
            // value={isEdit ? targetTask.description : taskData.description}
            handleOnChange={text => handleOnChange('description', text)}
          />
          <InputForm
            placeholder='Peso'
            content='Peso'
            // value={isEdit ? targetTask.description : taskData.description}
            handleOnChange={text => handleOnChange('description', text)}
          />
          <InputForm
            placeholder='Domicilio'
            content='Domicilio'
            // value={isEdit ? targetTask.description : taskData.description}
            handleOnChange={text => handleOnChange('description', text)}
          />
          <View style={styles.buttonsContainer}>
            <LinearGradient colors={['#00e0e0', 'blue']} style={styles.gradient1}>
              <TouchableOpacity style={styles.touchableOpacity1} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient colors={['#00e0e0', 'blue']} style={styles.gradient1}>
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
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#161819',
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
    color: '#161819',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#161819',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    height: 'auto',
  },
  closeButtonText: {
    color: '#161819',
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
    width: 65,
    height: 35,
    borderRadius: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
