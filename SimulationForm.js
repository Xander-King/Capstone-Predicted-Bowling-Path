import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const SimulationForm = () => {

  const [velocity, setVelocity] = useState("");
  const [rotation, setRotation] = useState("");
  const [position, setPosition] = useState("");

  const [initialVelocity, setInitialVelocity] = useState(velocity);
  const [initialRotation, setInitialRotation] = useState(rotation);
  const [middleVelocity, setMiddleVelocity] = useState(velocity);
  const [middleRotation, setMiddleRotation] = useState(rotation);
  const [finalVelocity, setFinalVelocity] = useState(velocity);
  const [finalRotation, setFinalRotation] = useState(rotation);

  function calcInitialVelocity() {
    setInitialVelocity(Number(velocity));
  }

  function calcInitialRotation() {
    setInitialRotation(Number(rotation));
  }

  function calcMiddleVelocity() {
    setMiddleVelocity(Number(velocity) * 1.2);
  }

  function calcMiddleRotation() {
    setMiddleRotation(Number(rotation) * 1.2);
  }

  function calcFinalVelocity() {
    setFinalVelocity(Number(velocity) * 1.5);
  }

  function calcFinalRotation() {
    setFinalRotation(Number(rotation) * 1.5);
  }

  function calculate() {
    calcInitialVelocity();
    calcInitialRotation();

    calcMiddleVelocity();
    calcMiddleRotation();

    calcFinalVelocity();
    calcFinalRotation();
  }

  return (
    <View>
      <View style={{flexDirection:"row"}}>
        <View style={styles.output}>
          <View style={styles.final}>
            <Text>Velocity: { finalVelocity } m/s</Text>
            <Text>Rotation: { finalRotation } rpm</Text>
          </View>
          <View style={styles.middle}>
            <Text>Velocity: { middleVelocity } m/s</Text>
            <Text>Rotation: { middleRotation } rpm</Text>
          </View>
          < View style={styles.initial}>
            <Text>Velocity: { initialVelocity } m/s</Text>
            <Text>Rotation: { initialRotation } rpm</Text>
          </View>
        </View>
        <View style={{flex:1}}>
          <Image style={styles.image} source={require('./BowlingLane.png')} />
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
        <TouchableOpacity
          style={styles.button}
          onPress={function(event){ calculate()}}
          >
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
    );
  }
  export default SimulationForm;

  const styles = StyleSheet.create({

    button: {
      padding: 10,
      marginTop: 25,
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
      marginTop: 20
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
      marginTop: 150
    },

    input: {
      marginTop: 10,
    },

    middle: {
      marginTop: 150
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