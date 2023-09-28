// Core
import { useLayoutEffect, useContext } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { FavoritesContext } from "../../lib/context/favorites-context";

// Components
import { MealDetails, Subtitle, List, IconButton } from "../../components";

// Data
import { MEALS } from "../../data/dummy-data";
import { colors } from "../../constants";

export const MealDetailsScreen = () => {
  const favoriteMealCtx = useContext(FavoritesContext);
  const navigate = useNavigation();
  const mealId = useRoute().params.mealId;
  
  const selectedMeal = MEALS.find((item) => item.id === mealId);

  const favMealStatus = favoriteMealCtx.ids.includes(mealId);

  const headerBtnPressHandler = () => {
    if (favMealStatus) {
      favoriteMealCtx.removeFavorite(mealId);
    } else {
      favoriteMealCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigate.setOptions({
      headerRight: () => {
        return (
          <IconButton
            color="white"
            name={favMealStatus ? "heart" : "heart-outline"}
            onPress={headerBtnPressHandler}
          />
        );
      },
    });
  }, [navigate, headerBtnPressHandler]);

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
