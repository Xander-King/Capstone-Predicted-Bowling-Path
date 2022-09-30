import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Live from "../screens/live";
import Header from '../shared/header';
import React from 'react';

const screens = {
    Live: {
        screen: Live,
        navigationOptions: ({ navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Live'/>,
            }
        }
    }

}

const LStack = createStackNavigator(screens);

export default createAppContainer(LStack);