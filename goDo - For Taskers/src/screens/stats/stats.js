import React, { Component } from "react";
import { Grid, Row, Col } from "react-native-easy-grid";
import { View, Button, Text } from "native-base";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { priColor, secColor, terColor } from "./../../../app.json";
class Stats extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <Row size={5}>
          <View style={styles.headingTextContainer}>
            <Text style={styles.headingText}>Earnings</Text>
          </View>
        </Row>
        <Row size={30}>
          <Col size={1}>
            <View style={styles.mainContainer}>
              <View style={styles.btnContainer}>
                <Text style={styles.btnText}>5K</Text>
              </View>
              <Text note>Today</Text>
            </View>
          </Col>
          <Col size={1}>
            <View style={styles.mainContainer}>
              <View style={styles.btnContainer}>
                <Text style={styles.btnText}>5K</Text>
              </View>
              <Text note>Week</Text>
            </View>
          </Col>
          <Col size={1}>
            <View style={styles.mainContainer}>
              <View style={styles.btnContainer}>
                <Text style={styles.btnText}>5K</Text>
              </View>
              <Text note>Month</Text>
            </View>
          </Col>
        </Row>
        <Row size={5}>
          <View style={styles.headingTextContainer}>
            <Text style={styles.headingText}>Tasks</Text>
          </View>
        </Row>
        <Row size={30}>
          <Col size={1} style={styles.tasksContainer}>
            <View style={styles.tasksCount}>
              <Text style={styles.tasksText}>5</Text>
            </View>
            <View style={styles.tasksHeading}>
              <Text note>Applied</Text>
            </View>
          </Col>
          <Col
            size={1}
            style={[styles.tasksContainer, styles.centerTasksContainer]}
          >
            <View style={styles.tasksCount}>
              <Text style={styles.tasksText}>5</Text>
            </View>
            <View style={styles.tasksHeading}>
              <Text note>Assigned</Text>
            </View>
          </Col>
          <Col size={1} style={styles.tasksContainer}>
            <View style={styles.tasksCount}>
              <Text style={styles.tasksText}>5</Text>
            </View>
            <View style={styles.tasksHeading}>
              <Text note>Completed</Text>
            </View>
          </Col>
        </Row>
        <Row size={5}>
          <View style={styles.headingTextContainer}>
            <Text style={styles.headingText}>Completed</Text>
          </View>
        </Row>
        <Row size={30}>
          <Col size={1}>
            <View style={styles.mainContainer}>
              <View
                style={[styles.btnContainer, { backgroundColor: priColor }]}
              >
                <Text style={[styles.btnText, { color: secColor }]}>1</Text>
              </View>
              <Text note>Today</Text>
            </View>
          </Col>
          <Col size={1}>
            <View style={styles.mainContainer}>
              <View
                style={[styles.btnContainer, { backgroundColor: priColor }]}
              >
                <Text style={[styles.btnText, { color: secColor }]}>1</Text>
              </View>
              <Text note>Week</Text>
            </View>
          </Col>
          <Col size={1}>
            <View style={styles.mainContainer}>
              <View
                style={[styles.btnContainer, { backgroundColor: priColor }]}
              >
                <Text style={[styles.btnText, { color: secColor }]}>3</Text>
              </View>
              <Text note>Month</Text>
            </View>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    justifyContent: "center",

    alignItems: "center"
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: priColor,
    borderColor: priColor
  },
  btnText: {
    color: priColor
  },
  headingTextContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  headingText: {
    color: priColor
  },
  tasksContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  centerTasksContainer: {
    borderLeftWidth: 1,
    borderLeftColor: priColor,
    borderRightWidth: 1,
    borderRightColor: priColor
  },
  tasksText: {
    fontSize: 25,
    color: priColor
  },
  tasksHeading: {
    marginTop: 20
  }
});

export default Stats;
