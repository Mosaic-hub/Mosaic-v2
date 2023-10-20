import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigations/typesOfPages";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { Checkbox, TextInput, Switch, HelperText } from "react-native-paper";

const BusinSignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"BusinSignIn">>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isEmailValid, setEmailValid] = useState(true);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  }

  const navigateToBusinSignUpScreen = () => {
    navigation.navigate("BusinSignUp");
  }

  const validateEmail = (text: string) => {
    // Implement email validation logic here.
    // For demonstration purposes, we'll use a simple check.
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
    setEmailValid(isValid);
    setEmail(text);
  }

  const handleLogin = () => {
    // Implement your login logic here. You can use a library like Firebase, Axios, etc.
    // Validate the input and authenticate the user.

    // For demonstration purposes, just display the entered email and password.
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  }

  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Business Sign In</Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={validateEmail}
          style={styles.input}
        />
        {!isEmailValid && <HelperText type="error">Invalid email</HelperText>}
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={styles.input}
        />
        <View style={styles.checkboxContainer}>
          <Checkbox.Android
            status={rememberMe ? "checked" : "unchecked"}
            onPress={toggleRememberMe}
          />
          <Text>Remember Me</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Switch
            value={showPassword}
            onValueChange={toggleShowPassword}
          />
          <Text>Show Password</Text>
        </View>
        <Button title="Login" onPress={handleLogin} color="#007bff" />
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <Button title="Sign Up" onPress={navigateToBusinSignUpScreen} color="#007bff" />
      </View>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  signUpText: {
    marginTop: 10,
  },
});

export default BusinSignInScreen;
