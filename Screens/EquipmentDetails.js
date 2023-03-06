import { StyleSheet, View, Text, Button, Alert, TextInput, ScrollView, FlatList, SafeAreaView } from 'react-native';
import Card from '../SharedComponents/card';
import AppContext from "../AppContext"
import axios from "axios";
import { apiUrl } from "./common";
import React, { useContext, useState } from "react";



export default function EquipmentDetails({ route, navigation }) {
  // const{ name, weight, color, coreType, rG, diff, iDiff, hdp, vdp, hdcg, vdcg } = route.params;
  const params = route.params;
  const globalState = useContext(AppContext);


  const addBall = () => {
    setSubmitted(true);
    // if(email == "" || password == "" || sQuest == "") {
    //   console.error("Must fill in all fields");
    // } else {
    const userId = globalState.userInfoValue;
    const rsp = axios.post(apiUrl + "/addBall", {
      userId: userId, manufacturer: null, year: null, ballName: name, ballColor: color, ballWeight: weight, coreName: null, coreType: coreType,
      coreRG: rG, coreDifferential: diff, coreIDiff: iDiff, coverName: null, coverFinish: null, horizDistToPin: hdp, vertDistToPin: vdp, horizDistToCG: hdcg, vertDistToCG: vdcg,
      horizDistToMB: null, vertDistToMB: null
    });

    rsp.then((r) => {
      setAddUserRes(r.status);
      navigation.goBack();
    }).catch((err) => {
      if (err.response)
        if (err.response != undefined && err.response.status == 429) {
          console.error("Account Already Exists");
        } else {
          console.error(`Server Error: ${err.message}`);
        }

      setAddUserRes(err.response.status);
    });


  };


  const editCard = () => {
    alert('Test message while I wait for database edit stuff');
  }

  const deleteCard = () => {
    Alert.alert('Are you sure you want to delete this equipment set?', 'This action cannot be undone', [
      { text: 'Yes', onPress: () => console.log('yes was input') },
      { text: 'No', onPress: () => console.log('no was input') }
    ]
    );
  }


  return (
    <SafeAreaView style={styles.safeView}>
    <ScrollView>

        <View style={styles.inputView}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.TextInput}
          />
        </View>

        <View style={styles.inputView}>
          <Text>Weight In Pounds</Text>
          <TextInput
            style={styles.TextInput}
          />
        </View>

        <View style={styles.inputView}>
          <Text>Color</Text>
          <TextInput
            style={styles.TextInput}
          />
        </View>

        <View style={styles.inputView}>
          <Text>Core Type</Text>
          <TextInput
            style={styles.TextInput}
          />
        </View>

        <View style={styles.inputView}>
          <Text>Radius of Gyration in Inches</Text>
          <TextInput
            style={styles.TextInput}
          />
        </View>

        <View style={styles.inputView}>
          <Text>Differential in Inches</Text>
          <TextInput
            style={styles.TextInput}
          />
        </View>

        <View style={styles.inputView}>
          <Text>Intermediate Differential in Inches</Text>
          <TextInput
            style={styles.TextInput}
          />
        </View>

        <View style={styles.inputView}>
          <Text>Horizontal Distance to Pin in Inches</Text>
          <TextInput
            style={styles.TextInput}
          />
        </View>

        <View style={styles.inputView}>
          <Text>Vertical Distance to Pin in Inches</Text>
          <TextInput
            style={styles.TextInput}
          />
        </View>

        <View style={styles.inputView}>
          <Text>Horizontal Distance to Center of Gravity in Inches</Text>
          <TextInput
            style={styles.TextInput}
          />
        </View>

        <View style={styles.inputView}>
          <Text>Vertical Distance to Center of Gravity in Inches</Text>
          <TextInput
            style={styles.TextInput}
            />
        </View>
        {/* <TextInput>Name: { JSON.stringify(name) }</TextInput>
                <TextInput>Weight In Pounds: { JSON.stringify(weight) }</TextInput>
                <Text>Color: { JSON.stringify(color) }</Text>
                <Text>Core Type: { JSON.stringify(coreType) }</Text>
                <Text>Radius Of Gyration In Inches: {JSON.stringify(rG) } </Text>
                <Text>Differential In Inches: { JSON.stringify(diff) } </Text>
                <Text>Intermediate Differential In Inches: { JSON.stringify(iDiff) } </Text>
                <Text>Horizontal Distance To Pin In Inches: { JSON.stringify(hdp) }</Text>
                <Text>Vertical Distance to Pin In Inches: {JSON.stringify(vdp) }</Text>
                <Text>Horizontal Distance To Center Of Gravity In Inches: { JSON.stringify(hdcg) }</Text>
                <Text>Vertical Distance to Center Of Gravity In Inches: {JSON.stringify(vdcg) }</Text> */}
     
      <Button title='Edit Equipment Set' onPress={editCard} />
      <Button title='Delete Equipment Set' onPress={deleteCard} />
      <Button title='Add Ball' onPress={addBall}></Button>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  safeView: {
    flex: 1
  },

  inputView: {
    backgroundColor: "#6082b6",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  label: {
    fontSize: 'x-small',
    alignItems: 'center',

  },
});