import React, { Component } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

import t from "tcomb-form-native";

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.maybe(t.String),
  password: t.String,
});

const options = {
  fields: {
    email: {
      error: "Please enter a valid email adress",
    },
    password: {
      password: true,
      secureTextEntry: true,
      error: "Please enter a password",
    },
  },
};

export default class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creds: [],
    };
  }
  handleSubmit = () => {
    const value = this._form.getValue();
    if (value !== null) {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          email: value.email,
          username: value.username,
          password: value.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            creds: json,
          });
        });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Form ref={(c) => (this._form = c)} type={User} options={options} />
        <Button title="Submit" onPress={this.handleSubmit} />
        <Text style={styles.credsText}>
          When you click "Submit" you will see the credentials you entered here:
        </Text>
        <Text style={styles.credsText}>
          Email: {this.state.creds.email} {"\n"}
          Username: {this.state.creds.username} {"\n"}
          Password: {this.state.creds.password} {"\n"}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  credsText: {
    marginTop: 10,
  },
});
