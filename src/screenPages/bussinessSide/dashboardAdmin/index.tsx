import React, { useState } from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigations/typesOfPages";
import { style } from "./styles";
import DarkTheme from "@/css/theme/colorStyles";
import { FontAwesome } from "@expo/vector-icons";
import Posts from "./data";
import Popup from "../Popup/index"

const logoImage = "https://res.cloudinary.com/dizhcdh0p/image/upload/v1700246870/hrsew7qdm79qqqmga3hj.png";

const BusinDashAdmin = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"BusinDashAdmin">>();
    const navigateToSettings = () => {
        navigation.navigate("BusinSettings")
    }

    const [isPopupVisible, setPopupVisible] = useState(false);

    const openPopup = () => {
      setPopupVisible(true);
    };
  
    const closePopup = () => {
      setPopupVisible(false);
    };

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
                <ScrollView style={{flex:1}}>
                    {Posts.length > 0 ? (
                        Posts.map((result, index) => (
                            <TouchableOpacity
                                onPress={() => openPopup()}
                                style={[style.modalResults, DarkTheme.interactable]}
                                key={index}>
                                <Text style={[style.text, DarkTheme.text]}>{result.title}</Text>
                                <Text style={[style.text, DarkTheme.text]}>{result.company}</Text>
                                <Text style={[style.text, DarkTheme.text]}>{result.price}</Text>
                            </TouchableOpacity>
                        ))
                    ) : (
                        <Text style={[style.text, {color: "red"}]}>No posts found</Text>
                    )} 
                    <Popup isVisible={isPopupVisible} onClose={closePopup}/>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default BusinDashAdmin;