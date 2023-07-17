// Core
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

// Components
import { MealItem } from "../../components";

// Data
import { MEALS } from "../../data/dummy-data";

export const MealsOverviewScreen = () => {
  const route = useRoute();
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((item) =>
    item.categoryIds.includes(catId)
  );

  const renderMealItem = ({ item }) => {
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
