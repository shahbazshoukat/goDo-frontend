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
  Badge,
  Linking
} from "native-base";
import { priColor, secColor } from "./../../../app.json";
import ReviewStars from "./../../components/reviewStars/reviewStars";
class OfferDetails extends Component {
  static navigationOptions = {
    title: "Offer Details"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  offersHandler = () => {
    alert("Offer Accepted");
  };
  pressCall = () => {
    const url = "tel:+123456789";
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error("An error occurred", err));
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
                  <View>
                    <ReviewStars rating="4.8" />
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end"
                  }}
                >
                  <Button small success rounded onPress={this.pressCall}>
                    <Text>Call</Text>
                  </Button>
                </View>
              </Body>
            </ListItem>
            <ListItem style={styles.titleContainer}>
              <View>
                <Text style={styles.titleText}>
                  I can do it with perfection
                </Text>
              </View>
              <View style={styles.badgeContainer}>
                <Badge small info rounded>
                  <Text>Tutor</Text>
                </Badge>
              </View>
            </ListItem>

            <ListItem style={styles.descriptionContainer}>
              <View>
                <Text note>Description:</Text>
              </View>
              <View>
                <Text>
                  I am a student of Matric class in a govt school. I am facing
                  some problems in my Math Subject. I need a good Tutor for
                  Math.
                </Text>
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
                <Text>Availability</Text>
              </View>
              <View style={styles.listRight}>
                <Text note>28 March</Text>
              </View>
            </ListItem>
          </List>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              style={styles.offerBtn}
              success
              onPress={this.offersHandler}
            >
              <Text style={styles.offerText}>Accept</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  usericon: {
    fontSize: 50
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
    //backgroundColor: priColor
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
  }
});

export default OfferDetails;
