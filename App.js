import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import StartGameScreen from "./screens/StartGameScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StrictMode, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOver from "./screens/GameOver";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [allRounds, setAllRounds] = useState(0);

  const setWholeGameRounds = (number) => {
    setAllRounds(number);
  };
  const pickNumberHandler = (number) => {
    setUserNumber(number);
  };
  const GameOverFunction = () => {
    setGameIsOver(true);
  };
  const ResetGameFunction = () => {
    setGameIsOver(false);
    setUserNumber(null);
  };

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  let screen = <StartGameScreen pickNumberHandler={pickNumberHandler} />;
  if (userNumber && !gameIsOver) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        GameOverFunction={GameOverFunction}
        setWholeGameRounds={setWholeGameRounds}
      />
    );
  } else if (gameIsOver) {
    screen = (
      <GameOver
        onResetGame={ResetGameFunction}
        userInput={userNumber}
        allRounds={allRounds}
      />
    );
  }

  return (
    <StrictMode>
      <StatusBar style="light" />
      <SafeAreaProvider>
        <LinearGradient
          style={[styles.rootScreen]}
          colors={[Colors.primary800, Colors.accent500]}
        >
          <ImageBackground
            style={styles.rootScreen}
            source={require("./assets/images/background.png")}
            resizeMode="cover"
            imageStyle={styles.backgroundImage}
          >
            <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
          </ImageBackground>
        </LinearGradient>
      </SafeAreaProvider>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
