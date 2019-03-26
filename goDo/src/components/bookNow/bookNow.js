import React, { Component } from "react";
import {
  Footer,
  FooterTab,
  Button,
  Text,
  Container,
  Content
} from "native-base";
import { StyleSheet } from "react-native";
import { priColor, secColor, terColor } from "./../../../app.json";
class BookNow extends Component {
  state = {};
  render() {
    return (
      <Footer style={styles.footer}>
        <FooterTab>
          <Button style={styles.bookingBtn} onPress={this.props.onPress}>
            <Text style={styles.bookingText}>{this.props.text}</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({
  bookingBtn: {
    backgroundColor: priColor
  },
  bookingText: {
    color: secColor,
    fontSize: 15
  }
});

export default BookNow;
