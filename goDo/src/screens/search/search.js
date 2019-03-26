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
      handyMan: false,
      paint: false,
      tutor: false,
      health: false,
      plumber: false,
      clicked: false,
      normal: true,
      booking: false,
      progress: false
    };
  }

  handyManHandler = () => {
    this.setState({
      handyMan: this.state.handyMan ? false : true,
      paint: false,
      tutor: false,
      health: false,
      plumber: false,
      clicked: !this.state.handyMan
    });
  };

  paintHandler = () => {
    this.setState({
      handyMan: false,
      paint: this.state.paint ? false : true,
      tutor: false,
      health: false,
      plumber: false,
      clicked: !this.state.paint
    });
  };

  tutorHandler = () => {
    this.setState({
      handyMan: false,
      paint: false,
      tutor: this.state.tutor ? false : true,
      health: false,
      plumber: false,
      clicked: !this.state.tutor
    });
  };

  healthHandler = () => {
    this.setState({
      handyMan: false,
      paint: false,
      tutor: false,
      health: this.state.health ? false : true,
      plumber: false,
      clicked: !this.state.health
    });
  };

  plumberHandler = () => {
    this.setState({
      handyMan: false,
      paint: false,
      tutor: false,
      health: false,
      plumber: this.state.plumber ? false : true,
      clicked: !this.state.plumber
    });
  };

  render() {
    let subCategoryRow = this.state.clicked ? (
      <Row size={10} style={{ backgroundColor: "red" }} />
    ) : null;
    let services = (
      <Row size={20}>
        <View style={styles.iconContainer}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.iconContainer}
          >
            <View style={styles.serviceBtnContainer}>
              <Button
                style={[
                  styles.serviceBtn,
                  this.state.handyMan ? styles.activeServiceBtn : null
                ]}
                bordered
                iconLeft
                onPress={this.handyManHandler}
              >
                <Icon
                  style={[
                    styles.serviceIcon,
                    this.state.handyMan ? styles.activeServiceIcon : null
                  ]}
                  name="hammer"
                  type="FontAwesome5"
                />
              </Button>
              <Text note style={styles.serviceText}>
                handyMan
              </Text>
            </View>

            <View style={styles.serviceBtnContainer}>
              <Button
                style={[
                  styles.serviceBtn,
                  this.state.paint ? styles.activeServiceBtn : null
                ]}
                bordered
                iconLeft
                onPress={this.paintHandler}
              >
                <Icon
                  style={[
                    styles.serviceIcon,
                    this.state.paint ? styles.activeServiceIcon : null
                  ]}
                  name="brush"
                  type="FontAwesome5"
                />
              </Button>
              <Text note style={styles.serviceText}>
                Paint
              </Text>
            </View>

            <View style={styles.serviceBtnContainer}>
              <Button
                style={[
                  styles.serviceBtn,
                  this.state.tutor ? styles.activeServiceBtn : null
                ]}
                bordered
                iconLeft
                transparent
                onPress={this.tutorHandler}
              >
                <Icon
                  style={[
                    styles.serviceIcon,
                    this.state.tutor ? styles.activeServiceIcon : null
                  ]}
                  name="user-tie"
                  type="FontAwesome5"
                />
              </Button>
              <Text note style={styles.serviceText}>
                Tutor
              </Text>
            </View>

            <View style={styles.serviceBtnContainer}>
              <Button
                style={[
                  styles.serviceBtn,
                  this.state.health ? styles.activeServiceBtn : null
                ]}
                bordered
                iconLeft
                onPress={this.healthHandler}
              >
                <Icon
                  style={[
                    styles.serviceIcon,
                    this.state.health ? styles.activeServiceIcon : null
                  ]}
                  name="medicinebox"
                  type="AntDesign"
                />
              </Button>
              <Text note style={styles.serviceText}>
                Health
              </Text>
            </View>

            <View style={styles.serviceBtnContainer}>
              <Button
                style={[
                  styles.serviceBtn,
                  this.state.plumber ? styles.activeServiceBtn : null
                ]}
                bordered
                iconLeft
                onPress={this.plumberHandler}
              >
                <Icon
                  style={[
                    styles.serviceIcon,
                    this.state.plumber ? styles.activeServiceIcon : null
                  ]}
                  name="wrench"
                  type="Foundation"
                />
              </Button>
              <Text note style={styles.serviceText}>
                Plumber
              </Text>
            </View>
          </ScrollView>
        </View>
      </Row>
    );
    let row = null;
    if (this.state.normal) {
      row = services;
    } else if (this.state.booking) {
      row = (
        <UserCard
          username="Faizan ahmad"
          distance="2km away"
          price="2K/h"
          phone="03084929198"
        />
      );
    } else if (this.state.progress) {
      row = <Progress />;
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
