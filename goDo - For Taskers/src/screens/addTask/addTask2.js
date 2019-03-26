import React, { Component } from "react";
import {
  Content,
  View,
  Header,
  Body,
  Text,
  Picker,
  Icon,
  Textarea,
  Container,
  Button,
  FooterTab,
  Footer,
  DatePicker
} from "native-base";
import { priColor } from "./../../../app.json";
import { secColor } from "./../../../app.json";
import { StyleSheet, TextInput, Dimensions } from "react-native";
import MyHeader from "./../../components/myHeader/myHeader";
class AddTask2 extends Component {
  static navigationOptions = {
    title: "Add a Task"
  };
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    var today = new Date();
    return (
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Budget" />
        </View>

        <View style={styles.inputContainer}>
          <DatePicker
            defaultDate={
              new Date(today.getFullYear(), today.getMonth(), today.getDate())
            }
            minimumDate={
              new Date(today.getFullYear(), today.getMonth(), today.getDate())
            }
            maximumDate={
              new Date(
                today.getFullYear() + 1,
                today.getMonth(),
                today.getDate()
              )
            }
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
          />
          {/* <Text>Date: {this.state.chosenDate.toString().substr(4, 12)}</Text> */}
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Location" />
        </View>

        <View style={styles.btnContainer}>
          <Button style={styles.btn}>
            <Text style={{ color: "white", fontSize: 15 }}>Post a Task</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: secColor
  },
  headerText: {
    fontSize: 18
  },
  formContainer: {
    marginTop: 0
  },
  inputContainer: {
    borderColor: priColor,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: "5%"
  },
  btnContainer: {
    width: "100%",
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    width: "40%",
    justifyContent: "center",
    backgroundColor: priColor,
    borderColor: priColor,
    borderWidth: 1,
    borderRadius: 5
  }
});

export default AddTask2;
