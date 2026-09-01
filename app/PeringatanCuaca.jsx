import React from "react";
import { Text, View } from "react-native";

export default function CekPanas() {
  let SuhuUdara = 75;
  let Peringatan = "";

  if (SuhuUdara >= 35 && SuhuUdara <= 40) {
    Peringatan = "peringatan cuaca panas gro";
  } else {
    Peringatan = "normal si gro";
  }

  return (
    <View>
      <Text>Suhu hari ini adalah: {SuhuUdara}</Text>
      <Text>Peringatan: {Peringatan}</Text>
    </View>
  );
}
