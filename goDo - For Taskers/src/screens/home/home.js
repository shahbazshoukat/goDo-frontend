import React, { Component } from "react";
import { priColor } from "./../../../app.json";
import { secColor } from "./../../../app.json";
import { StyleSheet, Switch } from "react-native";
import Stats from "./../stats/stats";
import Profile from "./../profile/profile";
import Bookings from "./../bookings/bookings";
import Search from "./../search/search";
import MyHeader from "./../../components/myHeader/myHeader";
import StartTask from "./../../components/startTask/startTask";
import UserCard from "./../../components/userCard/userCard";
import { Grid, Col, Row } from "react-native-easy-grid";

import {
  Container,
  Content,
  View,
  Text,
  Header,
  Item,
  Icon,
  Input,
  Footer,
  FooterTab,
  Button,
  Left,
  Body,
  Right
} from "native-base";
import BookNow from "./../../components/bookNow/bookNow";
class Home extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      search: true,
      bookings: false,
      earnings: false,
      profile: false,
      normal: false,
      instantJob: false,
      accept: true,
      reject: false,
      startTask: false,
      cancel: false,
      completeTask: false,
      done: false
    };
  }

  searchTabHandler = () => {
    this.setState({
      search: true,
      bookings: false,
      earnings: false,
      profile: false
    });
  };

  bookingsTabHandler = () => {
    this.setState({
      search: false,
      bookings: true,
      earnings: false,
      profile: false
    });
  };

  earningsTabHandler = () => {
    this.setState({
      search: false,
      bookings: false,
      earnings: true,
      profile: false
    });
  };

  profileTabHandler = () => {
    this.setState({
      search: false,
      bookings: false,
      earnings: false,
      profile: true
    });
  };

  tasksHandler = () => {
    this.props.navigation.navigate("TasksList");
  };

  startHandler = () => {
    this.setState({
      normal: false,
      instantJob: false,
      accept: false,
      reject: false,
      startTask: true,
      cancel: false,
      completeTask: false,
      done: false
    });
  };

  cancelHandler = () => {
    this.setState({
      normal: true,
      instantJob: false,
      accept: false,
      reject: false,
      startTask: false,
      cancel: false,
      completeTask: false,
      done: false
    });
  };

  completeTaskHandler = () => {
    this.setState({
      normal: false,
      instantJob: false,
      accept: false,
      reject: false,
      startTask: false,
      cancel: false,
      completeTask: true,
      done: false
    });
  };

  doneHandler = () => {
    this.setState({
      normal: true,
      instantJob: false,
      accept: false,
      reject: false,
      startTask: false,
      cancel: false,
      completeTask: false,
      done: false
    });
  };
  render() {
    let screen = null;
    let header = null;
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
    if (this.state.search) {
      screen = (
        <Grid>
          <Row size={this.state.booking ? 75 : 80}>
            <View>
              <Text>Map here</Text>
            </View>
          </Row>
          {row}
        </Grid>
      );
      header = (
        <Header style={styles.header} androidStatusBarColor="black">
          <Body style={{ flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                height: "100%",
                justifyContent: "center"
              }}
            >
              <Text style={{ fontSize: 18 }}>Home</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end"
              }}
            >
              <View style={{ justifyContent: "center" }}>
                <Switch
                  onValueChange={value => this.setState({ toggled: value })}
                  value={this.state.toggled}
                />
              </View>

              <View>
                <Button transparent onPress={this.tasksHandler}>
                  <Icon
                    style={styles.jobIcon}
                    name="work"
                    type="MaterialIcons"
                  />
                </Button>
              </View>
            </View>
          </Body>
        </Header>
      );
    } else if (this.state.bookings) {
      screen = <Bookings navigation={this.props.navigation} />;
      header = <MyHeader title="Bookings" hasTabs={true} />;
    } else if (this.state.earnings) {
      screen = <Stats navigation={this.props.navigation} />;
      header = <MyHeader title="Add a Task" />;
    } else if (this.state.profile) {
      screen = <Profile navigation={this.props.navigation} />;
      header = null;
    }

    let footerTabs = (
      <Footer style={styles.footer}>
        <FooterTab style={styles.footerTabs}>
          <Button
            active={this.state.search}
            vertical
            style={styles.footerBtn}
            onPress={this.searchTabHandler}
          >
            <Icon
              active={this.state.search}
              style={
                (styles.footerIcon,
                { color: this.state.search ? priColor : "#eee" })
              }
              name="home"
              type="AntDesign"
            />
            <Text
              active={this.state.search}
              style={
                (styles.footerText,
                { color: this.state.search ? priColor : "#eee" })
              }
            >
              Home
            </Text>
          </Button>

          <Button
            active={this.state.bookings}
            vertical
            style={styles.footerBtn}
            onPress={this.bookingsTabHandler}
          >
            <Icon
              active={this.state.bookings}
              style={
                (styles.footerIcon,
                { color: this.state.bookings ? priColor : "#eee" })
              }
              name="book-open"
              type="MaterialCommunityIcons"
            />
            <Text
              active={this.state.bookings}
              style={
                (styles.footerText,
                { color: this.state.bookings ? priColor : "#eee" })
              }
            >
              bookings
            </Text>
          </Button>

          <Button
            active={this.state.earnings}
            vertical
            style={styles.footerBtn}
            onPress={this.earningsTabHandler}
          >
            <Icon
              active={this.state.earnings}
              style={
                (styles.footerIcon,
                { color: this.state.earnings ? priColor : "#eee" })
              }
              name="clipboard-notes"
              type="Foundation"
            />
            <Text
              active={this.state.earnings}
              style={
                (styles.footerText,
                { color: this.state.earnings ? priColor : "#eee" })
              }
            >
              Stats
            </Text>
          </Button>
          <Button
            active={this.state.profile}
            vertical
            style={styles.footerBtn}
            onPress={this.profileTabHandler}
          >
            <Icon
              active={this.state.profile}
              style={
                (styles.footerIcon,
                { color: this.state.profile ? priColor : "#eee" })
              }
              name="user"
              type="FontAwesome"
            />
            <Text
              active={this.state.profile}
              style={
                (styles.footerText,
                { color: this.state.profile ? priColor : "#eee" })
              }
            >
              Profile
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    );
    let footer = null;
    if (this.state.normal) {
      footer = footerTabs;
    } else if (this.state.accept) {
      footer = (
        <StartTask
          text1="Cancel"
          text2="Start"
          onPressCancel={this.cancelHandler}
          onPressStart={this.startHandler}
        />
      );
    } else if (this.state.startTask) {
      footer = (
        <BookNow text="Complete Task" onPress={this.completeTaskHandler} />
      );
    } else if (this.state.completeTask) {
      footer = <BookNow text="Done" onPress={this.doneHandler} />;
    } else if (this.state.done) {
      this.setState({
        normal: true
      });
    }
    return (
      <Container>
        {header}

        <Content
          contentContainerStyle={[
            { backgroundColor: "#eee" },
            this.state.search || this.state.earnings ? { flex: 1 } : null
          ]}
        >
          {screen}
        </Content>

        {footer}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 0,
    backgroundColor: secColor
  },
  searchBar: {
    borderWidth: 1,
    borderColor: secColor,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 20,
    backgroundColor: "#eee"
  },
  footer: {
    backgroundColor: secColor
  },
  footerTabs: {
    backgroundColor: secColor
  },
  footerIcon: {
    color: priColor
  },
  footerText: {
    color: priColor
  },
  footerBtn: {
    backgroundColor: secColor
  },
  jobIcon: {
    color: priColor
  }
});

export default Home;
