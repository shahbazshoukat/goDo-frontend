import React, { Component } from "react";
import { Content, View, Text, Button, Icon } from "native-base";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Grid, Col, Row } from "react-native-easy-grid";
import { priColor, secColor, terColor } from "./../../../app.json";
import UserCard from "./../../components/userCard/userCard";
import Progress from "./../../components/progress/progress";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      normal: this.state.normal,
      instantJob: false,
      accept: this.props.accept,
      reject: false,
      startTask: this.props.startTask,
      cancel: false,
      completeTask: this.props.completeTask,
      done: false
    };
  }

  render() {
    let row = null;
    if (this.state.normal) {
      row = null;
    } else if (this.state.accept) {
      row = (
        <UserCard
          username="Faizan ahmad"
          distance="2km away"
          phone="03084929198"
        />
      );
    } else if (this.state.startTask) {
      row = null;
    } else if (this.state.completeTask) {
      row = (
        <UserCard
          username="Faizan ahmad"
          distance="wait user is paying"
          phone="03084929198"
        />
      );
    }
    return (
      <Grid>
        <Row size={this.state.booking ? 75 : 80}>
          <View>
            <Text>Map here</Text>
          </View>
        </Row>
        {row}
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  serviceBtn: {
    borderRadius: 100,
    width: Dimensions.get("window").width / 7,
    height: Dimensions.get("window").width / 7,
    borderColor: terColor,
    padding: 0
  },
  activeServiceBtn: {
    backgroundColor: terColor
  },
  iconContainer: {
    alignItems: "center",
    paddingLeft: 0,
    backgroundColor: secColor,
    paddingRight: 5
  },
  serviceBtnContainer: {
    paddingLeft: 17,
    alignItems: "center"
  },
  serviceText: {
    fontSize: 12
  },
  serviceIcon: {
    color: terColor,
    marginLeft: 14
  },
  activeServiceIcon: {
    color: secColor
  }
});

export default Search;
