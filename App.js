import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// Screen Imports
import { LiveScreen } from "./Screens/LiveScreen";
import { SimulationScreen } from "./Screens/SimulationScreen";
import  EquipmentScreen  from "./Screens/EquipmentScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Live">
        <Drawer.Screen name="Live" component={LiveScreen} />
        <Drawer.Screen name="Simulation" component={SimulationScreen} />
        <Drawer.Screen name="Equipment" component={EquipmentScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
