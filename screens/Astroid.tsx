import React from "react";
import { StyleSheet, View } from "react-native";
import AstroidCard from "../components/AstroidCard";
import { connect } from "react-redux";
import { Astroid } from "../types/types";
import { Text } from "react-native-paper";

type Props = {
  astroid: Astroid;
};

const AstroidView = (props: Props) => {
  return (
    <View testID="Astroid-wrapper" style={styles.layout}>
      <AstroidCard>
        <Text style={styles.text}>Name: {props.astroid.astroid.name}</Text>
        <Text style={styles.text}>
          Nasa jpl url: {props.astroid.astroid.nasa_jpl_url}
        </Text>
        <Text style={styles.text}>
          Hazardous:{" "}
          {props.astroid.astroid.is_potentially_hazardous_asteroid
            ? "YES"
            : "NO"}
        </Text>
      </AstroidCard>
    </View>
  );
};
const mapStateToProps = (state: { astroidState: Astroid }) => ({
  astroid: state.astroidState,
});

const styles = StyleSheet.create({
  layout: {
    padding: 20,
  },
  text: {
    paddingBottom: 10,
  },
});
export default connect(mapStateToProps)(AstroidView);
