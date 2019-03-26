import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Header, Body, Text } from "native-base";
import { secColor } from "./../../../app.json";
class MyHeader extends Component {
  state = {};
  render() {
    return (
      <Header hasTabs={this.props.hasTabs} noLeft style={styles.header}>
        <Body>
          <Text style={styles.headerText}>{this.props.title}</Text>
        </Body>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: secColor
  },
  headerText: {
    fontSize: 18
  }
});

export default MyHeader;
