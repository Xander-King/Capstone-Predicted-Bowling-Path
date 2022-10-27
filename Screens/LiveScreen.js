import { ScrollView } from "react-native";

import { CardComp } from "../Components/CardComp";

export function LiveScreen() {
  return (
    <ScrollView>
      <CardComp />
      <CardComp />
      <CardComp />
      <CardComp />
    </ScrollView>
  );
}
