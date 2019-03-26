import React, { Component } from "react";

import { StyleSheet } from "react-native";
import { priColor } from "./../../../app.json";
import {
  View,
  Text,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Icon
} from "native-base";

class Task extends Component {
  state = {};
  render() {
    const img = "./../../assets/images/logo.jpg";
    return (
      <View>
        <ListItem onPress={() => this.props.navigation.navigate("Job")}>
          <Body
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Icon
                style={styles.usericon}
                name="user-circle"
                type="FontAwesome"
                size={60}
              />
            </View>
            <View>
              <Text>{this.props.title}</Text>
              <Text note>{this.props.description}</Text>
            </View>
          </Body>
          <Right>
            <Text note>{this.props.date}</Text>

            <Text note>{this.props.location}</Text>
            <Text note>{this.props.service}</Text>
          </Right>
        </ListItem>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  usericon: {
    fontSize: 40,
    color: priColor
  }
});

export default Task;
