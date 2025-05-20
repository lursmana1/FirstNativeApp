import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";
const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
};
export default NumberContainer;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 370 ? 12 : 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 370 ? 28 : 36,
    fontWeight: "bold",
  },
});
