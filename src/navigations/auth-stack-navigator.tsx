import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./typesOfPages";
import WelcomeScreen from "@/screenPages/welcome-screen";
import SignInScreen from "@/screenPages/signInScreen";
import SignUpScreen from "@/screenPages/signUpScreen";
import BusinSignInScreen from "@/screenPages/businSignInScreen";
import BusinSignUpScreen from "@/screenPages/businSignUpScreen";

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStackNavigator  = () => {
    return(
        <Stack.Navigator>

            <Stack.Screen name =  "Welcome" component={WelcomeScreen} />

            <Stack.Screen name =  "SignIn" component={SignInScreen} />   
            <Stack.Screen name =  "SignUp" component={SignUpScreen} />

            <Stack.Screen name =  "BusinSignIn" component={BusinSignInScreen} />
            <Stack.Screen name =  "BusinSignUp" component={BusinSignUpScreen} />
        </Stack.Navigator>
    )
} 
export default AuthStackNavigator