import React, { Component } from "react";
import { Container, Content, View, Text, Icon } from "native-base";
import { StyleSheet } from "react-native";
import { priColor, secColor, terColor } from "./.././../../app.json";
class Congratulations extends Component {
  static navigationOptions = {
    header: null
  };
  state = {};
  render() {
    setTimeout(() => {
      this.props.navigation.navigate("Home");
    }, 3000);
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <View style={styles.textContainer}>
            <Icon style={styles.icon} name="check-circle" type="Feather" />
            <Text style={styles.text} note>
              Congratulations
            </Text>
            <Text note>Your account is registered</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    alignItems: "center"
  },
  icon: {
    fontSize: 70,
    color: priColor
  },
  text: {
    fontSize: 25
  }
});

export default Congratulations;
