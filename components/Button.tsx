import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../styles/global";
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

export default Button;
