import React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import Card from '../SharedComponents/card';
import AppContext from "../AppContext"
import axios from "axios";
import {apiUrl} from "./common";

export default function EquipmentDetails({ route, navigation }){
    const{ name, weight, color, coreType, rG, diff, iDiff, hdp, vdp, hdcg, vdcg } = route.params;

    const addBall = () =>  {
        setSubmitted(true);
        // if(email == "" || password == "" || sQuest == "") {
        //   console.error("Must fill in all fields");
        // } else {
        
        const rsp = axios.post(apiUrl + "/addBall", {email:email, password:password, secQuest:sQuest});
        
        rsp.then((r) => {
          setAddUserRes(r.status);
          navigation.goBack();
        }).catch((err) => {
          if(err.response)
          if(err.response != undefined && err.response.status == 429) {
            console.error("Account Already Exists");
          } else {
            console.error(`Server Error: ${err.message}`);
          }
         
          setAddUserRes(err.response.status);
        });
        
      
      };


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
                <Text>Name: { JSON.stringify(name) }</Text>
                <Text>Weight In Pounds: { JSON.stringify(weight) }</Text>
                <Text>Color: { JSON.stringify(color) }</Text>
                <Text>Core Type: { JSON.stringify(coreType) }</Text>
                <Text>Radius Of Gyration In Inches: {JSON.stringify(rG) } </Text>
                <Text>Differential In Inches: { JSON.stringify(diff) } </Text>
                <Text>Intermediate Differential In Inches: { JSON.stringify(iDiff) } </Text>
                <Text>Horizontal Distance To Pin In Inches: { JSON.stringify(hdp) }</Text>
                <Text>Vertical Distance to Pin In Inches: {JSON.stringify(vdp) }</Text>
                <Text>Horizontal Distance To Center Of Gravity In Inches: { JSON.stringify(hdcg) }</Text>
                <Text>Vertical Distance to Center Of Gravity In Inches: {JSON.stringify(vdcg) }</Text>
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