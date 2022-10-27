import { Text, View } from "react-native";
import { Divider } from "react-native-elements";

export const CardComp = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
      <View>
        <Text style={styles.titleStyle}>Test Component</Text>
        <Divider width={3} />
        <View padding={5}>
          <Text>Speed:</Text>
          <Text>Spin:</Text>
          <Text>Rotation:</Text>
          <Text>Field:</Text>
          <Text>Field:</Text>
          <Text>Field:</Text>
        </View>
      </View>
    </View>
  );
};

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
