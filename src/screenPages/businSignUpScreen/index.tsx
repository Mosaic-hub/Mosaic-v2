import {Button, Text} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNaviagtionType } from "@/navigations/typesOfPages";
import { Box } from "@/css";

const BusinSignUpScreen = () => {
    const navigation = useNavigation<AuthScreenNaviagtionType<"BusinSignUp">> ()
    const navigateToBusinSignInScreen = () => {
        navigation.navigate("BusinSignIn")
    }


    return (
        <Box>
            <Text> Business Sign Up Screen </Text>
            <Button title="Navigate to Business sign In" onPress={navigateToBusinSignInScreen} />

        </Box>

    )
}

export default BusinSignUpScreen