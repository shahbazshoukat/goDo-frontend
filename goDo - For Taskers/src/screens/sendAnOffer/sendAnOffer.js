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
class SendAnOffer extends Component {
  static navigationOptions = {
    title: "Send an Offer"
  };
  constructor(props) {
    super(props);
    this.state = {
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
            errorMessage: "Minimum Price should be 500!"
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
          errorMessage: "Enter a valid Price!",
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
            errorMessage: "Price can't be empty!"
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
      this.state.title.valid &&
      this.state.budget.valid &&
      this.state.description.valid
    ) {
      alert("Sent Successfully!");
    }
  };

  render() {
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
        <Row size={100} style={styles.formContainer}>
          <View style={{ width: "100%" }}>
            <ScrollView>
              <Form>
                <Item regular bordered style={styles.inputContainer}>
                  <TextInput
                    style={{ width: "100%" }}
                    placeholder="Title"
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
                    placeholder="Price(e.g.,500)"
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
                  <Button
                    light
                    style={styles.submitBtn}
                    onPress={this.submitHandler}
                  >
                    <Text style={styles.submitBtnText}>Send the Offer</Text>
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
    paddingRight: 10,
    marginTop: 20
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

export default SendAnOffer;
