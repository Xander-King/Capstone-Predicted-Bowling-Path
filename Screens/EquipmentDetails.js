import { StyleSheet, View, Text, Button, Alert, TextInput, ScrollView, FlatList, SafeAreaView } from 'react-native';
import Card from '../SharedComponents/card';
import AppContext from "../AppContext"
import axios from "axios";
import { apiUrl } from "./common";
import React, { useContext, useState } from "react";



export default function EquipmentDetails({ route, navigation }) {
  // const{ name, weight, color, coreType, rG, diff, iDiff, hdp, vdp, hdcg, vdcg } = route.params;

  const p = route.params || {};
  console.log(p)
  const [ballId, setBallId] = useState(p.ballId)
  const [name, setName] = useState(p.name);
  const [weight, setWeight] = useState(p.weight?.toString());
  const [color, setColor] = useState(p.color);
  const [coreType, setCoreType] = useState(p.coreType);
  const [rG, setRG] = useState(p.rG?.toString());
  const [diff, setDiff] = useState(p.diff?.toString());
  const [iDiff, setIDiff] = useState(p.iDiff?.toString());
  const [hdp, setHdp] = useState(p.hdp?.toString());
  const [vdp, setVdp] = useState(p.vdp?.toString());
  const [hdcg, setHdcg] = useState(p.hdcg?.toString());
  const [vdcg, setVdcg] = useState(p.vdcg?.toString());



  const params = route.params;
  const globalState = useContext(AppContext);
  const globalState2 = useContext(AppContext);



  const addBall = () => {
    //setSubmitted(true);
    if (name == "" || weight == "" || color == "" || coreType == "" || rG == ""
      || diff == "" || iDiff == "" || hdp == "" || vdp == "" || hdcg == "" || vdcg == "") {
      console.error("Must fill in all fields");
    } else {
      const userId = globalState.userInfoValue;
      const rsp = axios.post(apiUrl + "/addBall", {
        userId: userId, manufacturer: null, year: null, ballName: name, ballColor: color, ballWeight: weight, coreName: null, coreType: coreType,
        coreRG: rG, coreDifferential: diff, coreIDiff: iDiff, coverName: null, coverFinish: null, horizDistToPin: hdp, vertDistToPin: vdp, horizDistToCG: hdcg, vertDistToCG: vdcg,
        horizDistToMB: null, vertDistToMB: null
      });

      rsp.then((r) => {
        navigation.goBack();
      }).catch((err) => {
          
            console.error(`Server Error: ${err.message}`);
          

      });

    }
  };

  const editBall = () => {
    //setSubmitted(true);
    if (name == "" || weight == "" || color == "" || coreType == "" || rG == ""
      || diff == "" || iDiff == "" || hdp == "" || vdp == "" || hdcg == "" || vdcg == "") {
      console.error("Must fill in all fields");
    } else {
      const rsp = axios.post(apiUrl + "/editBall", {
        ballId: ballId, manufacturer: null, year: null, ballName: name, ballColor: color, ballWeight: weight, coreName: null, coreType: coreType,
        coreRG: rG, coreDifferential: diff, coreIDiff: iDiff, coverName: null, coverFinish: null, horizDistToPin: hdp, vertDistToPin: vdp, horizDistToCG: hdcg, vertDistToCG: vdcg,
        horizDistToMB: null, vertDistToMB: null
      });

      rsp.then((r) => {
        navigation.goBack();
      }).catch((err) => {
          
            console.error(`Server Error: ${err.message}`);
          

      });

    }
  };


  const deleteBall = () => {
    Alert.alert('Are you sure you want to delete this ball?', 'This action cannot be undone', [
      { text: 'Yes', onPress: () => {
        const rsp = axios.post(apiUrl + "/deleteBall", {
         ballId: ballId
        });
        rsp.then((r) => {
          console.log(r.data)
          navigation.goBack();
        }).catch((err) => {
            
              console.error(`Server Error: ${err.message}`);
            
  
        });
      } },
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
            value = {name}
            style={styles.TextInput}
            onChangeText={(name) => setName(name)}
          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Weight In Pounds</Text>
          <TextInput
          value = {weight}
            style={styles.TextInput}
            onChangeText={(weight) => setWeight(weight)}

          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Color</Text>
          <TextInput
          value = {color}
            style={styles.TextInput}
            onChangeText={(color) => setColor(color)}

          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Core Type</Text>
          <TextInput
          value = {coreType}
            style={styles.TextInput}
            onChangeText={(coreType) => setCoreType(coreType)}

          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Radius of Gyration in Inches</Text>
          <TextInput
          value = {rG}
            style={styles.TextInput}
            onChangeText={(rG) => setRG(rG)}

          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Differential in Inches</Text>
          <TextInput
          value = {diff}
            style={styles.TextInput}
            onChangeText={(diff) => setDiff(diff)}

          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Intermediate Differential in Inches</Text>
          <TextInput
          value = {iDiff}
            style={styles.TextInput}
            onChangeText={(iDiff) => setIDiff(iDiff)}

          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Horizontal Distance to Pin in Inches</Text>
          <TextInput
          value = {hdp}
            style={styles.TextInput}
            onChangeText={(hdp) => setHdp(hdp)}
          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Vertical Distance to Pin in Inches</Text>
          <TextInput
          value = {vdp}
            style={styles.TextInput}
            onChangeText={(vdp) => setVdp(vdp)}
          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Horizontal Distance to Center of Gravity in Inches</Text>
          <TextInput
          value = {hdcg}
            style={styles.TextInput}
            onChangeText={(hdcg) => setHdcg(hdcg)}
          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Vertical Distance to Center of Gravity in Inches</Text>
          <TextInput
          value = {vdcg}
            style={styles.TextInput}
            onChangeText={(vdcg) => setVdcg(vdcg)}
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

        {/* <Button title='Edit Equipment Set' onPress={editCard} /> */}
        <Button title='Delete Ball' onPress={deleteBall} />
        <Button title='Add Ball' onPress={addBall} />
        <Button title='Edit Ball' onPress={editBall}/>
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
    borderColor: '#6082b6',
    borderWidth: 1,
    marginRight: 20,
    marginBottom: 20
  },

  safeView: {
    flex: 1
  },

  inputView: {
    // backgroundColor: "#6082b6",
    // borderRadius: 30,
    // width: "70%",
    // height: 45,
    // marginBottom: 20,
    // alignItems: "center",
    flex: 1
  },

  label: {
    fontSize: 'x-small',
    alignItems: 'center',
    marginLeft: 10

  },
});