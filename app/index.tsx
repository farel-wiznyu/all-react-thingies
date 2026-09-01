import { Text, View } from "react-native";
import VarScreen from "./var";
import Breach from "./breach";
import CekPanas from "./PeringatanCuaca";
import CekLogin from "./StatusLogin";

export default function Index() {
  return (
    <View>
      {/* <VarScreen /> */}
      {/* <CekPanas /> */}
      <CekLogin />
      {/* <Breach/> */}
    </View>
  );
}
