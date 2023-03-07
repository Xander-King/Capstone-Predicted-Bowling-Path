import React, { useContext, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Screen Imports
import { LiveScreen } from "./Screens/LiveScreen";
import { SimulationScreen } from "./Screens/SimulationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { MakeAccount } from "./Screens/MakeAccount";
import { ForgotPassword } from "./Screens/ForgotPassword";
import AppContext from "./AppContext"
import  EquipmentScreen  from "./Screens/EquipmentScreen";
import  EquipmentDetails  from "./Screens/EquipmentDetails";
import { State } from "react-native-gesture-handler";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function EquipmentStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Equip" component={EquipmentScreen} options={{ headerShown: false}} />
    <Stack.Screen name="EquipmentDetails" component={EquipmentDetails} options={{ title: ' '}}/>
    
    </Stack.Navigator>
  );
}



export default function App() {
  const[userInfoValue, setUserInfoValue] = useState(-1);
  const globalState = {
    userInfoValue: userInfoValue,
    setUserInfoValue
  }
  return (
    <AppContext.Provider value={globalState}>
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="LoginScreen"> 
        <Drawer.Screen name="Login" component={LoginScreen} 
        options={{headerShown:false, drawerLabel: () => null, title: null, drawerIcon: () => null}} /> 
        <Drawer.Screen name="LiveScreen" component={LiveScreen} />
        <Drawer.Screen name="Simulation" component={SimulationScreen} />
        <Drawer.Screen name="Equipment" component={EquipmentStack} options={{ headerShown: true}} />
        <Drawer.Screen name="MakeAccount" component={MakeAccount} 
        options={{headerShown:false, drawerLabel: () => null, title: null, drawerIcon: () => null}}/>
        <Drawer.Screen name="ForgotPassword" component={ForgotPassword} 
        options={{headerShown:false, drawerLabel: () => null, title: null, drawerIcon: () => null}}/>
      </Drawer.Navigator>

    </NavigationContainer>
    </AppContext.Provider>
  );
}
