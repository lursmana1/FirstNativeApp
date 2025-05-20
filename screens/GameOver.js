import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Card from "../components/ui/Card";
import CustomButton from "../components/ui/CustomButton";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
const GameOver = (props) => {
  const { width, height } = useWindowDimensions();
  let imageContainer = (
    <View style={width > 500 ? styles.imageWideStyles : styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("../assets/images/success.png")}
      />
    </View>
  );

  return (
    <ScrollView style={styles.screenWrapper}>
      <View style={styles.screen}>
        <Title>GAME OVER</Title>
        {imageContainer}
        <View>
          <Text style={styles.summaryText}>
            Your phone needed{" "}
            <Text style={styles.higlitedText}>{props.allRounds + 1}</Text>{" "}
            rounds to guess The Number{" "}
            <Text style={styles.higlitedText}>{props.userInput}</Text>
          </Text>
        </View>
        <CustomButton onPress={props.onResetGame}>Restart Game</CustomButton>
      </View>
    </ScrollView>
  );
};
export default GameOver;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
  },
  screen: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  imageWideStyles: {
    borderRadius: 75,
    width: 75,
    height: 75,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 12,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "open-sans",
    color: "white",
    marginVertical: 12,
  },
  higlitedText: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
{
  /* <Card>
        <CustomButton onPress={props.onResetGame}>Restart Game</CustomButton>
      </Card> */
}
