import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Text, Button, Icon, Content } from "native-base";
import { priColor } from "./../../../app.json";
import { secColor } from "./../../../app.json";
class OTP extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      otp: {
        value: "",
        valid: false,
        errorMessage: ""
      }
    };
  }

  submitHandler = () => {
    if (this.state.otp.valid) {
      this.props.navigation.navigate("Signup");
    }
  };

  otpChangeHandler = val => {
    otp = /^\d{4}$/;
    this.setState({
      otp: {
        value: val
      }
    });
    if (otp.test(val)) {
      this.setState({
        otp: {
          valid: true
        }
      });
    } else {
      this.setState({
        otp: {
          valid: false
        }
      });
    }
  };
  render() {
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
                placeholder="4 digit OTP code"
                keyboardType="number-pad"
                maxLength={4}
                onChangeText={text => {
                  this.otpChangeHandler(text);
                }}
              />
            </View>
            <View style={styles.loginContainer}>
              <Button
                style={styles.btnLogin}
                onPress={this.submitHandler}
                disabled={!this.state.otp.valid}
              >
                <Text style={{ color: "white" }}>Verify Number</Text>
              </Button>
            </View>
            <View style={styles.codeTextContainer}>
              <Text style={styles.codeText}>Didn't received code.</Text>
            </View>
            <View style={styles.codeTextContainer}>
              <Button small light>
                <Text>Resend</Text>
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
  },
  codeTextContainer: {
    marginTop: "10%",
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default OTP;
