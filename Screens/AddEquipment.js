import { StyleSheet, View, Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-community/picker'
import * as yup from 'yup';

const validationConditions = yup.object({
  name: yup.string().required().min(1),
  weight: yup.string().required().min(1),
  color: yup.string().required()
  .test('is-color-valid', 'You must select a valid color', (val) => {
    return val != '' && val != " ";
  } )
})




export default function AddEquipment( {addEquip}) {

  const [color, setSelected] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [name, setName] = React.useState("");
  const colorData = [
    {name:'Red', id: 1 },
    {name:'Orange', id: 2},
    {name:'Yellow', id: 3},
    {name:'Green', id: 4},
    {name:'Blue', id: 5},
    {name:'Indigo', id: 6},
    {name:'Violet', id: 7},
  ];



  return (
    <View>
    <Formik
      initialValues={{ name: '', weight: '', color: ''}}
      validationSchema={validationConditions}
      onSubmit={(values) => {
        addEquip(values);
        

      }}
      >
        {(formikProps) => (
          <View>

          {/*TextInput for name variable */}
          <TextInput 
            style={styles.input} 
            placeholder='Enter Name'
            //updates name
            onChangeText={formikProps.handleChange('name')}
            value={formikProps.values.name}
            onBlur={formikProps.handleBlur('name')}
          />
          <Text style = {styles.alertText}>{formikProps.touched.name && formikProps.errors.name}</Text>

          {/*TextInput for weight variable, keyboardType brings up a number pad */}
          <TextInput 
            keyboardType='numeric'
            style={styles.input} 
            placeholder='Enter Weight'
            onChangeText={formikProps.handleChange('weight')}
            value={formikProps.values.weight}
            onBlur={formikProps.handleBlur('weight')}
          />
          <Text style = {styles.alertText}>{formikProps.touched.weight && formikProps.errors.weight}</Text>



          <View style={ styles.pickerStyle}>


          <Picker
              
              enabled={true}
              mode="dropdown"
              placeholder="Select Color"
              value=''
              onBlur={formikProps.handleBlur('color')}
              onValueChange={formikProps.handleChange('color')}
              selectedValue={formikProps.values.color}
              >
              <Picker.Item label="Select Color" value=" " />
              {colorData.map((item) => {
                return (
                <Picker.Item
                label={item.name.toString() }
                value={item.name.toString() }
                key={item.id.toString()} />
                )
              })}
          </Picker>

          </View>
          <Text style = {styles.alertText}>{formikProps.touched.color && formikProps.errors.color}</Text>
          
          
          {/*will submit the form*/}
          <Button title='Create New Equipment Set' onPress={formikProps.handleSubmit} />
          
          
          </View>

        )}


      </Formik>     
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#777',
        borderStyle: "solid",
        padding: 8,
        margin: 10,
    },
    pickerStyle: {
      borderWidth: 1,
      borderColor: '#777',
      margin: 10,
    },
    alertText: {
      color: 'red',
      textAlign: "center",
    }
  
})