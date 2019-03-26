import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Tabs, Tab, View } from "native-base";
import MyHeader from "./../../components/myHeader/myHeader";
import OpenTasks from "./openTasks";
import AssignedTasks from "./assignTasks";
import ClosedTasks from "./closedTasks";
import { priColor } from "./../../../app.json";
import { secColor } from "./../../../app.json";
class Bookings extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Tabs
          tabBarUnderlineStyle={{ backgroundColor: priColor }}
          tabContainerStyle={{ elevation: 0 }}
        >
          <Tab
            heading="Applied"
            tabStyle={{ backgroundColor: secColor }}
            activeTabStyle={{ backgroundColor: secColor }}
            textStyle={{}}
            activeTextStyle={{ color: priColor }}
          >
            <OpenTasks navigation={this.props.navigation} />
          </Tab>
          <Tab
            heading="Assigned"
            tabStyle={{ backgroundColor: secColor }}
            activeTabStyle={{ backgroundColor: secColor }}
            textStyle={{}}
            activeTextStyle={{ color: priColor }}
          >
            <AssignedTasks navigation={this.props.navigation} />
          </Tab>
          <Tab
            heading="Closed"
            tabStyle={{ backgroundColor: secColor }}
            activeTabStyle={{ backgroundColor: secColor }}
            textStyle={{}}
            activeTextStyle={{ color: priColor }}
          >
            <ClosedTasks navigation={this.props.navigation} />
          </Tab>
        </Tabs>
      </View>
    );
  }
}

export default Bookings;
