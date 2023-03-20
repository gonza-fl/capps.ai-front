import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

interface Props {
  Placeholder: string;
  Content: string;
}

export default function InputForm({ Placeholder, Content }: Props) {
  return (
    <View>
      <Text style={styles.form}>{Content}</Text>
      <TextInput style={styles.inputform} placeholder={Placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  inputform: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
  },
});
