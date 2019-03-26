import React, { Component } from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
  Toast,
  Text
} from "native-base";
import Error from "./../../components/error/error";
class EditProfile extends Component {
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
      phone: {
        value: "",
        valid: false,
        errorMessage: ""
      }
    };
  }

  nameChangeHandler = val => {
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
  };

  emailChangeHandler = val => {
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
  };

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
          valid: true,
          value: val
        }
      });
    } else {
      this.setState({
        phone: {
          valid: false,
          errorMessage: "Enter a valid Phone Number!",
          value: val
        }
      });
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
    if (!this.state.phone.valid) {
      if (this.state.phone.errorMessage == "") {
        this.setState({
          phone: {
            errorMessage: "Phone can't be empty!"
          }
        });
      }
    }

    if (
      this.state.name.valid &&
      this.state.email.valid &&
      this.state.phone.valid
    ) {
      alert("Updated Successfuly!");
    }
  };
  render() {
    var nameError = this.state.name.valid ? null : (
      <Error message={this.state.name.errorMessage} />
    );
    var emailError = this.state.email.valid ? null : (
      <Error message={this.state.email.errorMessage} />
    );
    var phoneError = this.state.phone.valid ? null : (
      <Error message={this.state.phone.errorMessage} />
    );

    return (
      <Container>
        <Content padder>
          <Form>
            <Item stackedLabel>
              <Label>Name</Label>
              <Input
                multiline={false}
                maxLength={25}
                onChangeText={text => {
                  this.nameChangeHandler(text);
                }}
              />
            </Item>

            {nameError}
            <Item stackedLabel>
              <Label>Email</Label>
              <Input
                multiline={false}
                maxLength={40}
                onChangeText={text => {
                  this.emailChangeHandler(text);
                }}
              />
            </Item>
            {emailError}
            <Item stackedLabel>
              <Label>Phone Number</Label>
              <Input
                keyboardType="phone-pad"
                multiline={false}
                maxLength={11}
                onChangeText={text => {
                  this.phoneChangeHandler(text);
                }}
              />
            </Item>
            {phoneError}
          </Form>
          <Button
            light
            style={{ alignSelf: "center", marginTop: 20 }}
            onPress={this.submitHandler}
          >
            <Text>Update</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default EditProfile;
