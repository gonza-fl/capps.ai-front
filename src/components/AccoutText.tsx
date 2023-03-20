import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
}

export default function AccountText({ title }: Props) {
  return (
    <TouchableOpacity style={styles.underline}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  underline: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#00e0e0",
    width: "auto",
    marginHorizontal: "25%",
    marginTop: 20,
  },
  text: {
    color: "#00e0e0",
    fontWeight: "400",
    fontSize: 16,
  },
});
