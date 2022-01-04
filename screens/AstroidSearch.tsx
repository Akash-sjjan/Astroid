import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import {
  SearchAstroid,
  StartRandomSearch,
} from "../redux/actions/astroidAction";
import { connect, useDispatch } from "react-redux";
import { TextInput } from "react-native-paper";
import * as types from "../redux/actions/constants";

type Props = {
  SearchAstroid: Function;
  StartRandomSearch: Function;
  navigation: {
    navigate: Function;
  };
  loading: boolean;
};

const AstroidSearch = (props: Props) => {
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const handleChange = (value: string) => {
    setId(value);
  };

  const handleSubmit = () => {
    console.log(id);
    dispatch({ type: types.SET_LOADING, payload: true });
    props.SearchAstroid(id, props.navigation);
  };
  const handleRandom = () => {
    dispatch({ type: types.SET_LOADING, payload: true });
    props.StartRandomSearch(props.navigation);
  };

  return (
    <View testID="AstroidSearch-wrapper" style={styles.layout}>
      <TextInput
        placeholder="Enter ID (Ex:2000433, 2000719, 2000887 etc..)"
        style={styles.input}
        onChangeText={(value: string) => handleChange(value)}
        value={id}
        mode="outlined"
      />
      {props.loading && <ActivityIndicator size={30} color="#e67e22" />}

      <Button
        style={{
          ...styles.btn,
          backgroundColor: id.length === 0 ? "#74b9ff" : "#0984e3",
        }}
        title="Submit"
        onPress={() => handleSubmit()}
        disabled={id.length === 0}
      />
      <Button
        style={styles.btn}
        title="Random Asteroid"
        onPress={() => handleRandom()}
        disabled={false}
      />
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  loading: state.astroidState.loading,
});

const styles = StyleSheet.create({
  layout: {
    padding: 20,
  },
  input: {
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#0984e3",
    borderRadius: 5,
    marginVertical: 10,
    height: 40,
    justifyContent: "center",
  },
});

export default connect(mapStateToProps, { SearchAstroid, StartRandomSearch })(
  AstroidSearch
);
