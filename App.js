// Core
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import {
  CategoriesScreen,
  MealsOverviewScreen,
  MealDetailsScreen,
} from "./screens";
import { colors } from "./constants";

const Stack = createNativeStackNavigator();

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    "roboto-300": require("./assets/fonts/Roboto-Light.ttf"),
    "roboto-400": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-700": require("./assets/fonts/Roboto-Bold.ttf"),
    "gilroy-800": require("./assets/fonts/Gilroy-Extrabold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#36273C",
            },
            headerTintColor: colors.white,
            contentStyle: {
              backgroundColor: "#503E57",
            },
            headerBackTitle: "Back",
            headerBackTitleStyle: {
              fontFamily: "roboto-700",
            },
          }}
        >
          <Stack.Screen
            name="MealCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealDetailsScreen"
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
