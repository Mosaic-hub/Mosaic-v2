import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
<<<<<<< Updated upstream
import { AuthScreenNaviagtionType } from "@/navigations/typesOfPages";
import { Box } from "@/css";
=======
import { AuthScreenNavigationType } from "@/navigations/typesOfPages";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { TextInput, HelperText } from "react-native-paper";
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Feather } from '@expo/vector-icons';

const usStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
>>>>>>> Stashed changes

const BusinSignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"BusinSignUp">>();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [selectedState, setSelectedState] = useState("Alabama");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("United States");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setEmailValid] = useState(true);
  const [birthDate, setBirthDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

<<<<<<< Updated upstream
    return (
        <Box>
            <Text> Business Sign Up Screen </Text>
            <Button title="Navigate to Business sign In" onPress={navigateToBusinSignInScreen} />

        </Box>
=======
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const validateEmail = (text: string) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
    setEmailValid(isValid);
    setEmail(text);
  }
>>>>>>> Stashed changes

  const handleDatePicked = (date: Date) => {
    setBirthDate(date);
    setDatePickerVisible(false);
  }

  const showDatePicker = () => {
    setDatePickerVisible(true);
  }

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  }

  const handleSignUp = () => {
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Phone:", phone);
    console.log("Street Address:", streetAddress);
    console.log("City:", city);
    console.log("State:", selectedState);
    console.log("Zip Code:", zipCode);
    console.log("Country:", country);
    console.log("Birth Date:", birthDate);
  }

  return (
    <SafeAreaWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Business Sign Up</Text>
        <TextInput
          label="First Name"
          value={firstName}
          onChangeText={setFirstName}
          style={styles.input}
        />
        <TextInput
          label="Last Name"
          value={lastName}
          onChangeText={setLastName}
          style={styles.input}
        />
        <View style={styles.birthDateContainer}>
          <TextInput
            label="Month"
            value={(birthDate.getMonth() + 1).toString()}
            style={styles.birthDateInput}
            onFocus={showDatePicker}
          />
          <TextInput
            label="Day"
            value={birthDate.getDate().toString()}
            style={styles.birthDateInput}
            onFocus={showDatePicker}
          />
          <TextInput
            label="Year"
            value={birthDate.getFullYear().toString()}
            style={styles.birthYearInput}
            onFocus={showDatePicker}
          />
        </View>
        <TextInput
          label="Email"
          value={email}
          onChangeText={validateEmail}
          style={styles.input}
        />
        {!isEmailValid && <HelperText type="error">Invalid email</HelperText>}
        <View style={styles.passwordContainer}>
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
          />
          <TouchableOpacity onPress={toggleShowPassword} style={styles.showPasswordIcon}>
            <Feather
              name={showPassword ? 'eye' : 'eye-off'}
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showPassword}
          style={styles.input}
        />
        <TextInput
          label="Phone"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
        />
        <TextInput
          label="Street Address"
          value={streetAddress}
          onChangeText={setStreetAddress}
          style={styles.input}
        />
        <TextInput
          label="City"
          value={city}
          onChangeText={setCity}
          style={styles.input}
        />
        <RNPickerSelect
          onValueChange={(value) => setSelectedState(value)}
          items={usStates.map((state) => ({
            label: state,
            value: state,
          }))}
          value={selectedState}
          style={pickerSelectStyles}
        />
        <TextInput
          label="Zip Code"
          value={zipCode}
          onChangeText={setZipCode}
          style={styles.input}
        />
        <TextInput
          label="Country"
          value={country}
          onChangeText={setCountry}
          style={styles.input}
        />
        <Button title="Sign Up" onPress={handleSignUp} color="#007bff" />
      </ScrollView>
      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDatePicked}
        onCancel={hideDatePicker}
      />
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  passwordInput: {
    flex: 1,
    marginBottom: 10,
  },
  showPasswordIcon: {
    padding: 10,
  },
  birthDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  birthDateInput: {
    flex: 2,
  },
  birthYearInput: {
    flex: 1,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});

export default BusinSignUpScreen;
