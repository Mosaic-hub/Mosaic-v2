import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigations/typesOfPages";
import { style } from "./styles"
import DarkTheme from "@/css/theme/colorStyles";

const logoImage = "https://res.cloudinary.com/dizhcdh0p/image/upload/v1700246870/hrsew7qdm79qqqmga3hj.png";

const BusinDash = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"BusinDash">>();
    const navigateToSettings = () => {
        navigation.navigate("BusinSettings")
    }
    return(
        <SafeAreaView style={[style.container, DarkTheme.container]}>
            <View style={style.headerView}>
                <Image
                    source={{ uri: logoImage, width: 175, height: 45 }}
                />
                <TouchableOpacity style={style.settingsButton} onPress={navigateToSettings}>
                    <FontAwesome name="cog" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={style.placeholder}>

                
            </View>
        </SafeAreaView>
    );
};

export default BusinDash;