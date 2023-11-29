import React, { PropsWithChildren, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

interface Props {
  placeholder?: string;
  content?: string;
  handleOnChange?: (key: string, text: string) => void;
}

export default function InputForm({
  content,
  placeholder,
  handleOnChange,
}: PropsWithChildren<Props>) {
  const [displayLabel, setDisplayLabel] = useState<'none' | 'flex'>('none');

  return (
    <>
      <Text style={[styles.textInput, { display: displayLabel }]}>{content}</Text>
      <TextInput
        style={styles.input}
        placeholder={(displayLabel === 'none' && placeholder) || ''}
        onFocus={() => setDisplayLabel('flex')}
        onBlur={() => setDisplayLabel('none')}
      />
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: '#161819',
    minWidth: 150,
  },
});
