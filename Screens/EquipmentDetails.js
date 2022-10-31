import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Card from '../SharedComponents/card';

export default function EquipmentDetails({ route, navigation }){
    const{ name, weight, color } = route.params;
    return (
        <View style={styles.container}>
            <Card>
                <Text>name: { JSON.stringify(name) }</Text>
                <Text>weight in pounds: { JSON.stringify(weight) }</Text>
                <Text>color: { JSON.stringify(color) }</Text>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        
    },
});