import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { priColor } from "./../../../app.json";
import { secColor } from "./../../../app.json";
import {
  View,
  Button,
  Icon,
  Text,
  List,
  ListItem,
  Left,
  Right,
  Content
} from "native-base";
class Profile extends Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content contentContainerStyle={{ backgroundColor: secColor }}>
        <View>
          <List style={{ paddingLeft: 20, paddingRight: 20 }}>
            <ListItem style={{ paddingTop: 35, paddingBottom: 35 }}>
              <Left>
                <Text style={{ fontSize: 25 }}>Username here</Text>
              </Left>
              <Right>
                <Button
                  transparent
                  onPress={() => {
                    this.props.navigation.navigate("EditProfile");
                  }}
                >
                  <Icon
                    name="edit"
                    type="MaterialIcons"
                    style={{ color: "#999999" }}
                  />
                </Button>
              </Right>
            </ListItem>
            <ListItem
              onPress={() => {
                this.props.navigation.navigate("MyServices");
              }}
            >
              <Left>
                <Text>My Services</Text>
              </Left>
              <Right>
                <Button transparent>
                  <Icon
                    name="work"
                    type="MaterialIcons"
                    style={{ color: "#999999" }}
                  />
                </Button>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Language</Text>
              </Left>
              <Right>
                <Button transparent>
                  <Icon
                    name="language"
                    type="MaterialIcons"
                    style={{ color: "#999999" }}
                  />
                </Button>
              </Right>
            </ListItem>
            <ListItem
              onPress={() => {
                this.props.navigation.navigate("Payment");
              }}
            >
              <Left>
                <Text>Payment Info</Text>
              </Left>
              <Right>
                <Button transparent>
                  <Icon
                    name="credit-card"
                    type="Entypo"
                    style={{ color: "#999999" }}
                  />
                </Button>
              </Right>
            </ListItem>
            <ListItem
              onPress={() => {
                this.props.navigation.navigate("ChangePassword");
              }}
            >
              <Left>
                <Text>Change Password</Text>
              </Left>
              <Right>
                <Button transparent>
                  <Icon name="key" type="Entypo" style={{ color: "#999999" }} />
                </Button>
              </Right>
            </ListItem>
            <ListItem
              onPress={() => {
                this.props.navigation.navigate("Welcome");
              }}
            >
              <Left>
                <Text>Sign Out</Text>
              </Left>
              <Right>
                <Button transparent>
                  <Icon
                    name="logout"
                    type="MaterialCommunityIcons"
                    style={{ color: "#999999" }}
                  />
                </Button>
              </Right>
            </ListItem>
          </List>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  backIcon: {
    color: "black",
    fontSize: 50
  }
});

export default Profile;
