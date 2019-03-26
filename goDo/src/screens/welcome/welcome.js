import React, { Component } from "react";
import { Container, Text, Content, Button } from "native-base";
import { Image, View, StyleSheet } from "react-native";
import { priColor } from "./../../../app.json";
import { secColor } from "./../../../app.json";
class Welcome extends Component {
  static navigationOptions = {
    header: null
  };
  loginHandler = () => {
    this.props.navigation.navigate("Login");
  };
  signupHandler = () => {
    this.props.navigation.navigate("PhoneNumber");
  };
  state = {};
  render() {
    const logoImg = { uri: "./../../assets/images/logo.jpg" };
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.logoText}>goDo</Text>
        </View>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>Welcome to goDo</Text>
        </View>
        <View style={styles.sloganContainer}>
          <Text>Get your tasks more organized</Text>
          <Text>and get more done!</Text>
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.loginContainer}>
            <Button style={styles.btnLogin} onPress={this.loginHandler}>
              <Text style={{ color: "white" }}>Login</Text>
            </Button>
          </View>
          <View style={styles.signupContainer}>
            <Button style={styles.btnSignup} onPress={this.signupHandler}>
              <Text style={{ color: "black" }}>SignUp</Text>
            </Button>
          </View>
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
    marginTop: "25%",
    backgroundColor: priColor,
    padding: 15
  },
  logoText: {
    fontSize: 50,
    fontWeight: "bold",
    color: secColor
  },
  sloganContainer: {
    marginTop: "5%",
    alignItems: "center"
  },
  welcomeTextContainer: {
    marginTop: "15%"
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "bold"
  },
  btnContainer: {
    marginTop: "20%",
    width: "80%",
    alignItems: "center",
    padding: 10
  },
  btnLogin: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: priColor,
    borderColor: priColor,
    borderWidth: 1,
    borderRadius: 5
  },
  btnSignup: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: secColor,
    borderColor: priColor,
    borderWidth: 1,
    borderRadius: 5
  },
  loginContainer: {
    width: "100%"
  },
  signupContainer: {
    width: "100%",
    marginTop: "10%"
  }
});

export default Welcome;
