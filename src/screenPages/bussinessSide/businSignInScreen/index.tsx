import React, { useState } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigations/typesOfPages";
import { Checkbox, TextInput, Switch, HelperText } from "react-native-paper";
import style from "./styles";
import DarkTheme from "@/css/theme/colorStyles";

const logoImage = "https://res.cloudinary.com/dizhcdh0p/image/upload/v1700246870/hrsew7qdm79qqqmga3hj.png";

const BusinSignInScreen = () => {

  let isAdmin: boolean = false

  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">> ()
  const navigateToDashboardScreen = () => {
      navigation.navigate("BusinDash")
  }
  const navigateToDashboardScreenAdmin = () => {
    navigation.navigate("BusinDashAdmin")
  }
  const navigateToSignUp = () => {
      navigation.navigate("BusinSignUp")
  }
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [bussinessID, setBussinessID] = useState('');


  const handleUsernameChange = (text: React.SetStateAction<string>) => {
    setUsername(text);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleIsAdmin = () => {
    if(isAdmin){
      navigateToDashboardScreenAdmin();
    }
    else{
      navigateToDashboardScreen();
    }
  }

  return (
    <SafeAreaView style={[style.container, DarkTheme.container]}>
        <Image
          source={{ uri: logoImage, width: 300, height: 100 }}
        />

        <Text style={[style.text, DarkTheme.text, {fontSize: 24}]}>Bussiness Sign In</Text>

        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={handleUsernameChange}
          style={[style.textBox, DarkTheme.textBox]}
          placeholderTextColor={'#C0C0C0'}
          textColor='#FFFFFF'
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={[style.textBox, DarkTheme.textBox]}
          placeholderTextColor={'#C0C0C0'}
          textColor='#FFFFFF'
        />
        <TextInput
          placeholder="Bussiness ID"
          value={bussinessID}
          onChangeText={setBussinessID}
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

        <TouchableOpacity onPress={handleIsAdmin} style={[style.button, DarkTheme.interactable]}>
          <Text style={[style.buttonText, DarkTheme.text]}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToSignUp} style={[style.button, DarkTheme.interactable]}>
          <Text style={[style.buttonText, DarkTheme.text]}>Sign Up</Text>
        </TouchableOpacity>

      </SafeAreaView>
  );
}

export default BusinSignInScreen;
