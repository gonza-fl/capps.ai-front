import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

interface Props {
  placeholder?: string;
  content: string;
  handleOnChange: (key: string, text: string) => void;
}

export default function InputForm({
  content,
  placeholder,
  handleOnChange,
}: PropsWithChildren<Props>) {
  return (
    <View>
      <Text style={styles.form}>{content}</Text>
      {/* <TextInput style={styles.inputform} placeholder={placeholder} onChangeText={handleOnChange} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  inputform: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
    color: '#fff',
  },
});
