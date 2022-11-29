import { ScrollView, Text, View } from "react-native";
import { Divider } from "react-native-elements";

import { readString } from "react-native-csv";

import { CardComp } from "../Components/CardComp";

// Component that will eventually loop over the data instead of having to pass individual args into it
function TestComp({ data }) {
  return (
    <View style={styles.containerStyle}>
      <Divider width={3} />
      {data.data[1].map((data) => (
        <View padding={5}>
          <Text>Speed: {data.speed}</Text>
          <Text>Spin: {data.spin}</Text>
          <Text>Rotation: {data.rot}</Text>
        </View>
      ))}
    </View>
  );
}

export function LiveScreen() {
  // Will have to get csv file from ball sensor and convert it
  // to a string and then the csvToJson conversion should go through
  // ex:
  const csv = `shotNum,speed,spin,rotation
  Shot 1,12.5,180,6
  Shot 2,11.5,90,5
  Shot 3,10.4,140,4
  Shot 4,17.1,250,7
  Shot 5,9.3,150,3`;

  const res = readString(csv);
  console.log(res);
  console.log(res.data);
  // converting into JSON, currently no key for each shot value (speed, spin, rot)
  console.log(JSON.stringify(res.data));
  //console.log(res.data[2]);
  //console.log(res.data[3]);

  return (
    <ScrollView>
      {/* <TestComp data={res} /> */}
      <CardComp
        shotNum={1}
        speed={res.data[1][1]}
        spin={res.data[1][2]}
        rot={res.data[1][3]}
      />
      <CardComp
        shotNum={2}
        speed={res.data[2][1]}
        spin={res.data[2][2]}
        rot={res.data[2][3]}
      />
      <CardComp
        shotNum={3}
        speed={res.data[3][1]}
        spin={res.data[3][2]}
        rot={res.data[3][3]}
      />
      <CardComp
        shotNum={4}
        speed={res.data[4][1]}
        spin={res.data[4][2]}
        rot={res.data[4][3]}
      />
      <CardComp
        shotNum={5}
        speed={res.data[5][1]}
        spin={res.data[5][2]}
        rot={res.data[5][3]}
      />
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
