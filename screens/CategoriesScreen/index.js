// Core
import { FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import { CategoryItem } from "../../components";

// Data
import { CATEGORIES } from "../../data/dummy-data";

export const CategoriesScreen = () => {
  const navigation = useNavigation();

  const renderCategoryItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      });
    };

    return (
      <CategoryItem
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};
