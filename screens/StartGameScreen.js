import {
  TextInput,
  View,
  Alert,
  Text,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";
import Colors from "../constants/Colors";
import CustomButton from "../components/ui/CustomButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
const StartGameScreen = (props) => {
  const { width, height } = useWindowDimensions();
  const [enteredNumber, setEnteredNumber] = useState(null);
  const onTextChange = (number) => {
    setEnteredNumber(number);
  };
  const onResetClick = () => {
    setEnteredNumber(null);
  };
  const OnConfirmClick = () => {
    const choosedNumber = parseInt(enteredNumber);
    if (isNaN(choosedNumber) || choosedNumber <= 0 || choosedNumber > 99) {
      return Alert.alert(
        "Invalid Input",
        "number should be between 1 from 99",
        [
          {
            text: "okay",
            style: "destructive",
            onPress: onResetClick,
          },
        ]
      );
    }
    props.pickNumberHandler(enteredNumber);
  };
  const DimensionjustifyContent = height > 400 ? "center" : "flex-start";

  return (
    <ScrollView
      style={styles.fullScreen}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: DimensionjustifyContent,
      }}
    >
      <KeyboardAvoidingView
        style={[styles.fullScreen, { justifyContent: DimensionjustifyContent }]}
        behavior="position"
      >
        <View
          style={[styles.screen, { justifyContent: DimensionjustifyContent }]}
        >
          <View style={styles.header}>
            <Title>Guess My Number</Title>
          </View>
          <Card>
            <Text style={styles.text}> Enter a Number</Text>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              value={enteredNumber}
              onChangeText={onTextChange}
            />
            <View style={styles.buttonWrapper}>
              <View style={styles.buttonContainer}>
                <CustomButton onPress={onResetClick}>Reset</CustomButton>
              </View>
              <View style={styles.buttonContainer}>
                <CustomButton onPress={OnConfirmClick}>Confirm</CustomButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;
const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  screen: {
    flex: 1,
    alignItems: "center",
  },

  numberInput: {
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonWrapper: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  header: {
    margin: 12,
  },

  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    fontFamily: "open-sans-bold",
  },
});
