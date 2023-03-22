import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function TermsAndConditions() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? '#00e0e0' : undefined}
      />
      <Text> Eh leido y acepto los </Text>
      <TouchableOpacity>
        <Text style={[styles.textBold, styles.color]}>terminos y conidiones</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  textBold: {
    fontWeight: 'bold',
  },
  color: {
    color: '#00e0e0',
  },
  checkbox: {
    marginVertical: 8,
  },
});
