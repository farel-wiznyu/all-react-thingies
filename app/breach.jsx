import React from "react";
import { Text, View } from "react-native";

export default function Breach(){
    const BreachStatus = true;

    if (BreachStatus === true){
        return(
            <View>
                <Text>OH SHI</Text>
            </View>
        );
    } else {
        return (
            <View>
                <Text>aman</Text>
            </View>
        );
    }
}