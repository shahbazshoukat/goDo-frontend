import React, { Component } from "react";
import styles from "./styles";
import { Icon, View, Button, Text } from "native-base";

class ReviewStars extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Button
          small
          success
          rounded
          style={{ width: 70, height: 25, marginTop: this.props.marginTop }}
        >
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 15 }}>
            {this.props.rating}
          </Text>
          <Icon
            name="star"
            type="FontAwesome"
            small
            style={{ marginLeft: -10 }}
          />
        </Button>
      </View>
    );
  }
}

export default ReviewStars;
