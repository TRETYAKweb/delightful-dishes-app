// Core
import { FlatList } from "react-native";

// Components
import { CategoryItem } from "../../components";

// Data
import { CATEGORIES } from "../../data/dummy-data";

export const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview");
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
