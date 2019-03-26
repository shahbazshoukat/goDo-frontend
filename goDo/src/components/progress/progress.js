import React, { Component } from "react";
import { Grid, Row } from "react-native-easy-grid";
import { Icon, View, Text, Button } from "native-base";
import { StyleSheet } from "react-native";
import { priColor, secColor, terColor } from "./../../../app.json";
class Progress extends Component {
  state = {};
  render() {
    return (
      <Row size={20}>
        <View style={styles.cardContainer}>
          <View style={styles.userContainer}>
            <Text style={styles.username}>
              Your requested task is in progress,
            </Text>
            <Text style={styles.username}>
              wait untill the task is completed
            </Text>
          </View>
        </View>
      </Row>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },

  userContainer: {
    flex: 1,
    alignItems: "center",
    padding: 20
  },
  username: {
    fontSize: 18,
    color: priColor
  }
});

export default Progress;
