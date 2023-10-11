import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./typesOfPages";
import WelcomeScreen from "@/screenPages/welcome-screen";
import SignInScreen from "@/screenPages/signInScreen";

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStackNavigator  = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name =  "Welcome" component={WelcomeScreen} />
            <Stack.Screen name =  "SignIn" component={SignInScreen} />
        </Stack.Navigator>
    )
} 
export default AuthStackNavigator