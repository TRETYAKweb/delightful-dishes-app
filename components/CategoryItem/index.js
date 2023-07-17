// Core
import { StyleSheet, Text, View, Pressable, Platform } from "react-native";
import { colors } from "../../constants";

export const CategoryItem = ({ title, color, onPress }) => {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: colors.white }}
        style={({ pressed }) =>
          pressed ? [styles.button, styles.buttonPressed] : styles.button
        }
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    elevation: 4,
    borderRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.25,
    backgroundColor: colors.white,
  },
  title: {
    fontFamily: "gilroy-800",
    fontSize: 16,
  },
});
