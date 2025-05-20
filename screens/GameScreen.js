import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import CustomButton from "../components/ui/CustomButton";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/ui/Title";
import GuessedNumberCard from "../components/game/GuessedNumberCard";
import Card from "../components/ui/Card";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
function RandomNumberGenerator(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return RandomNumberGenerator(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = (props) => {
  const { width, height } = useWindowDimensions();
  const initialNumber = RandomNumberGenerator(1, 100, props.userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialNumber);
  const [guessedNumbers, setGuessedNumbers] = useState([initialNumber]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess <= props.userNumber) ||
      (direction === "higher" && currentGuess >= props.userNumber)
    ) {
      Alert.alert("stop lying");
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = RandomNumberGenerator(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRandomNumber);
    setGuessedNumbers((previousGuesses) => {
      return [newRandomNumber, ...previousGuesses];
    });
    props.setWholeGameRounds(guessedNumbers.length);
  };

  useEffect(() => {
    if (currentGuess === Number(props.userNumber)) {
      props.GameOverFunction();
    }
  }, [currentGuess]);
  let content = (
    <>
      <NumberContainer> {currentGuess}</NumberContainer>
      <Card>
        <Text style={styles.Text}>Higher or lower</Text>
        <View style={styles.buttonWrappers}>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" />
            </CustomButton>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="add" />
            </CustomButton>
          </View>
        </View>
      </Card>
    </>
  );
  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsWideWrappers}>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" />
            </CustomButton>
          </View>
          <NumberContainer> {currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="add" />
            </CustomButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screenWrapper}>
      <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        {content}
      </View>

      <View style={styles.scrollable}>
        <View>
          <Title>Log Rounds</Title>
        </View>
        <ScrollView>
          {guessedNumbers.map((number, idx) => {
            return (
              <GuessedNumberCard
                totalNumber={guessedNumbers.length}
                number={idx}
                key={idx}
              >
                {number}
              </GuessedNumberCard>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
export default GameScreen;
const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    alignItems: "center",
  },
  screen: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignContent: "center",
  },
  scrollable: {
    flex: 1,
    alignItems: "center",
  },
  Text: {
    color: Colors.accent500,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center", 
  },
  buttonWrappers: {
    flexDirection: "row",
  },
  buttonsWideWrappers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "cente",
  },
  buttonContainer: {
    flex: 1,
  },
});
