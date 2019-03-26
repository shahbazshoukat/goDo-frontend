import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Text, Button, Icon, Content } from "native-base";
import { priColor } from "./../../../app.json";
import { secColor } from "./../../../app.json";
import Error from "./../../components/error/error";
class Login extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      phone: {
        value: "",
        valid: false,
        errorMessage: ""
      },
      password: {
        value: "",
        valid: false,
        errorMessage: ""
      }
    };
  }

  phoneChangeHandler = val => {
    phone = /^\d{11}$/;
    this.setState({
      phone: {
        value: val
      }
    });
    if (phone.test(val)) {
      this.setState({
        phone: {
          value: val,
          valid: true
        }
      });
    } else {
      this.setState({
        phone: {
          valid: false,
          errorMessage: "Enter a valid Phone Number!"
        }
      });
    }
  };

  passwordChangeHandler = val => {
    this.setState({
      password: {
        value: val,
        valid: true
      }
    });
  };

  submitHandler = () => {
    if (this.state.phone.value == "") {
      this.setState({
        phone: {
          errorMessage: "Phone Number can't be empty!"
        }
      });
    }
    if (this.state.password.value == "") {
      this.setState({
        password: {
          errorMessage: "Password can't be empty!"
        }
      });
    }
    if (this.state.phone.valid && this.state.password.valid) {
      this.props.navigation.navigate("Home");
    }
  };
  render() {
    var phone = this.state.phone.valid ? null : (
      <Error message={this.state.phone.errorMessage} />
    );

    var password = this.state.password.valid ? null : (
      <Error message={this.state.password.errorMessage} />
    );

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
            <Text style={styles.loginText}>Login</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter Phone Number"
                keyboardType="phone-pad"
                maxLength={11}
                onChangeText={text => {
                  this.phoneChangeHandler(text);
                }}
              />
            </View>
            {phone}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter Password"
                maxLength={14}
                onChangeText={text => {
                  this.passwordChangeHandler(text);
                }}
              />
            </View>
            {password}
            <View style={styles.loginContainer}>
              <Button style={styles.btnLogin} onPress={this.submitHandler}>
                <Text style={{ color: "white" }}>Login</Text>
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
    borderRadius: 5
  }
});

export default Login;
