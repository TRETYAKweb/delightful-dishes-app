// Core
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

// Screens
import {
  CategoriesScreen,
  MealsOverviewScreen,
  MealDetailsScreen,
  FavoritesScreen,
} from "./screens";
import { colors } from "./constants";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#36273C",
        },
        headerTintColor: colors.white,
        sceneContainerStyle: {
          backgroundColor: "#503E57",
        },
        drawerContentStyle: {
          backgroundColor: "#36273C",
        },
        drawerActiveBackgroundColor: "#503E57",
        drawerActiveTintColor: colors.accent300,
        drawerInactiveTintColor: colors.white,
      }}
    >
      <Drawer.Screen
        name="MealCategories"
        component={CategoriesScreen}
        options={{
          headerTitle: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

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
            name="Drawer"
            component={DrawerNavigation}
            options={{
              headerShown: false,
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
