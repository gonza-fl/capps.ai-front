import React, { PropsWithChildren } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  press?: () => void;
}

export default function ButtonCapps({ children, press }: PropsWithChildren<Props>) {
  return (
    <TouchableOpacity onPress={press} style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00e0e0',
    paddingVertical: 9,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    backgroundColor: '#00e0e0',
    fontWeight: '400',
    fontSize: 18,
  },
});
