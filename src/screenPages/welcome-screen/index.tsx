import React from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigations/typesOfPages";
import style from "./styles";
import DarkTheme from "@/css/theme/colorStyles";

const logoImage = "https://res.cloudinary.com/dizhcdh0p/image/upload/v1700246870/hrsew7qdm79qqqmga3hj.png";

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();

  const navigateToSignInScreen = () => {
    navigation.navigate("SignIn");
  };

  const navigateToBusinessSignInScreen = () => {
    navigation.navigate("BusinSignIn");
  };

  return (
    <SafeAreaView style={[style.container, DarkTheme.container]}>

      <Image
        source={{ uri: logoImage, width: 400, height: 400 }}
      />

      <TouchableOpacity onPress={navigateToSignInScreen} style={[style.button, DarkTheme.interactable]}>
        <Text style={[style.buttonText, DarkTheme.text]}>User Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToBusinessSignInScreen} style={[style.button, DarkTheme.interactable]}>
        <Text style={[style.buttonText, DarkTheme.text]}>Business Log In</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default WelcomeScreen;
