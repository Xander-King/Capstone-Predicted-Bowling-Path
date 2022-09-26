import * as React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

function LiveScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Live Screen</Text>
    </View>
  );
}

function SimulationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Simulation Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Live">
        <Drawer.Screen name="Live" component={LiveScreen} />
        <Drawer.Screen name="Simulation" component={SimulationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
