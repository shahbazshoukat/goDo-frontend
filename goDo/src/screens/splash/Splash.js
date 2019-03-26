import React, { Component } from "react";
import { Container, Text, Content } from "native-base";
import { Image, View, StyleSheet } from "react-native";
import { priColor } from "./../../../app.json";
import { secColor } from "./../../../app.json";
class Splash extends Component {
  static navigationOptions = {
    header: null
  };

  state = {};
  render() {
    setTimeout(() => {
      this.props.navigation.navigate("Welcome");
    }, 5000);
    const logoImg = { uri: "./../../assets/images/logo.jpg" };
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.logoText}>goDo</Text>
        </View>
        <View style={styles.sloganContainer}>
          <Text>All Services at your door step</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  textContainer: {
    marginTop: "30%",
    backgroundColor: priColor,
    padding: 20
  },
  logoText: {
    fontSize: 60,
    fontWeight: "bold",
    color: secColor
  },
  sloganContainer: {
    marginTop: 20
  }
});

export default Splash;
