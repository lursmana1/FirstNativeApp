import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Title = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};
export default Title;

const styles = StyleSheet.create({
  text: {
    maxWidth: "80%",
    width: 300,
    fontFamily: "open-sans",
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    padding: 8,
    borderWidth: 2,
    borderColor: Colors.accent500,
    borderRadius: 8,
  },
});
