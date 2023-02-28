import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import SelectDropdown  from 'react-native-select-dropdown'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { LiveScreen } from './LiveScreen';

import axios from "axios";

import {apiUrl} from "./common";


//const apiUrl = "http://localhost:3000";
//const apiUrl = "http://bowling.capstone.csi.miamioh.edu:3000";

export function ForgotPassword() {
  const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const [sQuest, setSQuest] = useState("");
  const sQuestOpt = ["Mother's Maiden Name", "First Pet's Name", "Favorite Bowling Alley"]
  const navigation = useNavigation();
  const [passRes, setPassRes] = useState(0);
  const [passwordText, setPasswordText] = useState("");

  const doGetPassword = () =>  {
    const rsp = axios.post(apiUrl + "/getPassword", {email:email, sQuest:sQuest});
    
    rsp.then((r) => {
      setPasswordText(r.data.password);
      setPassRes(r.status);
      
    }).catch((err) => {
     //console.error("No such account exists.");
     console.error(err);
      setPassRes(err.response.status);
    });
    
    
  };
  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/bowling.jpeg")} />
 
      <StatusBar style="auto" />

    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Username."
          placeholderTextColor="#010203"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
  
      {/* <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Desired Password."
          placeholderTextColor="#010203"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
  </View> */}
<SelectDropdown

      	  data={sQuestOpt}
      	  onSelect={(selectedItem, index) => {
      		console.log(selectedItem, index)
      	}}
        defaultButtonText = "Security Question Options"
      	  buttonTextAfterSelection={(selectedItem, index) => {
      		// text represented after item is selected
      		// if data array is an array of objects then return selectedItem.property to render after item is selected
      		return selectedItem
      	}}
      	  rowTextForSelection={(item, index) => {
      		// text represented for each item in dropdown
      		// if data array is an array of objects then return item.property to represent item in dropdown
      		return item
      	}}

          buttonStyle={{width: "80%"}}
      />


      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Security Answer"
          placeholderTextColor="#010203"
          secureTextEntry={true}
          onChangeText={(sQuest) => setSQuest(sQuest)}
        />
      </View>

     {/* <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity> */}
    
      {/*<TouchableOpacity>
        <Text style={styles.make_account}>Make Account</Text>
  </TouchableOpacity> */}
 
      <TouchableOpacity style={styles.makeAcctBtn} onPress={doGetPassword}>
        <Text style={styles.makeAcctText}>Get Password</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.goBack}>Back</Text>
      </TouchableOpacity>

      <Text>{passwordText}</Text>
    </View>

    
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
    borderRadius: 40,
  },
 
  inputView: {
    backgroundColor: "#6082b6",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },

 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
 goBack: {
   height: 30,
   marginBottom: 30,
 },
 
  //make_account: {
   // height: 30,
   // marginBottom: 10,
  //  textDecorationLine: "underline",
 // },

  makeAcctBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#002387",
  },

  makeAcctText: {
    color: "#ffffff",
  },
});