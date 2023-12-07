import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./typesOfPages";
import WelcomeScreen from "@/screenPages/welcome-screen";
import SignInScreen from "@/screenPages/userSide/signInScreen";
import SignUpScreen from "@/screenPages/userSide/signUpScreen";
import BusinSignInScreen from "@/screenPages/bussinessSide/businSignInScreen";
import BusinSignUpScreen from "@/screenPages/bussinessSide/businSignUpScreen";
import Dashboard from "@/screenPages/userSide/dashboard";
import SettingsScreen from "@/screenPages/userSide/settings"
import CompanyScreen from "@/screenPages/userSide/companyScreen"
import BusinDash from "@/screenPages/bussinessSide/dashboard"
import BusinDashAdmin from "@/screenPages/bussinessSide/dashboardAdmin"
import businSettings from "@/screenPages/bussinessSide/settings";


const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStackNavigator  = () => {
    return(
        <Stack.Navigator>

            <Stack.Screen name =  "Welcome"
                options={{
                    headerShown: false,
                }}
            component={WelcomeScreen} />

            <Stack.Screen name =  "SignIn"
                options={{
                    headerShown: false,
                }} 
            component={SignInScreen} />   
            <Stack.Screen name =  "SignUp" 
                options={{
                    headerShown: false,
                }}
            component={SignUpScreen} />

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
            <Stack.Screen name =  "Settings"
                options={{
                    headerShown: false,
                }} 
            component={SettingsScreen} />

            <Stack.Screen name =  "CompanyScreen"
                options={{
                    headerShown: false,
                }} 
            component={CompanyScreen} />

            <Stack.Screen name =  "BusinDash"
                options={{
                    headerShown: false,
                }} 
            component={BusinDash} />

            <Stack.Screen name =  "BusinDashAdmin"
                options={{
                    headerShown: false,
                }} 
            component={BusinDashAdmin} />

            <Stack.Screen name =  "BusinSettings"
                options={{
                    headerShown: false,
                }} 
            component={businSettings} />
        
        
        </Stack.Navigator>
    )
} 
export default AuthStackNavigator