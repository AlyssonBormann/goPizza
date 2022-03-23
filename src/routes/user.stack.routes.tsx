import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useAuth } from "@hooks/auth";
import { UserTabRoutes } from "./user.tab.routes";

import { SCREENS } from "../constants";
import { Home } from "@screens/Home";
import { Product } from "@screens/Product";
import { Order } from "@screens/Order";

const { Navigator, Screen, Group } = createNativeStackNavigator();

export function UserStackRoutes() {
  const { user } = useAuth();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {user?.isAdmin ? (
        <Group>
          <Screen name={SCREENS.Home} component={Home} />
          <Screen name={SCREENS.Product} component={Product} />
        </Group>
      ) : (
        <Group>
          <Screen name="UserTabRoutes" component={UserTabRoutes} />
          <Screen name={SCREENS.Order} component={Order} />
        </Group>
      )}
    </Navigator>
  );
}
