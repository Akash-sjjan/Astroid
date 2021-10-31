import React, { useState } from "react";
import { View } from "react-native";
import Button from "../components/Button";
import styles from "../styles/global";
import {
  SearchAstroid,
  StartRandomSearch,
} from "../redux/actions/astroidAction";
import { connect } from "react-redux";
import { TextInput } from "react-native-paper";

type Props = {
  SearchAstroid: Function;
  StartRandomSearch: Function;
  navigation: {
    navigate: Function;
  };
};

const AstroidSearch = (props: Props) => {
  const [id, setId] = useState("");

  const handleChange = (value: string) => {
    setId(value);
  };

  const handleSubmit = () => {
    console.log(id);
    props.SearchAstroid(id, props.navigation);
  };
  const handleRandom = () => {
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
      <Button
        style={styles.primaryButton}
        title="Submit"
        onPress={() => handleSubmit()}
        disabled={id.length === 0}
      />
      <Button
        style={styles.secondaryButton}
        title="Random Asteroid"
        onPress={() => handleRandom()}
        disabled={false}
      />
    </View>
  );
};
export default connect(null, { SearchAstroid, StartRandomSearch })(
  AstroidSearch
);
