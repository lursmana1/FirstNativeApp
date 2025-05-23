import { View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};
export default Card;
const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    alignItems: "center",
    justifyContent: "center",
  },
});
