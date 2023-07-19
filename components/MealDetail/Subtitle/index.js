import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../../constants";

export const Subtitle = ({ children }) => {
  return (
    <View style={styles.containerSubtitle}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerSubtitle: {
    marginBottom: 15,
    paddingBottom: 7,
    borderBottomWidth: 2,
    borderBottomColor: colors.accent300,
  },
  subtitle: {
    fontFamily: "roboto-700",
    fontSize: 18,
    color: colors.accent300,
  },
});
