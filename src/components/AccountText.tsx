import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  textContent: string;
  navigation: NativeStackNavigationProp<ParamListBase>;
  screen: string;
}

export default function AccountText({ textContent, navigation, screen }: Props) {
  return (
    <TouchableOpacity style={styles.underline} onPress={() => navigation.navigate(screen)}>
      <Text style={styles.text}>{textContent}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  underline: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#00e0e0',
    width: 'auto',
    marginHorizontal: '25%',
    marginTop: 20,
  },
  text: {
    color: '#00e0e0',
    fontWeight: '400',
    fontSize: 16,
  },
});
