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
class Job extends Component {
  static navigationOptions = {
    title: "Job Details"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  offersHandler = () => {
    this.props.navigation.navigate("Offers");
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
              </Body>
            </ListItem>
            <ListItem style={styles.titleContainer}>
              <View>
                <Text style={styles.titleText}>
                  I need a tutor for 10th class
                </Text>
              </View>
              <View style={styles.badgeContainer}>
                <Badge small info rounded>
                  <Text>open</Text>
                </Badge>
                <Badge small info rounded style={styles.badge}>
                  <Text>Tutor/High school</Text>
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
                <Text>Budget</Text>
              </View>
              <View style={styles.listRight}>
                <Text note>10K</Text>
                <Text note>Fixed/Hourly</Text>
              </View>
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
                <Text>Location</Text>
              </View>
              <View style={styles.listRight}>
                <Text note>Lahore</Text>
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
              <Text style={styles.offerText}>Offers</Text>
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

export default Job;
