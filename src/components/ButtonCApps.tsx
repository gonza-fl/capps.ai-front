import React, { PropsWithChildren } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  press?: () => void;
  isRounded?: boolean;
}

export default function ButtonCapps({ children, press, isRounded }: PropsWithChildren<Props>) {
  return (
    <TouchableOpacity onPress={press} style={!isRounded ? styles.button : styles.buttonRounded}>
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
  },
  buttonRounded: {
    backgroundColor: '#00e0e0',
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
  },
});
