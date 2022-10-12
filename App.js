import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// Screen Imports
import { LiveScreen } from "./Screens/LiveScreen";
import { SimulationScreen } from "./Screens/SimulationScreen";
import { LoginScreen } from "./Screens/LoginScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="LoginScreen">
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Live" component={LiveScreen} />
        <Drawer.Screen name="Simulation" component={SimulationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
