import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Stats from "../screens/stats";
import Header from '../shared/header';
import React from 'react';

const screens = {
    Statistics: {
        screen: Stats,
        navigationOptions: ({ navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Statistics' />,
            }
        }
    }

}

const StatStack = createStackNavigator(screens);

export default createAppContainer(StatStack);