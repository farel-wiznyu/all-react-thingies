import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function CekLogin(){
    // const IsLoggedIn = false;
    // const Username = "xixixi";
    let TiketKe = "";
    for (let i = 1; i <= 8; i++) {
        TiketKe += `Tiket Antrean Ke ${i}\n`;
    }

    // for (let i = 5; i >= 1; i--){
    //     console.log("hitung mundur:" + i);
    // }
    // console.log("roket meluncur");

    // return(
    //     <View>
    //         <Text>
    //             {IsLoggedIn === true ? `halo ${Username}` : "lu siapa jir, login sana"}
    //         </Text>
    //         {/* <Image source={require('../assets/images/icon.png')} style={style.Image} /> */}
    //     </View>
    // );

    return (
        <View>
             <Text>
                 {TiketKe }
             </Text>
         </View>
    );

}