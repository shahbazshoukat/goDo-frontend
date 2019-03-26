import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Text, Button, Icon, Content } from "native-base";
import { priColor } from "./../../../app.json";
import { secColor } from "./../../../app.json";
import Error from "./../../components/error/error";
class PhoneNumber extends Component {
  static navigationOptions = {
    header: null,
    phoneNumber: "",
    phoneNumberError: false,
    errorMessage: ""
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  submitHandler = () => {
    phone = /^\d{11}$/;
    if (phone.test(this.state.phoneNumber)) {
      this.setState({
        phoneNumberError: false
      });
      this.props.navigation.navigate("OTP");
    } else {
      this.setState({
        phoneNumberError: true,
        errorMessage: "Phone Number can't be empty!"
      });
    }
  };
  phoneNumberHandler = phoneNumber => {
    phone = /^\d{11}$/;
    this.setState({
      phoneNumber
    });
    if (phone.test(phoneNumber)) {
      this.setState({
        phoneNumberError: false
      });
    } else {
      this.setState({
        phoneNumberError: true,
        errorMessage: "Enter a valid Phone Number!"
      });
    }
  };
  render() {
    let error = null;
    if (this.state.phoneNumberError) {
      error = <Error message={this.state.errorMessage} />;
    }
    return (
      <Content>
        <View style={styles.container}>
          <View style={styles.btnContainer}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon
                style={styles.backIcon}
                name="keyboard-arrow-left"
                type="MaterialIcons"
              />
            </Button>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.loginText}>SignUp</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Phone Number(03xxxxxxxxx)"
                keyboardType="phone-pad"
                maxLength={11}
                value={this.state.phoneNumber}
                onChangeText={phoneNumber => {
                  this.phoneNumberHandler(phoneNumber);
                }}
              />
            </View>
            {error}
            <View style={styles.loginContainer}>
              <Button style={styles.btnLogin} onPress={this.submitHandler}>
                <Text style={{ color: "white" }}>Verify Number</Text>
              </Button>
            </View>
          </View>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5
  },
  backIcon: {
    color: "black",
    fontSize: 50
  },
  textContainer: {
    paddingLeft: 20
  },
  loginText: {
    fontSize: 30
  },
  formContainer: {
    padding: "10%"
  },
  inputContainer: {
    borderColor: priColor,
    borderBottomWidth: 1,
    marginTop: "5%"
  },
  loginContainer: {
    width: "100%",
    marginTop: "15%"
  },
  btnLogin: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: priColor,
    borderColor: priColor,
    borderWidth: 1,
    borderRadius: 0
  }
});

export default PhoneNumber;
