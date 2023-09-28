// Core
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// lib
import { Navigation } from "./lib/Navigation";
import { FavoritesContextProvider } from "./lib/context/favorites-context";

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
      <FavoritesContextProvider>
        <Navigation />
      </FavoritesContextProvider>
    </>
  );
}
