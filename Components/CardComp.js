import { Text, View } from "react-native";
import { Divider } from "react-native-elements";

export function CardComp({ shotNum, speed, spin, rot }) {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>Shot {shotNum}</Text>
      <Divider width={3} />
      <View padding={5}>
        <Text>Speed: {speed}</Text>
        <Text>Spin: {spin}</Text>
        <Text>Rotation: {rot}</Text>
      </View>
    </View>
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
