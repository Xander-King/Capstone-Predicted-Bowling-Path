import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { Card } from "react-native-elements";

export function LiveScreen() {
  const [accData, setAccData] = useState(null);
  const [gyroData, setGyroData] = useState(null);
  const [maxAccValues, setAccMaxValues] = useState({
    x1: null,
    y1: null,
    z1: null,
    x2: null,
    y2: null,
    z2: null,
    x3: null,
    y3: null,
    z3: null,
  });
  const [maxGyroValues, setGyroMaxValues] = useState({
    x1: null,
    y1: null,
    z1: null,
    x2: null,
    y2: null,
    z2: null,
    x3: null,
    y3: null,
    z3: null,
  });

  async function handleDocumentSelectionAcc() {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "text/csv",
      });

      if (result.type === "success") {
        const fileContent = await FileSystem.readAsStringAsync(result.uri);
        setAccData(fileContent);
        // Grab Max values and filter num of rows
        const rows = fileContent.trim().split("\n").slice(1);
        let x1Max = -10;
        let y1Max = -10;
        let z1Max = -10;
        // Shot 1 covering 10 seconds
        for (let i = 1; i < 1219; i++) {
          const row = rows[i].split(",");
          const x1 = parseFloat(row[3]);
          const y1 = parseFloat(row[4]);
          const z1 = parseFloat(row[5]);
          if (x1Max === null || x1 > x1Max) {
            x1Max = x1;
          }
          if (y1Max === null || y1 > y1Max) {
            y1Max = y1;
          }
          if (z1Max === null || z1 > z1Max) {
            z1Max = z1;
          }
        }
        // Shot 2, next 10 seconds
        for (let i = 1219; i < 2438; i++) {
          const row = rows[i].split(",");
          const x2 = parseFloat(row[3]);
          const y2 = parseFloat(row[4]);
          const z2 = parseFloat(row[5]);
          if (x1Max === null || x2 > x1Max) {
            x2Max = x2;
          }
          if (y1Max === null || y2 > y1Max) {
            y2Max = y2;
          }
          if (z1Max === null || z2 > z1Max) {
            z2Max = z2;
          }
        }
        // Shot 3, next 10 seconds
        for (let i = 2438; i < 3740 - 1; i++) {
          const row = rows[i].split(",");
          const x3 = parseFloat(row[3]);
          const y3 = parseFloat(row[4]);
          const z3 = parseFloat(row[5]);
          if (x1Max === null || x3 > x1Max) {
            x3Max = x3;
          }
          if (y1Max === null || y3 > y1Max) {
            y3Max = y3;
          }
          if (z1Max === null || z3 > z1Max) {
            z3Max = z3;
          }
        }
        setAccMaxValues({
          x1: x1Max,
          y1: y1Max,
          z1: z1Max,
          x2: x2Max,
          y2: y2Max,
          z2: z2Max,
          x3: x2Max,
          y3: y2Max,
          z3: z2Max,
        });
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDocumentSelectionGyro() {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "text/csv",
      });

      if (result.type === "success") {
        const fileContent = await FileSystem.readAsStringAsync(result.uri);
        setGyroData(fileContent);
        // Grab Max values and filter num of rows
        const rows = fileContent.trim().split("\n").slice(1);
        let x1Max = -10;
        let y1Max = -10;
        let z1Max = -10;
        // Shot 1 covering 10 seconds
        for (let i = 1; i < 1219; i++) {
          const row = rows[i].split(",");
          const x1 = parseFloat(row[3]);
          const y1 = parseFloat(row[4]);
          const z1 = parseFloat(row[5]);
          if (x1Max === null || x1 > x1Max) {
            x1Max = x1;
          }
          if (y1Max === null || y1 > y1Max) {
            y1Max = y1;
          }
          if (z1Max === null || z1 > z1Max) {
            z1Max = z1;
          }
        }
        // Shot 2, next 10 seconds
        for (let i = 1219; i < 2438; i++) {
          const row = rows[i].split(",");
          const x2 = parseFloat(row[3]);
          const y2 = parseFloat(row[4]);
          const z2 = parseFloat(row[5]);
          if (x1Max === null || x2 > x1Max) {
            x2Max = x2;
          }
          if (y1Max === null || y2 > y1Max) {
            y2Max = y2;
          }
          if (z1Max === null || z2 > z1Max) {
            z2Max = z2;
          }
        }
        // Shot 3, next 10 seconds
        for (let i = 2438; i < 3747 - 1; i++) {
          const row = rows[i].split(",");
          const x3 = parseFloat(row[3]);
          const y3 = parseFloat(row[4]);
          const z3 = parseFloat(row[5]);
          if (x1Max === null || x3 > x1Max) {
            x3Max = x3;
          }
          if (y1Max === null || y3 > y1Max) {
            y3Max = y3;
          }
          if (z1Max === null || z3 > z1Max) {
            z3Max = z3;
          }
        }
        setGyroMaxValues({
          x1: x1Max,
          y1: y1Max,
          z1: z1Max,
          x2: x2Max,
          y2: y2Max,
          z2: z2Max,
          x3: x2Max,
          y3: y2Max,
          z3: z2Max,
        });
      }
    } catch (err) {
      console.error(err);
    }
  }

  function clearMaxValues() {
    setAccMaxValues({});
    setGyroMaxValues({});
  }

  // Combine csvData1 and csvData2 into a single array of rows, alternating between files
  const combineRows = () => {
    if (!accData || !gyroData) {
      return [];
    }
    const rows1 = accData.trim().split("\n").slice(1);
    const rows2 = gyroData.trim().split("\n").slice(1);
    const combinedRows = [];
    for (let i = 0; i < rows1.length && i < rows2.length; i++) {
      const values1 = rows1[i].split(",");
      const values2 = rows2[i].split(",");
      const combinedValues = [...values1, ...values2];
      combinedRows.push(combinedValues);
    }
    return combinedRows;
  };

  const combinedRows = combineRows();

  return (
    <>
      <View style={styles.ibutton}>
        <TouchableOpacity onPress={handleDocumentSelectionAcc}>
          <Text style={styles.button}>Import Accelerometer Data</Text>
        </TouchableOpacity>
        <Text />
        <TouchableOpacity onPress={handleDocumentSelectionGyro}>
          <Text style={styles.button}>Import Gyrometer Data</Text>
        </TouchableOpacity>
        <Text />
        <TouchableOpacity onPress={clearMaxValues}>
          <Text style={styles.cbutton}>Clear Data</Text>
        </TouchableOpacity>
      </View>

      {Object.keys(maxAccValues).length === 0 &&
      Object.keys(maxGyroValues).length === 0 ? (
        <View>
          <Text style={styles.importData}>Please import data</Text>
        </View>
      ) : (
        <ScrollView>
          <Card>
            <Card.Title>Shot 1</Card.Title>
            <Card.Divider />
            <Text>Accelerometer Data (g):</Text>
            <Text>x-axis: {maxAccValues.x1}</Text>
            <Text>y-axis: {maxAccValues.y1}</Text>
            <Text>z-axis: {maxAccValues.z1}</Text>
            <Text>Gyrometer Data (g):</Text>
            <Text>x-axis: {maxGyroValues.x1}</Text>
            <Text>y-axis: {maxGyroValues.y1}</Text>
            <Text>z-axis: {maxGyroValues.z1}</Text>
          </Card>

          <Card>
            <Card.Title>Shot 2</Card.Title>
            <Card.Divider />
            <Text>Accelerometer Data (g):</Text>
            <Text>x-axis: {maxAccValues.x2}</Text>
            <Text>y-axis: {maxAccValues.y2}</Text>
            <Text>z-axis: {maxAccValues.z2}</Text>
            <Text>Gyrometer Data (g):</Text>
            <Text>x-axis: {maxGyroValues.x2}</Text>
            <Text>y-axis: {maxGyroValues.y2}</Text>
            <Text>z-axis: {maxGyroValues.z2}</Text>
          </Card>

          <Card>
            <Card.Title>Shot 3</Card.Title>
            <Card.Divider />
            <Text>Accelerometer Data (g):</Text>
            <Text>x-axis: {maxAccValues.x3}</Text>
            <Text>y-axis: {maxAccValues.y3}</Text>
            <Text>z-axis: {maxAccValues.z3}</Text>
            <Text>Gyrometer Data (g):</Text>
            <Text>x-axis: {maxGyroValues.x3}</Text>
            <Text>y-axis: {maxGyroValues.y3}</Text>
            <Text>z-axis: {maxGyroValues.z3}</Text>
          </Card>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  ibutton: {
    marginTop: 10,
    padding: 30,
  },
  cards: {
    height: 500,
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "#007AFF",
    color: "white",
    borderRadius: 10,
    textAlign: "center",
  },
  cbutton: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#007AFF",
    color: "white",
    borderRadius: 10,
    textAlign: "center",
  },
  importData: {
    textAlign: "center",
  },
});
