import React from "react";
import { Text, View, Button } from "react-native";

export default function IfScreen() {
    // let firstName = "Budi";
    // const lastName = "Santoso";
    // const isAktif = true;

    // const outputText = `Akun atas nama ${firstName} ${lastName} status aktif: ${isAktif}`;
    // console.log(outputText);

    // const rawUsername = " jap GAYYYYYYYYYYYY ";
    // const cleanUsername = rawUsername.trim();
    // const usernameLength = cleanUsername.length;
    // const usernameOutput = `Username bersih: ${cleanUsername} | Panjang: ${usernameLength}`;
    // console.log(usernameOutput);

    // return (
    //     <View style={{ padding: 20 }}>
    //         <Text>{outputText}</Text>
    //         <Text>{usernameOutput}</Text>
    //     </View>
    // );

    const NilaiUjian = 100;
    let Pesan = "";

    if (NilaiUjian >= 75){
        Pesan = "selamat anda lulus";
    } else {
        Pesan = "selamat anda lulus";
    }
    return (
        <View>
            <Text>{Pesan}</Text>
        </View>
    )
}
