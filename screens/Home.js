import React, { Component } from "react";
import { render } from "react-dom";
import { View, Button, Text, StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

export default class Form extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={styles.firstText}>Welcome!</Text>
        <Text style={styles.buttonText}>
          To search among our users, please visit our List
        </Text>
        <Button
          title="Go to List"
          onPress={() => this.props.navigation.navigate("List")}
        />
        <Text style={styles.buttonText}>
          To submit your own user information, please visit our Form
        </Text>
        <Button
          title="Go to Form"
          onPress={() => this.props.navigation.navigate("Form")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  firstText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  buttonText: {
    marginBottom: 10,
    marginTop: 40,
    padding: 5,
    fontSize: 14,
  },
});
