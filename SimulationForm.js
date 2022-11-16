import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';

const SimulationForm = () => {

  const [velo, setVelo] = React.useState();
  const [xVelo, setXVelo] = React.useState();
  const [yVelo, setYVelo] = React.useState();
  const [zVelo, setZVelo] = React.useState();
  const [xRot, setXRot] = React.useState();
  const [yRot, setYRot] = React.useState();
  const [zRot, setZRot] = React.useState();

  return (
    <View>
        <Text style={styles.text}>Enter Velocity:</Text>
        <TextInput
          style={styles.textfield}
          placeholder="Enter a Value"
          onChangeText={velo => setVelo(velo)}
          value={velo}
        />
        <Text style={styles.text}>Enter X Velocity:</Text>
        <TextInput
          style={styles.textfield}
          placeholder="Enter a Value"
          onChangeText={xVelo => setXVelo(xVelo)}
          value={xVelo}
        />
        <Text style={styles.text}>Enter Y Velocity:</Text>
        <TextInput
          style={styles.textfield}
          placeholder="Enter a Value"
          onChangeText={yVelo => setYVelo(yVelo)}
          value={yVelo}
        />
        <Text style={styles.text}>Enter Z Velocity:</Text>
        <TextInput
          style={styles.textfield}
          placeholder="Enter a Value"
          onChangeText={zVelo => setZVelo(zVelo)}
          value={zVelo}
        />
        <Text style={styles.text}>Enter X Rotation:</Text>
        <TextInput
          style={styles.textfield}
          placeholder="Enter a Value"
          onChangeText={xRot => setXRot(xRot)}
          value={xRot}
        />
        <Text style={styles.text}>Enter Y Rotation:</Text>
        <TextInput
          style={styles.textfield}
          placeholder="Enter a Value"
          onChangeText={yRot => setYRot(yRot)}
          value={yRot}
        />
        <Text style={styles.text}>Enter Z Rotation:</Text>
        <TextInput
          style={styles.textfield}
          placeholder="Enter a Value"
          onChangeText={zRot => setZRot(zRot)}
          value={zRot}
        />
        <Button
          onPress={() => Alert.alert('Submitted')}
          title='Calculate'
        />
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    textfield: {
      height: 20, 
      borderColor: 'black', 
      borderWidth: 1, 
      marginLeft: 30,
      marginRight: 30,
      marginBottom: 5
    },
    text: {
      fontWeight: "bold",
      marginLeft: 30,
      marginRight: 30
    }
  });
  
  export default SimulationForm