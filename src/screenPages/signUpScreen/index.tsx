import React, { useState, useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import  {PickerStates} from './Data';
import { Label } from '@mui/icons-material';
import { useNavigation } from "@react-navigation/native";
<<<<<<< Updated upstream
import { AuthScreenNavigationType } from "@/navigations/typesOfPages";
import { Box } from "@/css";

const SignUpScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"SignUp">> ()
    const navigateToSignInScreen = () => {
        navigation.navigate("SignIn")
    }


    return (
        <Box>
            <Text> Sign Up Screen </Text>
            <Button title="Navigate to sign In" onPress={navigateToSignInScreen} />

        </Box>
=======
import { AuthScreenNaviagtionType } from "@/navigations/typesOfPages";

const SignUpScreen: React.FC = () => {

  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    monthDay: '',
    firstName: '',
    address: '',
    state: '',
    phone: '',
    birthdayYear: '',
    lastName: '',
    zip: '',
  });

  const PickerDay = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '10', value: '10' },
    { label: '11', value: '11' },
    { label: '12', value: '12' },
  ];

  const handleChange = (name: string, value: string) => {
    setUser({ ...user, [name]: value });
  };

  const handleSignUp = () => {
    console.log('Sign Up button pressed');
  };

const [selectedMonth, setSelectedMonth] = useState('');
const [selectedYear, setSelectedYear] = useState('');
const [selectedDay, setSelectedDay] = useState('');
const [selectedState, setSelectedState] = useState('');



  return (
    <SafeAreaView>
    <View style={styles.header}>
      <Text style={styles.headerText}>Mosaic</Text>
      <View>
>>>>>>> Stashed changes


        <Text>Login Info:</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => handleChange('username', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => handleChange('password', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          onChangeText={(text) => handleChange('confirmPassword', text)}
        />


        <Text>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={(text) => handleChange('firstName', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={(text) => handleChange('lastName', text)}
        />


        <Text>Address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Street Address"
          onChangeText={(text) => handleChange('address', text)}
        />
        <View style={pickerSelectStyles.pickerContainer}>
          <RNPickerSelect
            style={{inputIOS: pickerSelectStyles.pickerState,
              inputAndroid: pickerSelectStyles.pickerState,}}
            onValueChange={(value) => setSelectedState(value)}
            items={PickerStates}
            value={selectedState}
            placeholder={{ label: 'State', value: '' }}
          />
          <TextInput
          style={styles.ZipInput}
          placeholder="Zip"
          onChangeText={(text) => handleChange('zip', text)}
        />
        </View>
        <Text>Phone Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone"
          onChangeText={(text) => handleChange('phone', text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 350,
    borderRadius: 4,
  },
  ZipInput:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 175,
    borderRadius: 4,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 10,
    marginTop: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  headerText: {
    fontSize: 60,
    paddingBottom: 20,
  },
  header:{
    alignItems: 'center',
    paddingTop: 20,
  }
});

const pickerSelectStyles = StyleSheet.create({
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginRight: 10,
    fontSize: 16,
  },
  pickerMonth: {
    fontSize: 16,
    height: 40,
    width: 150,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  pickerDay: {
    fontSize: 16,
    height: 40,
    width: 75,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  pickerYear: {
    fontSize: 16,
    height: 40,
    width: 125,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  pickerState: {
    fontSize: 16,
    height: 40,
    width: 175,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
export default SignUpScreen;
