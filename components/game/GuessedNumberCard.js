import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
const GuessedNumberCard = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>#{props.totalNumber - props.number}</Text>
      <Text style={styles.guessNumber}>
        Opponent's Guess : {props.children}
      </Text>
    </View>
  );
};

export default GuessedNumberCard;
const styles = StyleSheet.create({
  container: {
    flexDirection : 'row',
    justifyContent : 'space-between',
    padding: 16,
    margin: 12,
    backgroundColor: Colors.primary500,
    borderWidth: 2,
    borderColor: Colors.primary500,
    gap: 8,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  number: {
    fontSize: 16,
    color: "white",
    fontFamily: "open-sans",
  },
  guessNumber: {
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});
