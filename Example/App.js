import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";

const { width, height } = Dimensions.get("window");
const ComponentItem = ({ content, colorBg, colorText, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.itemStyle, { backgroundColor: colorBg }]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={{ color: colorText, fontSize: 30 }}>{content}</Text>
    </TouchableOpacity>
  );
};

export var countPoint = 0;
export var countOperator = 0;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      operate: "",
      arrayKeyboard: [
        { content: "C", colorBg: "#f00", colorText: "#1f1f1f" },
        { content: "+/-", colorBg: "#c9cacc", colorText: "#1f1f1f" },
        { content: "%", colorBg: "#c9cacc", colorText: "#1f1f1f" },
        { content: "÷", colorBg: "#0100FF", colorText: "#fff" },
        { content: "7", colorBg: "#c9cacc", colorText: "#1f1f1f" },
        { content: "8", colorBg: "#c9cacc", colorText: "#1f1f1f" },
        { content: "9", colorBg: "#c9cacc", colorText: "#1f1f1f" },
        { content: "x", colorBg: "#0100FF", colorText: "#fff" },
        { content: "4", colorBg: "#c9cacc", colorText: "#1f1f1f" },
        { content: "5", colorBg: "#c9cacc", colorText: "#1f1f1f" },
        { content: "6", colorBg: "#c9cacc", colorText: "#1f1f1f" },
        { content: "-", colorBg: "#0100FF", colorText: "#fff" },
        { content: "1", colorBg: "#c9cacc", colorText: "#1f1f1f" },
        { content: "2", colorBg: "#c9cacc", colorText: "#1f1f1f" },
        { content: "3", colorBg: "#c9cacc", colorText: "#1f1f1f" },
        { content: "+", colorBg: "#0100FF", colorText: "#fff" },
        { content: "0", colorBg: "#c9cacc", colorText: "#1f1f1f" },
        { content: "Del", colorBg: "#c9cacc", colorText: "#1f1f1f" },
        { content: ".", colorBg: "#c9cacc", colorText: "#1f1f1f" },
        { content: "=", colorBg: "#f78b11", colorText: "#fff" }
      ]
    };
  }

  handleOnPress(item) {
    const { content } = item;
    const { result } = this.state;
    if (
      content === "0" ||
      content === "1" ||
      content === "2" ||
      content === "3" ||
      content === "4" ||
      content === "5" ||
      content === "6" ||
      content === "7" ||
      content === "8" ||
      content === "9"
    ) {
      this.setState({ result: result + item.content }, () => {
        console.log("result", parseFloat(this.state.result));
      });
    } else {
      switch (content) {
        case 'C':
          this.setState({ result: '' });
          countPoint = 0;
          break;
        case '.':
          if (countPoint < 1) this.setState({ result: result + item.content })
          countPoint++;
          console.log(countPoint);
        default:
          break;
      }
    }
  }
  render() {
    const { arrayKeyboard } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.areaResult}>
          <Text style={styles.txtResult}>{this.state.result}</Text>
        </View>
        <View style={styles.areaKeyboard}>
          {arrayKeyboard.map(item => (
            <View key={item.content}>
              <ComponentItem
                content={item.content}
                colorBg={item.colorBg}
                colorText={item.colorText}
                // key={item.content}
                onPress={() => this.handleOnPress(item)}
              />
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010"
  },
  areaResult: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  txtResult: {
    color: "#fff",
    fontSize: 60
  },
  areaKeyboard: {
    flex: 5,
    flexDirection: "row",
    backgroundColor: "#fff",
    flexWrap: "wrap"
  },
  itemStyle: {
    height: height / 7,
    width: width / 4,
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderLeftColor: "#6a6a6c",
    borderBottomColor: "#6a6a6c",
    borderBottomWidth: 1
  }
});
const calculatorStyles = StyleSheet.create({
  root: {
    width: 320,
    height: 520,
    backgroundColor: 'black',
    boxShadow: '0px 0px 20px 0px #aaa'
  },
  keypad: {
    height: 400,
    flexDirection: 'row'
  },
  inputKeys: {
    width: 240
  },
  calculatorKeyText: {
    fontSize: '2em'
  },
  functionKeys: {
    backgroundImage: 'linear-gradient(to bottom, rgba(202,202,204,1) 0%, rgba(196,194,204,1) 100%)',
    flexDirection: 'row'
  },
  functionKey: {
    fontSize: '2em'
  },
  digitKeys: {
    backgroundColor: '#e0e0e7',
    flexDirection: 'row',
    flexWrap: 'wrap-reverse'
  },
  digitKeyText: {
    fontSize: '2.25em'
  },
  operatorKeys: {
    backgroundImage: 'linear-gradient(to bottom, rgba(252,156,23,1) 0%, rgba(247,126,27,1) 100%)'
  },
  operatorKey: {
    borderRightWidth: 0
  },
  operatorKeyText: {
    color: 'white',
    fontSize: '3em'
  },
  keyMultiplyText: {
    lineHeight: 50
  },
  key0: {
    paddingLeft: 32,
    width: 160
  },
  keyDot: {
    overflow: 'hidden'
  },
  keyDotText: {
    fontSize: '5em',
    marginTop: -10
  }
});