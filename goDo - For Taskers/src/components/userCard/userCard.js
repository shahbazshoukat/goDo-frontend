import React, { Component } from "react";
import { Grid, Row } from "react-native-easy-grid";
import { Icon, View, Text, Button } from "native-base";
import { StyleSheet } from "react-native";
import { priColor, secColor, terColor } from "./../../../app.json";
class UserCard extends Component {
  state = {};
  render() {
    return (
      <Row size={25} style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.userIconContainer}>
            <Icon
              style={styles.userIcon}
              name="user-circle"
              type="FontAwesome"
            />
          </View>
          <View style={styles.userContainer}>
            <Text style={styles.username}>{this.props.username}</Text>
            <Text note>{this.props.distance}</Text>
            <Text note>{this.props.price}</Text>
          </View>
          <View style={styles.callContainer}>
            <Button style={styles.callBtn} bordered iconLeft>
              <Icon style={styles.callIcon} name="phone" type="FontAwesome" />
            </Button>
          </View>
        </View>
      </Row>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    backgroundColor: secColor
  },
  cardContainer: {
    flex: 4,
    flexDirection: "row",
    alignItems: "center"
  },
  userIconContainer: {
    flex: 1,
    alignItems: "center"
  },
  userContainer: {
    flex: 2,
    alignItems: "flex-start"
  },
  username: {
    fontSize: 20
  },
  callContainer: {
    flex: 1,
    alignItems: "center"
  },
  callBtn: {
    borderRadius: 30,
    height: 50,
    width: 50,
    borderColor: priColor
  },
  callIcon: {
    color: priColor
  },
  userIcon: {
    fontSize: 50,
    color: priColor
  },
  textContainer: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  text: {
    color: priColor
  }
});

export default UserCard;
