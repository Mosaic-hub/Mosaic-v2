import React, { useState } from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigations/typesOfPages";
import { TextInput, Switch, HelperText } from "react-native-paper";
import style from "./styles";
import DarkTheme from "@/css/theme/colorStyles";

const logoImage = "https://res.cloudinary.com/dizhcdh0p/image/upload/v1700246870/hrsew7qdm79qqqmga3hj.png";

const SignInScreen = () => {

  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">> ()
  const navigateToDashboardScreen = () => {
      navigation.navigate("Dashboard")
  }
  const navigateToSignUp = () => {
      navigation.navigate("SignUp")
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setEmailValid] = useState(true);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const validateEmail = (text: string) => {
    // Implement email validation logic here.
    // For demonstration purposes, we'll use a simple check.
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
    setEmailValid(isValid);
    setEmail(text);
  }

  return (
    <SafeAreaView style={[style.container, DarkTheme.container]}>
        <Image
          source={{ uri: logoImage, width: 300, height: 100 }}
        />

        <Text style={[style.text, DarkTheme.text, {fontSize: 24}]}>Sign In</Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={validateEmail}
          style={[style.textBox, DarkTheme.textBox]}
          placeholderTextColor={'#C0C0C0'}
          textColor='#FFFFFF'
        />
        {!isEmailValid && <HelperText type="error">Invalid email</HelperText>}

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={[style.textBox, DarkTheme.textBox]}
          placeholderTextColor={'#C0C0C0'}
          textColor='#FFFFFF'
        />

        <View style={style.showPassword}>
          <Switch
            value={showPassword}
            onValueChange={toggleShowPassword}
            trackColor={{ false: '#767577', true: '#EB9349' }}
            style={{marginRight: 5}}
          />

          <Text style={[DarkTheme.text]}>Show Password</Text>
        </View>

        <TouchableOpacity onPress={navigateToDashboardScreen} style={[style.button, DarkTheme.interactable]}>
          <Text style={[style.buttonText, DarkTheme.text]}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToSignUp} style={[style.button, DarkTheme.interactable]}>
          <Text style={[style.buttonText, DarkTheme.text]}>Sign Up</Text>
        </TouchableOpacity>

      </SafeAreaView>
  );
}

export default SignInScreen