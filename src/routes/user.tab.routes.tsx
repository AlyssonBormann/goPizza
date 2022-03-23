import React from "react";
import { Platform } from "react-native";
import { useTheme } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SCREENS } from "../constants";
import { Orders } from "@screens/Orders";
import { Home } from "@screens/Home";

const { Navigator, Screen } = createBottomTabNavigator();

export function UserTabRoutes() {
  const { COLORS } = useTheme();
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.SECONDARY_900,
        tabBarInactiveTintColor: COLORS.SECONDARY_400,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen name={SCREENS.Home} component={Home}></Screen>
      <Screen name={SCREENS.Orders} component={Orders}></Screen>
    </Navigator>
  );
}
