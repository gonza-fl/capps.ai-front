import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function TermsAndConditions() {
  return (
    <View style={styles.container}>
      <Text>✅{/*CheckBox de polenta*/} Eh leido y acepto los </Text>
      <TouchableOpacity>
        <Text style={[styles.textBold, styles.color]}>
          terminos y conidiones
        </Text>
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
});
