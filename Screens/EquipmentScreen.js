import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image, Modal } from "react-native";
import Card from '../SharedComponents/card';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import AddEquipment from "./AddEquipment";


export default function EquipmentScreen({ navigation }) {
    
    const [visibleModal, setVisibleModal] = useState(false);
    //set equal to database
    const [balls, setBalls]  = useState([
        {
            name: 'Old Reliable',
            weight: '8 lbs',
            color: 'Red',
            coreType: 'Symmetric',
        },
        {
            name: 'Shiny',
            weight: '12 lbs',
            color: 'Blue',
            coreType: 'Asymmetric',
        },
        {
            name: 'Blank Spacey',
            weight: '14 lbs',
            color: 'White',
            coreType: 'Symmetric',
        },
    ]);

    const testPress = () => {
        setVisibleModal(true)
    }
    

    const addEquip = (equipment) => {
        equipment.key = Math.random().toString();
        setBalls((currentEquipmentSets) => {
            //update database and refresh
            return [equipment, ...currentEquipmentSets];
        });
        setVisibleModal(false);
    }

  return (
    <View style={ styles.container }>

        <Modal visible={visibleModal} animationType='slide' onSwipe={this.closeModal}>
            <View>
                <MaterialIcons
                name='close'
                size={24}
                style={styles.closeModal}
                onPress={() => setVisibleModal(false)}
                />
                <AddEquipment addEquip={addEquip} />
            </View>

        </Modal>


        <FlatList
            data={balls}
            renderItem={({ item }) => (
                
                <TouchableOpacity onPress={() => navigation.navigate('EquipmentDetails', {name: item.name, weight: item.weight, color: item.color, coreType: item.coreType, rG: item.rG, diff: item.diff, iDiff: item.iDiff, 
                 hdp: item.hdp, vdp: item.vdp, hdcg: item.hdcg, vdcg: item.vdcg})}>
                <Card>
                    <Text>{ item.name }</Text>
                </Card>
                </TouchableOpacity>
            )}
        />

        <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={testPress}
        >

                <Image
                style={styles.plusButton} 
                source={require('../Images/plusIcon.png')}
                />
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        position: 'absolute',
        width: 64,
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20
    },
    plusButton: {
        resizeMode: 'contain',
        width: 64,
        height: 64
    },
    closeModal: {
        marginTop: 20,
        marginBottom: 0
    }
});