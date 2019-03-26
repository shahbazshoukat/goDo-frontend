import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Text, Button, Icon, Content } from "native-base";
import Error from "./../../components/error/error";
import { priColor } from "./../../../app.json";
import { secColor } from "./../../../app.json";
class Signup extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        valid: false,
        errorMessage: ""
      },
      email: {
        value: "",
        valid: false,
        errorMessage: ""
      },
      password: {
        value: "",
        valid: false,
        errorMessage: ""
      },
      cPassword: {
        value: "",
        valid: false,
        errorMessage: ""
      }
    };
  }

  inputChangeHandler = (val, type) => {
    if (type == "name") {
      name = /^[a-zA-Z ]+$/;
      this.setState({
        name: {
          value: val
        }
      });

      if (name.test(val)) {
        this.setState({
          name: {
            valid: true,
            value: val
          }
        });
      } else {
        this.setState({
          name: {
            valid: false,
            errorMessage: "Enter a valid name!",
            value: val
          }
        });
      }
    }
    if (type == "email") {
      email = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      this.setState({
        email: {
          value: val
        }
      });
      if (email.test(val)) {
        this.setState({
          email: {
            valid: true,
            value: val
          }
        });
      } else {
        this.setState({
          email: {
            valid: false,
            errorMessage: "Enter a valid email!",
            value: val
          }
        });
      }
    }
    if (type == "password") {
      password = /^[A-Za-z]\w{5,14}$/;
      this.setState({
        password: {
          value: val
        }
      });
      if (password.test(val)) {
        this.setState({
          password: {
            valid: true,
            value: val
          }
        });
      } else {
        this.setState({
          password: {
            valid: false,
            errorMessage: "Enter a valid password!",
            value: val
          }
        });
      }
    }
    if (type == "cPassword") {
      this.setState({
        cPassword: {
          value: val
        }
      });
      if (val == this.state.password.value) {
        this.setState({
          cPassword: {
            valid: true,
            value: val
          }
        });
      } else {
        this.setState({
          cPassword: {
            valid: false,
            errorMessage: "Password does not match!",
            value: val
          }
        });
      }
    }
  };

  submitHandler = () => {
    if (!this.state.name.valid) {
      if (this.state.name.errorMessage == "") {
        this.setState({
          name: {
            errorMessage: "Name can't be empty!"
          }
        });
      }
    }
    if (!this.state.email.valid) {
      if (this.state.email.errorMessage == "") {
        this.setState({
          email: {
            errorMessage: "Email can't be empty!"
          }
        });
      }
    }
    if (!this.state.password.valid) {
      if (this.state.password.errorMessage == "") {
        this.setState({
          password: {
            errorMessage: "Password can't be empty!"
          }
        });
      }
    }
    if (!this.state.cPassword.valid) {
      if (this.state.cPassword.errorMessage == "") {
        this.setState({
          cPassword: {
            errorMessage: "Confirm Password can't be empty!"
          }
        });
      }
    }
    if (
      this.state.name.valid &&
      this.state.email.valid &&
      this.state.password.valid &&
      this.state.cPassword.valid
    ) {
      this.props.navigation.navigate("Congratulations");
    }
  };
  render() {
    var nameError = null;
    nameError = !this.state.name.valid ? (
      <Error message={this.state.name.errorMessage} />
    ) : null;

    var emailError = null;
    emailError = !this.state.email.valid ? (
      <Error message={this.state.email.errorMessage} />
    ) : null;

    var passwordError = null;
    passwordError = !this.state.password.valid ? (
      <Error message={this.state.password.errorMessage} />
    ) : null;

    var cPasswordError = null;
    cPasswordError = !this.state.cPassword.valid ? (
      <Error message={this.state.cPassword.errorMessage} />
    ) : null;
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
                placeholder="Name"
                maxLength={25}
                value={this.state.name.value}
                onChangeText={text => {
                  this.inputChangeHandler(text, "name");
                }}
              />
            </View>
            {nameError}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                maxLength={40}
                onChangeText={text => {
                  this.inputChangeHandler(text, "email");
                }}
              />
            </View>
            {emailError}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password(Length: 6-14)"
                maxLength={14}
                onChangeText={text => {
                  this.inputChangeHandler(text, "password");
                }}
              />
            </View>
            {passwordError}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                maxLength={14}
                onChangeText={text => {
                  this.inputChangeHandler(text, "cPassword");
                }}
              />
            </View>
            {cPasswordError}
            <View style={styles.loginContainer}>
              <Button style={styles.btnLogin} onPress={this.submitHandler}>
                <Text style={{ color: "white" }}>Signup</Text>
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

export default Signup;
