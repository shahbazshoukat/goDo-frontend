import React, { Component } from "react";
import { View, Text } from "native-base";
import { StyleSheet } from "react-native";

class Error extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text style={styles.errorText}>{this.props.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorText: {
    fontSize: 10,
    color: "red"
  }
});

export default Error;
