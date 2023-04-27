import React, { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import { apiUrl } from "./common";

import AppContext from "../AppContext"
import axios from "axios";

export function SimulationScreen() {

  const [velocity, setVelocity] = useState("");
  const [rotation, setRotation] = useState("");
  const [position, setPosition] = useState("");

  const [initialVelocity, setInitialVelocity] = useState(velocity);
  const [initialRotation, setInitialRotation] = useState(rotation);
  const [finalVelocity, setFinalVelocity] = useState(velocity);
  const [finalRotation, setFinalRotation] = useState(rotation);

  function calculate() {

    setInitialVelocity(Number(velocity));
    setInitialRotation(Number(rotation));
    setFinalVelocity(Number(velocity) * 1.8);
    setFinalRotation(Number(rotation) * 1.3);
  }

  const isFocused = useIsFocused();
  useEffect(()=>{
    listBalls()
   }, [isFocused])

  const [selectedValue, setSelectedValue] = useState('');
  const [balls, setBalls]  = useState([]);

  const globalState = useContext(AppContext);

  const listBalls = () =>  {
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

  const renderBallList = () => {
    return balls.map((ball) => {
      return <Picker.Item label={ball.ballName} value={ball.ballName} key={ball.ballId} />
    })
  }

  return (
    <View>
      <ScrollView contentContainerStyle={{paddingBottom: 120}}>
      <View style={{flexDirection:"row"}}>
        <View style={styles.output}>
          <View style={styles.final}>
            <Text>Velocity: { finalVelocity } m/s</Text>
            <Text>Rotation: { finalRotation } rpm</Text>
          </View>
          < View style={styles.initial}>
            <Text>Velocity: { initialVelocity.toFixed(2) } m/s</Text>
            <Text>Rotation: { initialRotation.toFixed(2) } rpm</Text>
          </View>
        </View>
        <View style={{flex:1}}>
          <Image style={styles.image} source={require('../BowlingLane.png')} />
        </View>
      </View>
    <View style={styles.form}>
      <Text style={styles.title}>Enter Fields</Text>
      <View>
        <View style={styles.input}>
          <Text style={styles.text}>Initial Velocity</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Enter a Value'
            placeholderTextColor="#010203"
            keyboardType='numeric'
            value={velocity}
            onChangeText={(velocity) => setVelocity(velocity)}
            maxLength={5}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.text}>Initial Rotation</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Enter a Value'
            placeholderTextColor="#010203"
            keyboardType='numeric'
            value={rotation}
            onChangeText={(rotation) => setRotation(rotation)}
            maxLength={5}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.text}>Initial Position (Board L1-L20 or R1-R20)</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Enter a Value'
            placeholderTextColor="#010203"
            value={position}
            onChangeText={(position) => setPosition(position)}
            maxLength={3}
          />
        </View>
        <View>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedValue(itemValue);
            }}
          >
            {renderBallList()}
          </Picker>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={function(event){ calculate()}}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  button: {
    padding: 10,
    width: "80%",
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "#002387",
    marginLeft: 35,
    marginRight: 35
  },

  buttonText: {
    color: '#ffffff'
  },

  final: {
    marginTop: 25
  },

  form: {
    marginLeft: 50,
    marginRight: 50
  },

  image: {
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 10,
    width: 100,
    height: 400,
    marginTop: 20,
    marginBottom: 20,
  },

  initial: {
    marginTop: 320
  },

  input: {
    marginTop: 10,
  },

  output: {
    flex: 0.5,
    paddingLeft: 20
  },

  text: {
    fontWeight: 'bold'
  },

  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5
  },

  title: {
    fontWeight: 'bold',
    fontSize: '25px',
    textAlign: 'center'
  }
});