import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image, Modal } from "react-native";
import Card from '../SharedComponents/card';
import React, { useContext, useState, useEffect } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import AddEquipment from "./AddEquipment";
import axios from "axios";
import AppContext from "../AppContext"
import {apiUrl} from "./common";
import { useIsFocused } from "@react-navigation/native";





export default function EquipmentScreen({ navigation }) {
    const isFocused = useIsFocused();
    //set equal to database
   useEffect(()=>{
    listBalls()
   }, [isFocused])

   const [visibleModal, setVisibleModal] = useState(false);
    const [balls, setBalls]  = useState([
        // {
        //     name: 'Old Reliable',
        //     weight: '8 lbs',
        //     color: 'Red',
        //     coreType: 'Symmetric',
        // },
        // {
        //     name: 'Shiny',
        //     weight: '12 lbs',
        //     color: 'Blue',
        //     coreType: 'Asymmetric',
        // },
        // {
        //     name: 'Blank Spacey',
        //     weight: '14 lbs',
        //     color: 'White',
        //     coreType: 'Symmetric',
        // },
    ]);


    const addPress = () => {
        setVisibleModal(true)
    }

    const globalState = useContext(AppContext);

    const listBalls = () =>  {
        //setSubmitted(true);
        // if(email == "" || password == "" || sQuest == "") {
        //   console.error("Must fill in all fields");
        // } else {
        const userId = globalState.userInfoValue;
        console.log(userId)
        const rsp = axios.post(apiUrl + "/getUserBalls", {userId:userId});
        
        rsp.then((r) => {
          console.log(r.data);
          setBalls(r.data);
        }).catch((err) => {
         
            console.error(`Server Error: ${err.message}`);
          
         
        });
        
      
      };

      const addEquip = (equipment) => {
        equipment.key = Math.random().toString();
        setBalls((currentEquipmentSets) => {
            //update database and refresh
            //NEED TO MAKE SURE THESE VARIABLES CAN BE ACCESSED FROM THE EQUIPMENT
            //below is added code
            
            const userId = globalState.userInfoValue;
            const rsp = axios.post(apiUrl + "/addBall", {
                userId: userId, manufacturer: null, year: null, ballName: currentEquipmentSets.ballName, ballColor: currentEquipmentSets.color, ballWeight: currentEquipmentSets.weight, coreName: null, coreType: currentEquipmentSets.coreType,
                coreRG: currentEquipmentSets.rG, coreDifferential: currentEquipmentSets.diff, coreIDiff: currentEquipmentSets.iDiff, coverName: null, coverFinish: null, horizDistToPin: currentEquipmentSets.hdp, vertDistToPin: currentEquipmentSets.vdp, horizDistToCG: currentEquipmentSets.hdcg, vertDistToCG: currentEquipmentSets.vdcg,
                horizDistToMB: null, vertDistToMB: null
            });

            rsp.then((r) => {
                navigation.goBack();
            }).catch((err) => {
          
                    console.error(`Server Error: ${err.message}`);
          

            });

            //above is added code


            return [equipment, ...currentEquipmentSets];
        });
        setVisibleModal(false);

      }


      //listBalls()

  return (
    <View style={ styles.container }>

        { <Modal visible={visibleModal} animationType='slide' onSwipe={this.closeModal}>
            <View>
                <MaterialIcons
                name='close'
                size={24}
                style={styles.closeModal}
                //onPress={() => navigation.navigate('EquipmentDetails', {name: item.name, weight: item.weight, color: item.color, coreType: item.coreType, rG: item.rG, diff: item.diff, iDiff: item.iDiff, 
                   // hdp: item.hdp, vdp: item.vdp, hdcg: item.hdcg, vdcg: item.vdcg})}
                    //I CHANGED THIS FOR THE MODAL AND SUCH WHEN TRYING TO FIX ADD
                onPress={() => setVisibleModal(false)}   
                />
                <AddEquipment addEquip={addEquip} />
            </View>

        </Modal> }


        <FlatList
            data={balls}
            renderItem={({ item }) => (
                
                <TouchableOpacity onPress={() => navigation.navigate('EquipmentDetails', {ballId: item.ballId, name: item.ballName, weight: item.ballWeight, color: item.ballColor, coreType: item.coreType, rG: item.coreRG, diff: item.coreDifferential, iDiff: item.coreIDiff, 
                 hdp: item.horizDistToPin, vdp: item.vertDistToPin, hdcg: item.horizDistToCG, vdcg: item.vertDistToCG})}>
                <Card>
                    <Text>{ item.ballName }</Text>
                </Card>
                </TouchableOpacity>
            )}
        />

        <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={addPress}
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