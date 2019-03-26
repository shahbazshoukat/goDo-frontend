import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  View,
  Button,
  Icon,
  Form,
  Textarea
} from "native-base";
import { priColor, secColor, terColor } from "./../../../app.json";
import { StyleSheet } from "react-native";
class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating1: false,
      rating2: true,
      rating3: true,
      rating4: true,
      rating5: true
    };
  }
  render() {
    return (
      <Container>
        <Content style={{ padding: 20, paddingTop: 30 }}>
          <View style={{ flexDirection: "column", marginTop: 10 }}>
            <Text style={{ fontSize: 25 }}>Rating & Review</Text>
            <Text note>How did you find the experience?</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Button
              rounded
              style={[
                styles.ratingBtn,
                !this.state.rating1 ? styles.activeRatingBtn : null
              ]}
              bordered={this.state.rating1}
              small
              onPress={() => {
                this.setState({
                  rating1: false,
                  rating2: true,
                  rating3: true,
                  rating4: true,
                  rating5: true
                });
              }}
            >
              <Icon
                style={[
                  styles.deactiveIcon,
                  !this.state.rating1 ? styles.activeIcon : null
                ]}
                name="star"
                type="Entypo"
              />
            </Button>
            <Button
              rounded
              style={[
                styles.ratingBtn,
                !this.state.rating2 ? styles.activeRatingBtn : null
              ]}
              bordered={this.state.rating2}
              small
              onPress={() => {
                this.setState({
                  rating1: false,
                  rating2: false,
                  rating3: true,
                  rating4: true,
                  rating5: true
                });
              }}
            >
              <Icon
                style={[
                  styles.deactiveIcon,
                  !this.state.rating2 ? styles.activeIcon : null
                ]}
                name="star"
                type="Entypo"
              />
            </Button>
            <Button
              rounded
              style={[
                styles.ratingBtn,
                !this.state.rating3 ? styles.activeRatingBtn : null
              ]}
              bordered={this.state.rating3}
              small
              onPress={() => {
                this.setState({
                  rating1: false,
                  rating2: false,
                  rating3: false,
                  rating4: true,
                  rating5: true
                });
              }}
            >
              <Icon
                style={[
                  styles.deactiveIcon,
                  !this.state.rating3 ? styles.activeIcon : null
                ]}
                name="star"
                type="Entypo"
              />
            </Button>
            <Button
              rounded
              style={[
                styles.ratingBtn,
                !this.state.rating4 ? styles.activeRatingBtn : null
              ]}
              bordered={this.state.rating4}
              small
              onPress={() => {
                this.setState({
                  rating1: false,
                  rating2: false,
                  rating3: false,
                  rating4: false,
                  rating5: true
                });
              }}
            >
              <Icon
                style={[
                  styles.deactiveIcon,
                  !this.state.rating4 ? styles.activeIcon : null
                ]}
                name="star"
                type="Entypo"
              />
            </Button>
            <Button
              rounded
              style={[
                styles.ratingBtn,
                !this.state.rating5 ? styles.activeRatingBtn : null
              ]}
              bordered={this.state.rating5}
              small
              onPress={() => {
                this.setState({
                  rating1: false,
                  rating2: false,
                  rating3: false,
                  rating4: false,
                  rating5: false
                });
              }}
            >
              <Icon
                style={[
                  styles.deactiveIcon,
                  !this.state.rating5 ? styles.activeIcon : null
                ]}
                name="star"
                type="Entypo"
              />
            </Button>
          </View>
          <View style={{ marginTop: 20 }}>
            <Form>
              <Textarea
                rowSpan={5}
                bordered
                placeholder="Enter your feed back"
              />
            </Form>
            <Button
              rounded
              style={[
                styles.activeRatingBtn,
                {
                  alignSelf: "center",
                  marginTop: 20,
                  width: "50%",
                  justifyContent: "center"
                }
              ]}
            >
              <Text>Submit</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  ratingBtn: {
    borderColor: priColor
  },
  activeRatingBtn: {
    backgroundColor: priColor
  },
  deactiveIcon: {
    color: priColor
  },
  activeIcon: {
    color: secColor
  }
});

export default Rating;
