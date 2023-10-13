import {Button, Text} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNaviagtionType } from "@/navigations/typesOfPages";
import { Box } from "@/css";

const BusinSignInScreen = () => {
    const navigation = useNavigation<AuthScreenNaviagtionType<"BusinSignIn">> ()
    const navigateToBusinSignUpScreen = () => {
        navigation.navigate("BusinSignUp")
    }


    return (
        <Box>
            <Text> Business Sign In Screen </Text>
            <Button title="Navigate to Business sign up" onPress={navigateToBusinSignUpScreen} />

        </Box>

    )
}

export default BusinSignInScreen