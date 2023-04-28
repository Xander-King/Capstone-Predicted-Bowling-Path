import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Screen Imports
import { LiveScreen } from "./Screens/LiveScreen";
import { SimulationScreen } from "./Screens/SimulationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { MakeAccount } from "./Screens/MakeAccount";
import { ForgotPassword } from "./Screens/ForgotPassword";

import EquipmentScreen from "./Screens/EquipmentScreen";
import EquipmentDetails from "./Screens/EquipmentDetails";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function EquipmentStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Equip"
        component={EquipmentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EquipmentDetails"
        component={EquipmentDetails}
        options={{ title: " " }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="LoginScreen">
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
            drawerLabel: () => null,
            title: null,
            drawerIcon: () => null,
          }}
        />
        <Drawer.Screen name="Shot History" component={LiveScreen} />
        <Drawer.Screen name="Simulation" component={SimulationScreen} />
        <Drawer.Screen
          name="Equipment"
          component={EquipmentStack}
          options={{ headerShown: true }}
        />
        <Drawer.Screen
          name="MakeAccount"
          component={MakeAccount}
          options={{
            headerShown: false,
            drawerLabel: () => null,
            title: null,
            drawerIcon: () => null,
          }}
        />
        <Drawer.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
            drawerLabel: () => null,
            title: null,
            drawerIcon: () => null,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
