import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { TouchableRipple } from "react-native-paper";
type Props = {
  title: string;
  onPress: Function;
  style: any;
  disabled: boolean;
};

const Button = (props: Props) => {
  return (
    <TouchableRipple
      onPress={() => props.onPress()}
      style={props.style}
      disabled={props.disabled}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Button;
