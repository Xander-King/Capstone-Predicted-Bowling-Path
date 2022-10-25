import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Screen Imports
import { LiveScreen } from "./Screens/LiveScreen";
import { SimulationScreen } from "./Screens/SimulationScreen";
import  EquipmentScreen  from "./Screens/EquipmentScreen";
import  EquipmentDetails  from "./Screens/EquipmentDetails";
import AddEquipment from "./Screens/AddEquipment";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function EquipmentStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Equip" component={EquipmentScreen} options={{ headerShown: false}} />
    <Stack.Screen name="EquipmentDetails" component={EquipmentDetails} options={{ headerShown: true}}/>
    
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Live">
        <Drawer.Screen name="Live" component={LiveScreen} />
        <Drawer.Screen name="Simulation" component={SimulationScreen} />
        <Drawer.Screen name="Equipment" component={EquipmentStack} options={{ headerShown: true}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
