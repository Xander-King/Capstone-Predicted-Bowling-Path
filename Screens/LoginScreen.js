import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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

//import { createStackNavigator } from "@react-navigation/stack";

import { MakeAccount } from "./MakeAccount";
import { ForgotPassword } from "./ForgotPassword";
import { LiveScreen } from "./LiveScreen";

import axios from "axios";

const apiUrl = "http://localhost:3000";
//const stack = createStackNavigator();



export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginRes, setLoginRes] = useState(0);
  const navigation = useNavigation();
  const doLogin = () =>  {
    const rsp = axios.post(apiUrl + "/login", {email:email, password:password});
    
    rsp.then((r) => {
      
      setLoginRes(r.status);
      navigation.navigate(LiveScreen);
    }).catch((err) => {
     console.error("Access Denied")
      setLoginRes(err.response.status);
    });
    
    //console.log(rsp);
    
  };
  
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/bowling.jpeg")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username."
          placeholderTextColor="#010203"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#010203"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity onPress={() => navigation.navigate(ForgotPassword)}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
    
      <TouchableOpacity onPress={() => navigation.navigate(MakeAccount)}>
        <Text style={styles.make_account}>Make Account</Text>
      </TouchableOpacity>
 
      <TouchableOpacity onPress={doLogin}
      style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <Text>{loginRes}</Text>
 
  {/* <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <stack.Screen name="MakeAccount" component={MakeAccount} />
    </stack.Navigator>
  </NavigationContainer> */}
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
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  make_account: {
    height: 30,
    marginBottom: 10,
    textDecorationLine: "underline",
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#002387",
  },

  loginText: {
    color: "#ffffff",
  },
});