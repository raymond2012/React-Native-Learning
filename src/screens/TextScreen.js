import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  // const setName = () => {};

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
