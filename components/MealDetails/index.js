import { StyleSheet, View, Text } from "react-native";

import { colors } from "../../constants";

export const MealDetails = ({ duration, complexity, affordability, style }) => {
  return (
    <View style={[styles.details, style]}>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>{duration}m</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>{complexity.toUpperCase()}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>{affordability.toUpperCase()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    marginHorizontal: 15,
    marginBottom: 20,
    flexDirection: "row",
  },
  detailsContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.accent500,
    borderRadius: 1000,
    marginRight: 5,
  },
  detailsText: {
    fontFamily: "roboto-700",
    fontSize: 12,
    color: colors.white,
  },
});
