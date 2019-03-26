import React, { Component } from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Icon,
  Text,
  Label,
  Form,
  Item,
  Input,
  Button,
  Toast
} from "native-base";
import Error from "./../../components/error/error";
class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: {
        value: "",
        valid: false,
        errorMessage: ""
      },
      newPassword: {
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

  oldPasswordHandler = val => {
    this.setState({
      oldPassword: {
        value: val,
        valid: true
      }
    });
  };

  newPasswordHandler = val => {
    password = /^[A-Za-z]\w{5,14}$/;
    this.setState({
      newPassword: {
        value: val
      }
    });
    if (password.test(val)) {
      this.setState({
        newPassword: {
          valid: true,
          value: val
        }
      });
    } else {
      this.setState({
        newPassword: {
          valid: false,
          errorMessage: "Enter a valid password!",
          value: val
        }
      });
    }
  };

  cPasswordHandler = val => {
    this.setState({
      cPassword: {
        value: val
      }
    });
    if (val == this.state.newPassword.value) {
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
  };

  submitHandler = () => {
    if (!this.state.oldPassword.valid) {
      if (this.state.oldPassword.errorMessage == "") {
        this.setState({
          oldPassword: {
            errorMessage: "Old Password can't be empty!"
          }
        });
      }
    }
    if (!this.state.newPassword.valid) {
      if (this.state.newPassword.errorMessage == "") {
        this.setState({
          newPassword: {
            errorMessage: "New Password can't be empty!"
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
      this.state.oldPassword.value &&
      this.state.newPassword.value &&
      this.state.cPassword.value
    ) {
      alert("Password updated Successfully!");
    }
  };
  render() {
    var oldPasswordError = this.state.oldPassword.valid ? null : (
      <Error message={this.state.oldPassword.errorMessage} />
    );
    var newPasswordError = this.state.newPassword.valid ? null : (
      <Error message={this.state.newPassword.errorMessage} />
    );
    var cPasswordError = this.state.cPassword.valid ? null : (
      <Error message={this.state.cPassword.errorMessage} />
    );
    return (
      <Container>
        <Content padder>
          <Text style={{ fontSize: 30, marginLeft: 30, marginTop: 30 }}>
            Change Password
          </Text>
          <Label style={{ marginLeft: 30 }}>Use atleast 8 characters</Label>

          <Form style={{ marginLeft: 20, marginRight: 30 }}>
            <Item stackedLabel>
              <Label>Old Password</Label>
              <Input
                onChangeText={text => {
                  this.oldPasswordHandler(text);
                }}
              />
            </Item>
            {oldPasswordError}
            <Item stackedLabel>
              <Label>New Password</Label>
              <Input
                onChangeText={text => {
                  this.newPasswordHandler(text);
                }}
              />
            </Item>
            {newPasswordError}
            <Item stackedLabel>
              <Label>Retype Password</Label>
              <Input
                onChangeText={text => {
                  this.cPasswordHandler(text);
                }}
              />
            </Item>
            {cPasswordError}
          </Form>
          <Button
            light
            style={{ alignSelf: "center", marginTop: 20 }}
            onPress={this.submitHandler}
          >
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default ChangePassword;
