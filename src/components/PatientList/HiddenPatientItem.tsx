import React from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

interface Patient {
  id: number;
  name: string;
  present: boolean;
}

interface Props {
  item: Patient;
  handlePatientPresent: (rowKey: number) => void;
}

const HiddenPatientItem = ({ item, handlePatientPresent }: Props) => {
  return (
    <View style={styles.rowBack}>
      <TouchableOpacity>
        <Text>Left</Text>
      </TouchableOpacity>
      <TouchableHighlight
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => handlePatientPresent(item.id)}
      >
        <Text style={styles.backTextWhite}>Presente</Text>
      </TouchableHighlight>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        // onPress={() => deleteRow(rowMap, data.item.key)}
      >
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backTextWhite: {
    color: '#FFF',
  },

  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
});

export default HiddenPatientItem;
