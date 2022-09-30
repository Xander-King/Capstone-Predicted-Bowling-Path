import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Equipment from "../screens/equipment";
import Header from '../shared/header';
import React from 'react';

const screens = {
    Equipment: {
        screen: Equipment,
        navigationOptions: ({ navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Equipment' />,
            }
        }
    }
}

const EquipStack = createStackNavigator(screens);

export default createAppContainer(EquipStack);
