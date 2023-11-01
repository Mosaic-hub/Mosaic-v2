import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./typesOfPages";
import WelcomeScreen from "@/screenPages/welcome-screen";
import SignInScreen from "@/screenPages/signInScreen";
import SignUpScreen from "@/screenPages/signUpScreen";
import BusinSignInScreen from "@/screenPages/businSignInScreen";
import BusinSignUpScreen from "@/screenPages/businSignUpScreen";
import Dashboard from "@/screenPages/dashboard";

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStackNavigator  = () => {
    return(
        <Stack.Navigator>

            <Stack.Screen name =  "Welcome" component={WelcomeScreen} />

            <Stack.Screen name =  "SignIn" component={SignInScreen} />   
            <Stack.Screen name =  "SignUp" component={SignUpScreen} />

<<<<<<< Updated upstream
            <Stack.Screen name =  "BusinSignIn" component={BusinSignInScreen} />
            <Stack.Screen name =  "BusinSignUp" component={BusinSignUpScreen} />
=======
            <Stack.Screen name =  "BusinSignIn" 
                options={{
                    headerShown: false,
                }}
            component={BusinSignInScreen} />
            <Stack.Screen name =  "BusinSignUp"
                options={{
                    headerShown: false,
                }} 
            component={BusinSignUpScreen} />
            <Stack.Screen name =  "Dashboard"
                options={{
                    headerShown: false,
                }} 
            component={Dashboard} />
>>>>>>> Stashed changes
        </Stack.Navigator>
    )
} 
export default AuthStackNavigator
//<Button title="Login" onPress={navigateToDashboardScreen} />