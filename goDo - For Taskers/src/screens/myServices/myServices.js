import React, { Component } from "react";
import {
  View,
  Container,
  Content,
  Form,
  Picker,
  Item,
  Label,
  Input,
  Button,
  Text,
  Toast
} from "native-base";
import Error from "./../../components/error/error";
class MyServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key0",
      price: {
        value: "",
        valid: false,
        errorMessage: ""
      },
      address: {
        value: "",
        valid: false,
        errorMessage: ""
      }
    };
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  priceChangeHandler = val => {
    regex = /^\d{0,5}$/;
    this.setState({
      price: {
        value: val
      }
    });
    if (regex.test(val)) {
      if (val < 300) {
        this.setState({
          price: {
            valid: false,
            errorMessage: "Minimum hourly cost is 300",
            value: val
          }
        });
      } else if (val > 10000) {
        this.setState({
          price: {
            valid: false,
            errorMessage: "Maximum hourly cost is 10000",
            value: val
          }
        });
      } else {
        this.setState({
          price: {
            valid: true,
            value: val
          }
        });
      }
    } else {
      this.setState({
        price: {
          valid: false,
          errorMessage: "Enter a valid Hourly cost!",
          value: val
        }
      });
    }
  };

  addressChangeHandler = val => {
    if (val != "") {
      this.setState({
        address: {
          valid: true,
          value: val
        }
      });
    } else {
      this.setState({
        address: {
          valid: false,
          value: val
        }
      });
    }
  };

  submitHandler = () => {
    if (this.state.price.value == "") {
      this.setState({
        price: {
          valid: false,
          errorMessage: "Hourly Cost can't be empty!"
        }
      });
    }
    if (this.state.address.value == "") {
      this.setState({
        address: {
          valid: false,
          errorMessage: "Address can't be empty!"
        }
      });
    }
    if (this.state.price.valid && this.state.address.valid) {
      alert("Updated Successfully!");
    }
  };

  render() {
    let costError = !this.state.price.valid ? (
      <Error message={this.state.price.errorMessage} />
    ) : null;
    let addressError = !this.state.address.valid ? (
      <Error message={this.state.address.errorMessage} />
    ) : null;
    return (
      <Container>
        <Content padder>
          <Form>
            <Item stackedLabel>
              <Label style={{ fontSize: 25 }}>Types of Services</Label>
              <Picker
                note
                mode="dropdown"
                style={{ width: "100%" }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Handy Man" value="key0" />
                <Picker.Item label="Paint" value="key1" />
                <Picker.Item label="Tutor" value="key2" />
                <Picker.Item label="Health" value="key3" />
                <Picker.Item label="Plumber" value="key4" />
              </Picker>
            </Item>

            {/*<Item stackedLabel>
              <Label style={{ fontSize: 25 }}>Sub Category</Label>
              <Picker
                note
                mode="dropdown"
                style={{ width: "100%" }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Cleaning" value="key0" />
                <Picker.Item label="Repair" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>*/}

            <Item stackedLabel>
              <Label style={{ fontSize: 25 }}>Average Hourly Cost</Label>
              <Input
                placeholder="500"
                maxLength={5}
                onChangeText={text => {
                  this.priceChangeHandler(text);
                }}
              />
            </Item>
            <View style={{ marginLeft: 15 }}>{costError}</View>

            <Item stackedLabel>
              <Label style={{ fontSize: 25 }}>Address</Label>
              <Input
                placeholder="Lahore"
                onChangeText={text => {
                  this.addressChangeHandler(text);
                }}
              />
            </Item>
            <View style={{ marginLeft: 15 }}>{addressError}</View>
          </Form>
          <Button
            light
            style={{ alignSelf: "center", marginTop: 30 }}
            onPress={this.submitHandler}
          >
            <Text style={{ alignSelf: "center" }}>Update</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default MyServices;
