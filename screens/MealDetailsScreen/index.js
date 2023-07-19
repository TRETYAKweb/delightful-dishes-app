// Core
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

// Components
import { MealDetails, Subtitle, List } from "../../components";

// Data
import { MEALS } from "../../data/dummy-data";
import { colors } from "../../constants";

export const MealDetailsScreen = () => {
  const mealId = useRoute().params.mealId;
  const selectedMeal = MEALS.find((item) => item.id === mealId);

  return (
    <ScrollView style={{ marginBottom: 15 }}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          style={styles.detailsContainer}
        />
        <Subtitle>Ingredients</Subtitle>
        <View style={{ marginBottom: 35 }}>
          <List data={selectedMeal.ingredients} />
        </View>
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  mainContainer: {
    padding: 25,
  },
  detailsContainer: {
    marginHorizontal: 0,
  },
  title: {
    fontFamily: "gilroy-800",
    marginBottom: 15,
    fontSize: 24,
    color: colors.white,
  },
});
