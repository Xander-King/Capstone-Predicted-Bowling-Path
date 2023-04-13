import { StyleSheet, View, Text, Button } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker'
import * as yup from 'yup';

const validationConditions = yup.object({
  name: yup.string().required().min(1),
  weight: yup.string().required().min(1),
  color: yup.string().required()
  .test('is-color-valid', 'You must select a valid color', (val) => {
    return val != '' && val != " ";
  } ),
  coreType: yup.string().required()
  .test('is-coreType-valid', 'You must select a valid core type', (val) => {
    return val != '' && val != " ";
  } ),
  rG: yup.string().required().min(1),
  diff: yup.string().required().min(1),
  iDiff: yup.string().required().min(1),
  hdp: yup.string().required().min(1),
  vdp: yup.string().required().min(1),
  hdcg: yup.string().required().min(1),
  vdcg: yup.string().required().min(1)
})

//comment for change


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
  const coreData = [
    {name:'Symmetric', id: 1 },
    {name:'Asymmetric', id: 2},
  ];



  return (
    <View>
    <ScrollView contentContainerStyle={{paddingBottom: 120}}>
    <Formik
      initialValues={{ name: '', weight: '', color: '', coreType: '', rG: '', diff: '', iDiff: '', hdp: '', vdp: '', hdcg: '', vdcg: ''}}
      validationSchema={validationConditions}
      onSubmit={(values) => {
        console.log(values.weight);
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

          {/*TextInput for rg variable, keyboardType brings up a number pad */}
          <TextInput 
            keyboardType='numeric'
            style={styles.input} 
            placeholder='Enter Radius Of Gyration'
            onChangeText={formikProps.handleChange('rG')}
            value={formikProps.values.rG}
            onBlur={formikProps.handleBlur('rG')}
          />
          <Text style = {styles.alertText}>{formikProps.touched.rG && formikProps.errors.rG}</Text>

          {/*TextInput for diff variable, keyboardType brings up a number pad */}
          <TextInput 
            keyboardType='numeric'
            style={styles.input} 
            placeholder='Enter Differential'
            onChangeText={formikProps.handleChange('diff')}
            value={formikProps.values.diff}
            onBlur={formikProps.handleBlur('diff')}
          />
          <Text style = {styles.alertText}>{formikProps.touched.diff && formikProps.errors.diff}</Text>

          {/*TextInput for diff variable, keyboardType brings up a number pad */}
          <TextInput 
            keyboardType='numeric'
            style={styles.input} 
            placeholder='Enter Intermediate Differential'
            onChangeText={formikProps.handleChange('iDiff')}
            value={formikProps.values.iDiff}
            onBlur={formikProps.handleBlur('iDiff')}
          />
          <Text style = {styles.alertText}>{formikProps.touched.iDiff && formikProps.errors.iDiff}</Text>


          {/*TextInput for hdp variable, keyboardType brings up a number pad */}
          <TextInput 
            keyboardType='numeric'
            style={styles.input} 
            placeholder='Enter Horizontal Distance To Pin'
            onChangeText={formikProps.handleChange('hdp')}
            value={formikProps.values.hdp}
            onBlur={formikProps.handleBlur('hdp')}
          />
          <Text style = {styles.alertText}>{formikProps.touched.hdp && formikProps.errors.hdp}</Text>


          {/*TextInput for vdp variable, keyboardType brings up a number pad */}
          <TextInput 
            keyboardType='numeric'
            style={styles.input} 
            placeholder='Enter Vertical Distance To Pin'
            onChangeText={formikProps.handleChange('vdp')}
            value={formikProps.values.vdp}
            onBlur={formikProps.handleBlur('vdp')}
          />
          <Text style = {styles.alertText}>{formikProps.touched.vdp && formikProps.errors.vdp}</Text>

          {/*TextInput for hdcg variable, keyboardType brings up a number pad */}
          <TextInput 
            keyboardType='numeric'
            style={styles.input} 
            placeholder='Enter Horizontal Distance To Center Of Gravity'
            onChangeText={formikProps.handleChange('hdcg')}
            value={formikProps.values.hdcg}
            onBlur={formikProps.handleBlur('hdcg')}
          />
          <Text style = {styles.alertText}>{formikProps.touched.hdcg && formikProps.errors.hdcg}</Text>

          {/*TextInput for vdcg variable, keyboardType brings up a number pad */}
          <TextInput 
            keyboardType='numeric'
            style={styles.input} 
            placeholder='Enter Vertical Distance To Center Of Gravity'
            onChangeText={formikProps.handleChange('vdcg')}
            value={formikProps.values.vdcg}
            onBlur={formikProps.handleBlur('vdcg')}
          />
          <Text style = {styles.alertText}>{formikProps.touched.vdcg && formikProps.errors.vdcg}</Text>

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
          
          {/*Core type: 2 options: Symmetric or Asymmetric
           Radius of Gyration(RG) Inches
           Differential(Diff) Inches
           Intermediate differential(I.Diff) Inches*/}
          <View style={ styles.pickerStyle}>


          <Picker
              
              enabled={true}
              mode="dropdown"
              placeholder="Select Core Type"
              value=''
              onBlur={formikProps.handleBlur('coreType')}
              onValueChange={formikProps.handleChange('coreType')}
              selectedValue={formikProps.values.coreType}
              >
              <Picker.Item label="Select Core Type" value=" " />
              {coreData.map((item) => {
                return (
                <Picker.Item
                label={item.name.toString() }
                value={item.name.toString() }
                key={item.id.toString()} />
                )
              })}
          </Picker>

          </View>
          <Text style = {styles.alertText}>{formikProps.touched.coreType && formikProps.errors.coreType}</Text>





          
          {/*will submit the form*/}
          <Button title='Create New Equipment Set' onPress={formikProps.handleSubmit} />
          
          
          </View>

        )}


      </Formik> 
      </ScrollView>    
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