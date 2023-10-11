import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./auth-stack-navigator";


const Navigation = () => {
    return (
        <NavigationContainer >
            <AuthStackNavigator />
        </NavigationContainer>
    )
}

export default Navigation