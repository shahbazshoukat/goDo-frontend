import React, { Component } from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Icon,
  Text,
  Label,
  Toast
} from "native-base";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Content>
          <Text style={{ fontSize: 30, marginLeft: 30, marginTop: 60 }}>
            Payment
          </Text>
          <Label style={{ marginLeft: 30 }}>
            Select how would you like to get Paid
          </Label>
          <List
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: 20
            }}
          >
            <ListItem
              style={{
                backgroundColor: "#6da5ff",
                paddingLeft: 20,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15
              }}
              onPress={() => {
                Toast.show({
                  text: "Cash Selected!",
                  dration: 3000,
                  type: "success"
                });
              }}
            >
              <Icon
                style={{ color: "white" }}
                name="cash"
                type="MaterialCommunityIcons"
              />
              <Text style={{ color: "white", marginLeft: 20 }}>Cash</Text>
            </ListItem>
            <ListItem
              style={{
                backgroundColor: "#6da5ff",
                paddingLeft: 20,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15
              }}
              onPress={() => {
                Toast.show({
                  text: "Credit/Debit Card Selected!",
                  dration: 3000,
                  type: "success"
                });
              }}
            >
              <Icon
                style={{ color: "white" }}
                name="credit-card"
                type="Entypo"
              />
              <Text style={{ color: "white", marginLeft: 20 }}>
                Credit/Debit Card
              </Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default Payment;
