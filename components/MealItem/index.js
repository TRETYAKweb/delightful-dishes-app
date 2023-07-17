import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { colors } from "../../constants";

export const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  return (
    <View style={styles.mainContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailsText}>{duration}m</Text>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailsText}>{complexity.toUpperCase()}</Text>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailsText}>
                {affordability.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 15,
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontFamily: "gilroy-800",
    fontSize: 24,
    margin: 15,
  },
  details: {
    marginHorizontal: 15,
    marginBottom: 20,
    flexDirection: "row",
  },
  detailsContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#565DD7",
    borderRadius: 1000,
    marginRight: 5,
  },
  detailsText: {
    fontFamily: "roboto-700",
    fontSize: 12,
    color: colors.white,
  },
  buttonPressed: {
    opacity: 0.75,
  },
});
