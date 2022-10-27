import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// Screen Imports
import { LiveScreen } from "./Screens/LiveScreen";
import { SimulationScreen } from "./Screens/SimulationScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Live">
        <Drawer.Screen name="Shot History" component={LiveScreen} />
        <Drawer.Screen name="Simulation" component={SimulationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
