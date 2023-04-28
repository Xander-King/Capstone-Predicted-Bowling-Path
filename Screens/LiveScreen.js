import React, { useState, useEffect } from "react";

import { ScrollView, Text, View } from "react-native";
import { Divider } from "react-native-elements";

import { readString } from "react-native-csv";

import { CardComp } from "../Components/CardComp";

import { MetaWear, Accelerometer } from "metawear";

const MAC_ADDRESS = "EB:94:2C:ED:94:72";

function Sensor() {
  const [accelerometerData, setAccelerometerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const device = await MetaWear.discoverByAddress(MAC_ADDRESS);
      await device.connectAsync();
      console.log("connected!");
      const accelerometer = new Accelerometer(device);
      await accelerometer.configure({ odr: 100, range: 8 });
      await accelerometer.start();

      // Set up a loop to retrieve the data and update the state
      const intervalId = setInterval(async () => {
        const data = await accelerometer.highPass?.read();
        setAccelerometerData(data);
      }, 100);

      // Return a cleanup function to stop the accelerometer and disconnect from the device
      return async () => {
        await accelerometer.stop();
        await device.disconnectAsync();
        clearInterval(intervalId);
      };
    };
    fetchData();
  }, []);

  return (
    <Text>
      <p>Accelerometer data:</p>
      <pre>{JSON.stringify(accelerometerData, null, 2)}</pre>
    </Text>
  );
}

// Component that will eventually loop over the data instead of having to pass individual args into it
// function TestComp({ data }) {
//   return (
//     <View style={styles.containerStyle}>
//       <Divider width={3} />
//       {data.data[1].map((data) => (
//         <View padding={5}>
//           <Text>Speed: {data.speed}</Text>
//           <Text>Spin: {data.spin}</Text>
//           <Text>Rotation: {data.rot}</Text>
//         </View>
//       ))}
//     </View>
//   );
// }

export function LiveScreen() {
  // Will have to get csv file from ball sensor and convert it
  // to a string and then the csvToJson conversion should go through
  // ex:
  // const csv = `shotNum,speed,spin,rotation
  // Shot 1,12.5,180,6
  // Shot 2,11.5,90,5
  // Shot 3,10.4,140,4
  // Shot 4,17.1,250,7
  // Shot 5,9.3,150,3`;

  // const res = readString(csv);
  // console.log(res);
  // console.log(res.data);
  // // converting into JSON, currently no key for each shot value (speed, spin, rot)
  // console.log(JSON.stringify(res.data));
  //console.log(res.data[2]);
  //console.log(res.data[3]);

  return (
    <ScrollView>
      <Text>HIIIIIIIIi</Text>
      {/* <Sensor /> */}

      {/* <CardComp
        shotNum={1}
        speed={res.data[1][1]}
        spin={res.data[1][2]}
        rot={res.data[1][3]}
      /> */}
    </ScrollView>
  );
}

const styles = {
  containerStyle: {
    borderWidth: 3,
    borderRadius: 10,
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    borderColor: "lightgray",
    elevation: 1,
    marginTop: 10,
  },
  titleStyle: {
    textAlign: "center",
    fontWeight: "bold",
    color: "darkGray",
    padding: 5,
  },
};
