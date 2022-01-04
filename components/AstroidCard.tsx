import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  children: React.ReactNode;
};

const AstroidCard = (props: Props) => {
  return <View style={styles.astroidCard}>{props.children}</View>;
};

const styles = StyleSheet.create({
  astroidCard: {
    padding: 20,
    elevation: 1,
    backgroundColor: "#fff",
    width: "100%",
    marginVertical: 8,
    borderRadius: 10,
    textAlign: "left",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    overflow: "hidden",
  },
});
export default AstroidCard;
