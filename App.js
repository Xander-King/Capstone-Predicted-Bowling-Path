import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// Screen Imports
import { LiveScreen } from "./Screens/LiveScreen";
import { SimulationScreen } from "./Screens/SimulationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { MakeAccount } from "./Screens/MakeAccount";
import { ForgotPassword } from "./Screens/ForgotPassword";


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="LoginScreen">
        <Drawer.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Drawer.Screen name="LiveScreen" component={LiveScreen} />
        <Drawer.Screen name="Simulation" component={SimulationScreen} />
        <Drawer.Screen name="MakeAccount" component={MakeAccount} options={{headerShown:false}}/>
        <Drawer.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown:false}}/>
      </Drawer.Navigator>

    </NavigationContainer>
  );
}
