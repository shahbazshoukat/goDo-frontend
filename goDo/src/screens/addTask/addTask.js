import React, { Component } from "react";
import {
  Content,
  View,
  Text,
  Button,
  Icon,
  Form,
  Item,
  Label,
  Textarea
} from "native-base";
import { StyleSheet, Dimensions, ScrollView, TextInput } from "react-native";
import { Grid, Col, Row } from "react-native-easy-grid";
import { priColor, secColor, terColor } from "./../../../app.json";
import Error from "./../../components/error/error";
class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handyMan: false,
      paint: false,
      tutor: false,
      health: false,
      plumber: false,
      clicked: false,
      service: {
        value: "",
        valid: false,
        errorMessage: ""
      },
      title: {
        value: "",
        valid: false,
        errorMessage: ""
      },
      budget: {
        value: "",
        valid: false,
        errorMessage: ""
      },
      description: {
        value: "",
        valid: false,
        errorMessage: ""
      },
      location: {
        value: "",
        valid: false,
        errorMessage: ""
      }
    };
  }

  handyManHandler = () => {
    this.setState({
      handyMan: this.state.handyMan ? false : true,
      paint: false,
      tutor: false,
      health: false,
      plumber: false,
      clicked: !this.state.handyMan,
      service: {
        valid: !this.state.handyMan,
        errorMessage: "Select a service!"
      }
    });
  };

  paintHandler = () => {
    this.setState({
      handyMan: false,
      paint: this.state.paint ? false : true,
      tutor: false,
      health: false,
      plumber: false,
      clicked: !this.state.paint,
      service: {
        valid: !this.state.paint,
        errorMessage: "Select a service!"
      }
    });
  };

  tutorHandler = () => {
    this.setState({
      handyMan: false,
      paint: false,
      tutor: this.state.tutor ? false : true,
      health: false,
      plumber: false,
      clicked: !this.state.tutor,
      service: {
        valid: !this.state.tutor,
        errorMessage: "Select a service!"
      }
    });
  };

  healthHandler = () => {
    this.setState({
      handyMan: false,
      paint: false,
      tutor: false,
      health: this.state.health ? false : true,
      plumber: false,
      clicked: !this.state.health,
      service: {
        valid: !this.state.health,
        errorMessage: "Select a service!"
      }
    });
  };

  plumberHandler = () => {
    this.setState({
      handyMan: false,
      paint: false,
      tutor: false,
      health: false,
      plumber: this.state.plumber ? false : true,
      clicked: !this.state.plumber,
      service: {
        valid: !this.state.plumber,
        errorMessage: "Select a service!"
      }
    });
  };

  serviceHandler = () => {
    var service = "";
    if (this.state.handyMan) {
      service = "handyMan";
    } else if (this.state.paint) {
      service = "paint";
    } else if (this.state.tutor) {
      service = "tutor";
    } else if (this.state.health) {
      service = "health";
    } else if (this.state.plumber) {
      service = "plumber";
    }

    if (service == "") {
      this.setState({
        service: {
          valid: false,
          value: service,
          errorMessage: "Select a service!"
        }
      });
    } else {
      this.setState({
        service: {
          valid: true,
          value: service
        }
      });
    }
  };

  titleHandler = val => {
    regex = /^[a-zA-Z0-9 ]+$/;
    this.setState({
      title: {
        value: val
      }
    });

    if (regex.test(val)) {
      this.setState({
        title: {
          valid: true,
          value: val
        }
      });
    } else {
      this.setState({
        title: {
          valid: false,
          errorMessage: "Enter a valid title!",
          value: val
        }
      });
    }
  };

  budgetHandler = val => {
    regex = /^\d{1,6}$/;
    this.setState({
      budget: {
        value: val
      }
    });

    if (regex.test(val)) {
      if (val < 500) {
        this.setState({
          budget: {
            valid: false,
            value: val,
            errorMessage: "Minimum budget should be 500!"
          }
        });
      } else {
        this.setState({
          budget: {
            valid: true,
            value: val
          }
        });
      }
    } else {
      this.setState({
        budget: {
          valid: false,
          errorMessage: "Enter a valid budget!",
          value: val
        }
      });
    }
  };
  descriptionHandler = val => {
    regex = /^[a-zA-Z ]+$/;
    this.setState({
      description: {
        value: val
      }
    });

    if (val != "") {
      this.setState({
        description: {
          valid: true,
          value: val
        }
      });
    } else {
      this.setState({
        description: {
          valid: false,
          errorMessage: "Description can't be empty!",
          value: val
        }
      });
    }
  };
  locationHandler = val => {};

  submitHandler = () => {
    this.serviceHandler();
    if (!this.state.service.valid) {
      if (this.state.service.value == "") {
        this.setState({
          service: {
            errorMessage: "Select a service!"
          }
        });
      }
    }

    if (!this.state.title.valid) {
      if (this.state.title.value == "") {
        this.setState({
          title: {
            errorMessage: "Title can't be empty!"
          }
        });
      }
    }
    if (!this.state.budget.valid) {
      if (this.state.budget.value == "") {
        this.setState({
          budget: {
            errorMessage: "Budget can't be empty!"
          }
        });
      }
    }
    if (!this.state.description.valid) {
      if (this.state.description.value == "") {
        this.setState({
          description: {
            errorMessage: "Description can't be empty!"
          }
        });
      }
    }

    if (
      this.state.service.valid &&
      this.state.title.valid &&
      this.state.budget.valid &&
      this.state.description.valid
    ) {
      alert("Posted Successfully!");
    }
  };

  render() {
    let subCategoryRow = this.state.clicked ? (
      <Row size={10} style={{ backgroundColor: "red" }} />
    ) : null;
    let serviceError = !this.state.service.valid ? (
      <Error message={this.state.service.errorMessage} />
    ) : null;
    let titleError = !this.state.title.valid ? (
      <Error message={this.state.title.errorMessage} />
    ) : null;
    let budgetError = !this.state.budget.valid ? (
      <Error message={this.state.budget.errorMessage} />
    ) : null;
    let descriptionError = !this.state.description.valid ? (
      <Error message={this.state.description.errorMessage} />
    ) : null;

    return (
      <Grid style={{ backgroundColor: secColor }}>
        <Row size={20}>
          <View>
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
            {serviceError}
          </View>
        </Row>
        <Row size={80} style={styles.formContainer}>
          <View style={{ width: "100%" }}>
            <ScrollView>
              <Form>
                <Item regular bordered style={styles.inputContainer}>
                  <TextInput
                    style={{ width: "100%" }}
                    placeholder="Title(e.g.,I want to paint my house)"
                    maxLength={50}
                    onChangeText={text => {
                      this.titleHandler(text);
                    }}
                  />
                </Item>
                {titleError}
                <Item regular bordered style={styles.inputContainer}>
                  <TextInput
                    style={{ width: "100%" }}
                    placeholder="Budget(e.g.,500)"
                    maxLength={6}
                    onChangeText={text => {
                      this.budgetHandler(text);
                    }}
                  />
                </Item>
                {budgetError}
                <Item regular bordered style={styles.inputContainer}>
                  <Textarea
                    rowSpan={5}
                    placeholder="Description"
                    style={{ width: "100%" }}
                    onChangeText={text => {
                      this.descriptionHandler(text);
                    }}
                  />
                </Item>
                {descriptionError}
                <View style={styles.locationContainer}>
                  <Button light style={styles.locationBtn}>
                    <Text>Location</Text>
                  </Button>
                </View>
                <View style={styles.locationContainer}>
                  <Button
                    light
                    style={styles.submitBtn}
                    onPress={this.submitHandler}
                  >
                    <Text style={styles.submitBtnText}>Post the Task</Text>
                  </Button>
                </View>
              </Form>
            </ScrollView>
          </View>
        </Row>
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
    borderColor: priColor,
    padding: 0
  },
  activeServiceBtn: {
    backgroundColor: priColor
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
  },
  formContainer: {
    paddingLeft: 10,
    paddingRight: 10
  },
  inputContainer: {
    borderColor: priColor,
    borderRadius: 10,
    marginTop: 5
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5
  },
  locationBtn: {
    borderWidth: 1,
    borderColor: priColor,
    width: "100%",
    borderRadius: 10
  },
  submitBtn: {
    backgroundColor: priColor,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    marginTop: 5
  },
  submitBtnText: {
    color: "white"
  }
});

export default AddTask;
