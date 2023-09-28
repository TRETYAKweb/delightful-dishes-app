import { MEALS } from "../../data/dummy-data";
import { FlatList } from "react-native-gesture-handler";
import { MealItem } from "../../components";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";


export const FavoritesScreen = () => {

  const favoriteMealIds = useSelector((state) => state.favorite.ids)
  const filteredMeals = MEALS.filter(it => favoriteMealIds.includes(it.id));

  const renderItem = ({item}) => {

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />
  }

  if(favoriteMealIds.length === 0) {
    return <View style={styles.root}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
  }

  return <FlatList data={filteredMeals} keyExtractor={item => item.id} renderItem={renderItem} />
};

const styles = StyleSheet.create({
  root: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff'
  }
})
