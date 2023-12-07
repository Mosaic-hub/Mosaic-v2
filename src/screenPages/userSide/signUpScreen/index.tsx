import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import { TextInput, Switch, HelperText } from "react-native-paper";
import RNPickerSelect from 'react-native-picker-select';
import  {PickerStates} from './Data';
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigations/typesOfPages";
import DarkTheme from '@/css/theme/colorStyles';
import {style, picker} from './styles';

const logoImage = "https://res.cloudinary.com/dizhcdh0p/image/upload/v1700246870/hrsew7qdm79qqqmga3hj.png";

const SignUpScreen: React.FC = () => {

  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    email: '',
    lastName: '',
  });
  
  const handleChange = (name: string, value: string) => {
    setUser({ ...user, [name]: value });
  };

  const handleSignUp = () => {
    console.log('Sign Up button pressed');
  };

const [selectedState, setSelectedState] = useState('');

  return (
    <SafeAreaView style={[style.container, DarkTheme.container]}>

      <Image
          source={{ uri: logoImage, width: 300, height: 100 }}
      />

      <ScrollView>

        <Text style={[style.text, DarkTheme.text]}>Login Info:</Text>

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

        <Text style={[style.text, DarkTheme.text]}>Name:</Text>

        <TextInput
          placeholder="First Name"
          onChangeText={(text) => handleChange('firstName', text)}
          style={[style.textBox, DarkTheme.textBox]}
          placeholderTextColor={'#C0C0C0'}
          textColor='#FFFFFF'
        />

        <TextInput
          placeholder="Last Name"
          onChangeText={(text) => handleChange('lastName', text)}
          style={[style.textBox, DarkTheme.textBox]}
          placeholderTextColor={'#C0C0C0'}
          textColor='#FFFFFF'
        />

        <Text style={[style.text, DarkTheme.text]}>Email:</Text>

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

export default SignUpScreen;
