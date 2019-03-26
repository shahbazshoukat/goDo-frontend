import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Content,
  View,
  Text,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Icon,
  Label,
  Footer,
  FooterTab,
  Button,
  Badge
} from "native-base";
import ReviewStars from "./../../components/reviewStars/reviewStars";
import { priColor, secColor } from "./../../../app.json";
class Pay extends Component {
  static navigationOptions = {
    title: "Payment"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  paymentHandler = () => {
    alert("Payment Success");
  };
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Body
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start"
                }}
              >
                <View>
                  <Icon
                    style={styles.usericon}
                    name="user-circle"
                    type="FontAwesome"
                  />
                </View>
                <View style={styles.userContainer}>
                  <View style={styles.usernameContainer}>
                    <Text style={styles.username}>Sohaib Asghar</Text>
                  </View>
                </View>
              </Body>
            </ListItem>

            <ListItem>
              <View style={styles.listLeft}>
                <Text>Date</Text>
              </View>
              <View style={styles.listRight}>
                <Text note>28 March</Text>
              </View>
            </ListItem>
            <ListItem>
              <View style={styles.listLeft}>
                <Text>Time</Text>
              </View>
              <View style={styles.listRight}>
                <Text note>12:08PM - 02:08PM</Text>
              </View>
            </ListItem>
            <ListItem>
              <View style={styles.listLeft}>
                <Text>Service</Text>
              </View>
              <View style={styles.listRight}>
                <Text note>Handyman</Text>
              </View>
            </ListItem>
            <ListItem>
              <View style={styles.listLeft}>
                <Text>Price</Text>
              </View>
              <View style={styles.listRight}>
                <Text note>10K</Text>
                <Text note>Fixed/Hourly</Text>
              </View>
            </ListItem>
            <ListItem>
              <View style={styles.listLeft}>
                <Text>Payment Method</Text>
              </View>
              <View style={styles.listRight}>
                <Text note>Cash</Text>
              </View>
            </ListItem>
          </List>
          <View style={styles.btnContainer}>
            <Button style={styles.offerBtn} onPress={this.paymentHandler}>
              <Text style={styles.offerText}>Pay</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  usericon: {
    fontSize: 50,
    color: priColor
  },
  usernameContainer: {
    justifyContent: "center",
    paddingLeft: 0
  },
  username: {
    fontSize: 20
  },
  listLeft: {
    width: "50%"
  },
  listRight: {
    width: "50%",
    alignItems: "flex-end"
  },
  descriptionContainer: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  offerBtn: {
    backgroundColor: priColor,
    width: "40%",
    justifyContent: "center",
    borderRadius: 5
  },
  offerText: {
    color: secColor,
    fontSize: 15
  },
  titleText: {
    fontSize: 18,
    fontWeight: "200"
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  badgeContainer: {
    flexDirection: "row"
  },
  badge: {
    marginLeft: 5
  },
  userContainer: {
    flexDirection: "column",
    paddingLeft: 15
  },
  btnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30
  }
});

export default Pay;
