import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../../constants";

export const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View style={styles.mainContainer} key={dataPoint}>
      <Text style={styles.text}>{dataPoint}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 10,
    marginVertical: 5,
    backgroundColor: colors.accent500,
  },
  text: {
    fontFamily: "roboto-700",
    color: colors.white,
    fontSize: 14,
  },
});
