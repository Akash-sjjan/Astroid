import React, { FC, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import {
  SearchAstroid,
  StartRandomSearch,
} from "../redux/actions/astroidAction";
import { connect } from "react-redux";
import { TextInput } from "react-native-paper";

interface Props {
  SearchAstroid: Function;
  StartRandomSearch: Function;
  navigation: {
    navigate: Function;
  };
}

const AstroidSearch: FC<Props> = ({
  SearchAstroid,
  StartRandomSearch,
  navigation,
}): JSX.Element => {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (value: string) => {
    setId(value);
  };

  const handleSubmit = async () => {
    console.log(id);
    setLoading(true);
    await SearchAstroid(id, navigation);
    setLoading(false);
  };
  const handleRandom = async () => {
    setLoading(true);
    await StartRandomSearch(navigation);
    setLoading(false);
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
      {loading && <ActivityIndicator size={30} color="#e67e22" />}

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

export default connect(null, { SearchAstroid, StartRandomSearch })(
  AstroidSearch
);
