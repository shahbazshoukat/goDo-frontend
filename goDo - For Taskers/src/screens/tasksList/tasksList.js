import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Content, View, Text } from "native-base";
import Task from "./../../components/task/task";
class TasksList extends Component {
  static navigationOptions = {
    title: "Tasks"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Content>
        <View style={styles.container}>
          <View>
            <Task
              title="I want to paint my house"
              description="I have 5 rooms and 1 hall to paint."
              date="28 March"
              location="Lahore"
              service="Paint"
              navigation={this.props.navigation}
              status="open"
            />
            <Task
              title="I want to paint my house"
              description="I have 5 rooms and 1 hall to paint."
              date="28 March"
              location="Lahore"
              service="Paint"
              navigation={this.props.navigation}
              status="open"
            />
            <Task
              title="I want to paint my house"
              description="I have 5 rooms and 1 hall to paint."
              date="28 March"
              location="Lahore"
              service="Paint"
              navigation={this.props.navigation}
              status="open"
            />
            <Task
              title="I want to paint my house"
              description="I have 5 rooms and 1 hall to paint."
              date="28 March"
              location="Lahore"
              service="Paint"
              navigation={this.props.navigation}
              status="open"
            />
            <Task
              title="I want to paint my house"
              description="I have 5 rooms and 1 hall to paint."
              date="28 March"
              location="Lahore"
              service="Paint"
              navigation={this.props.navigation}
              status="open"
            />
            <Task
              title="I want to paint my house"
              description="I have 5 rooms and 1 hall to paint."
              date="28 March"
              location="Lahore"
              service="Paint"
              navigation={this.props.navigation}
              status="open"
            />
            <Task
              title="I want to paint my house"
              description="I have 5 rooms and 1 hall to paint."
              date="28 March"
              location="Lahore"
              service="Paint"
              navigation={this.props.navigation}
              status="open"
            />
            <Task
              title="I want to paint my house"
              description="I have 5 rooms and 1 hall to paint."
              date="28 March"
              location="Lahore"
              service="Paint"
              navigation={this.props.navigation}
              status="open"
            />
          </View>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

export default TasksList;
