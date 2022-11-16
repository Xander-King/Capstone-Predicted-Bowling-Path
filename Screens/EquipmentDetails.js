import React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import Card from '../SharedComponents/card';

export default function EquipmentDetails({ route, navigation }){
    const{ name, weight, color } = route.params;

    const editCard = () =>{
        alert('Test message while I wait for database edit stuff');
    }

    const deleteCard = () => {
        Alert.alert('Are you sure you want to delete this equipment set?', 'This action cannot be undone', [
            {text: 'Yes', onPress: () => console.log('yes was input')},
            {text: 'No', onPress: () => console.log('no was input')}
        ]
        );
    }


    return (
        <View style={styles.container}>
            <Card>
                <Text>name: { JSON.stringify(name) }</Text>
                <Text>weight in pounds: { JSON.stringify(weight) }</Text>
                <Text>color: { JSON.stringify(color) }</Text>
            </Card>
            <Button title='Edit Equipment Set' onPress={editCard} />
            <Button title='Delete Equipment Set' onPress={deleteCard} />
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