// Core
import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

// Components
import { MealItem } from "../../components";

// Data
import { MEALS, CATEGORIES } from "../../data/dummy-data";

export const MealsOverviewScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((item) =>
    item.categoryIds.includes(catId)
  );

  const renderMealItem = ({ item }) => {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  };

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((item) => item.id === catId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

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
