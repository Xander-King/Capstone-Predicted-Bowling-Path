import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Card from '../SharedComponents/card';

export default function EquipmentDetails({ navigation }){
    return (
        <View style={styles.container}>
            <Card>
                <Text>{ navigation.getParam('name') }</Text>
                <Text>{ navigation.getParam('weight') }</Text>
                <Text>{ navigation.getParam('color') }</Text>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});