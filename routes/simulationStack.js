import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Simulation from "../screens/simulation";
import Header from '../shared/header';
import React from 'react';

const screens = {
    Simulation: {
        screen: Simulation,
        navigationOptions: ({ navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Simulation'/>,
            }
        }
    }

}

const SimuStack = createStackNavigator(screens);

export default createAppContainer(SimuStack);