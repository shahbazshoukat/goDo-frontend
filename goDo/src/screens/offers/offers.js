import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Content, View, Text, Button, List } from "native-base";
import Offer from "./../../components/offer/offer";
class Offers extends Component {
  static navigationOptions = {
    title: "Offers"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Content>
          <View>
            <List>
              <Offer
                title="I can do it"
                description="I can do it with perfection. Kindly consider me."
                date="22 March"
                price="5K"
                navigation={this.props.navigation}
              />
              <Offer
                title="I can do it"
                description="I can do it with perfection. Kindly consider me."
                date="22 March"
                price="5K"
                navigation={this.props.navigation}
              />
              <Offer
                title="I can do it"
                description="I can do it with perfection. Kindly consider me."
                date="22 March"
                price="5K"
                navigation={this.props.navigation}
              />
              <Offer
                title="I can do it"
                description="I can do it with perfection. Kindly consider me."
                date="22 March"
                price="5K"
                navigation={this.props.navigation}
              />
              <Offer
                title="I can do it"
                description="I can do it with perfection. Kindly consider me."
                date="22 March"
                price="5K"
                navigation={this.props.navigation}
              />
              <Offer
                title="I can do it"
                description="I can do it with perfection. Kindly consider me."
                date="22 March"
                price="5K"
                navigation={this.props.navigation}
              />
              <Offer
                title="I can do it"
                description="I can do it with perfection. Kindly consider me."
                date="22 March"
                price="5K"
                navigation={this.props.navigation}
              />
              <Offer
                title="I can do it"
                description="I can do it with perfection. Kindly consider me."
                date="22 March"
                price="5K"
                navigation={this.props.navigation}
              />
            </List>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Offers;
