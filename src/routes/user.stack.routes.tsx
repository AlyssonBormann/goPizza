import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SCREENS } from "../constants";
import { Home } from "@screens/Home";
import { Product } from "@screens/Product";

const { Navigator, Screen } = createNativeStackNavigator();

export function UserStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={SCREENS.Home} component={Home} />
      <Screen name={SCREENS.Product} component={Product} />
    </Navigator>
  );
}
