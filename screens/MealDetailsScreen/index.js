// Core
import { View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

// Components
import { MealDetails } from "../../components/MealDetails";

// Data
import { MEALS } from "../../data/dummy-data";

export const MealDetailsScreen = () => {
  const mealId = useRoute().params.mealId;
  const selectedMeal = MEALS.find((item) => item.id === mealId);

  const ingredientsJSX = selectedMeal.ingredients.map((ingredient) => {
    return <Text key={ingredient}>{ingredient}</Text>;
  });

  const stepsJSX = selectedMeal.ingredients.map((step) => {
    return <Text key={step}>{step}</Text>;
  });

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text>Ingredients</Text>
      <View>{ingredientsJSX}</View>
      <Text>Steps</Text>
      <View>{stepsJSX}</View>
    </View>
  );
};
