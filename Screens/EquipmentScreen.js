import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import Card from '../SharedComponents/card';
import React, { useState } from 'react';


export default function EquipmentScreen({ navigation }) {
    const [balls, setBalls]  = useState([
        {
            name: 'Old Reliable',
            weight: '8 lbs',
            color: 'Red',
        },
        {
            name: 'Shiny',
            weight: '12 lbs',
            color: 'Blue',
        },
        {
            name: 'Blank Space',
            weight: '14 lbs',
            color: 'White',
        },
    ]);

  return (
    <View style={ styles.container }>
        <FlatList
            data={balls}
            renderItem={({ item }) => (
                //NAVIGATION DOES NOT CURRENTLY WORK, to be able to navigate between the two, equipment screen and Equipment Details need to be in a stack navigator
                <TouchableOpacity onPress={() => navigation.navigate('EquipmentDetails', item)}>
                <Card>
                    <Text>{ item.name }</Text>
                </Card>
                </TouchableOpacity>
            )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});