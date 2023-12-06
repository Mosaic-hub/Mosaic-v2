import React, { useState } from "react";
import {Text, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigations/typesOfPages";
import DarkTheme from '@/css/theme/colorStyles';
import {style} from './styles';

const logoImage = "https://res.cloudinary.com/dizhcdh0p/image/upload/v1700246870/hrsew7qdm79qqqmga3hj.png";

const BusinSignUpScreen: React.FC = () => {

  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    bussinessName: '',
    bussinessID: '',
  });
  
  const handleChange = (name: string, value: string) => {
    setUser({ ...user, [name]: value });
  };

  const handleSignUp = () => {
    console.log('Sign Up button pressed');
  };

  return (
    <SafeAreaView style={[style.container, DarkTheme.container]}>

      <Image
          source={{ uri: logoImage, width: 300, height: 100 }}
      />
      <Text style={[style.text, DarkTheme.text, {fontSize: 24}]}>Bussiness Sign Up</Text>

      <ScrollView>

        <Text style={[style.text, DarkTheme.text]}>Admin Login Info:</Text>

        <TextInput
          placeholder="Username"
          onChangeText={(text) => handleChange('username', text)}
          style={[style.textBox, DarkTheme.textBox]}
          placeholderTextColor={'#C0C0C0'}
          textColor='#FFFFFF'
        />

        <TextInput
          placeholder="Password"
          onChangeText={(text) => handleChange('password', text)}
          style={[style.textBox, DarkTheme.textBox]}
          secureTextEntry
          placeholderTextColor={'#C0C0C0'}
          textColor='#FFFFFF'
        />

        <TextInput
          placeholder="Confirm Password"
          onChangeText={(text) => handleChange('confirmPassword', text)}
          style={[style.textBox, DarkTheme.textBox]}
          secureTextEntry
          placeholderTextColor={'#C0C0C0'}
          textColor='#FFFFFF'
        />

        <Text style={[style.text, DarkTheme.text]}>Bussiness Info:</Text>

        <TextInput
          placeholder="Bussiness Name"
          onChangeText={(text) => handleChange('bussinessName', text)}
          style={[style.textBox, DarkTheme.textBox]}
          placeholderTextColor={'#C0C0C0'}
          textColor='#FFFFFF'
        />
        <TextInput
          placeholder="Bussiness ID"
          onChangeText={(text) => handleChange('bussinessID', text)}
          style={[style.textBox, DarkTheme.textBox]}
          placeholderTextColor={'#C0C0C0'}
          textColor='#FFFFFF'
        />

        <Text style={[style.text, DarkTheme.text]}>Bussiness contact Info:</Text>

        <TextInput
          placeholder="Email"
          onChangeText={(text) => handleChange('email', text)}
          style={[style.textBox, DarkTheme.textBox]}
          placeholderTextColor={'#C0C0C0'}
          textColor='#FFFFFF'
        />

      </ScrollView>

      <TouchableOpacity style={[style.button, DarkTheme.interactable]} onPress={handleSignUp}>
        <Text style={[style.buttonText, DarkTheme.text]}>Sign Up</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
};

export default BusinSignUpScreen;
