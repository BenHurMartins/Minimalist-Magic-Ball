import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import RNShake from "react-native-shake";

const quotes = [
  "It's certain!",
  "Without a doubt",
  "Hell yea",
  "Definitely yes",
  "YES",
  "As i see it, yes",
  "There is a good chance",
  "Oh yea!",
  "Better don't answer you now",
  "Try again later",
  "Error 404, try again later",
  "What did you say?",
  "My sources say no",
  "Ok, the answer is no, sorry :(",
  "No way",
  "No, definitely"
];

type Props = {};
export default class Main extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = { answer: " " };
  }

  generateNewAnswer() {
    let maxPossibleAnswer = quotes.length;

    try {
      let newAnswer = quotes[Math.floor(Math.random() * maxPossibleAnswer)];
      this.setState({ answer: newAnswer });
    } catch (error) {
      this.setState({ answer: error.message });
    }
  }

  componentDidMount() {
    RNShake.addEventListener("ShakeEvent", () => {
      this.generateNewAnswer();
    });
  }

  componentWillUnmount() {
    RNShake.removeEventListener("ShakeEvent");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: "black", flex: 1 }}>
          <Text style={styles.mainText}>
            Hi, ask a questions, then shake your phone!
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "black",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              width: 200,
              height: 200,
              backgroundColor: "#F5FCFF",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 100
            }}
          >
            <Text style={styles.welcome}>{this.state.answer}</Text>
          </View>
        </View>
        <View style={{ backgroundColor: "black", flex: 1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    margin: 10
  },
  mainText: {
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    margin: 10,
    color: "#F5FCFF",
    padding: 80
  }
});
