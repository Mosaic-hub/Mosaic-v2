import {Button} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "@/css";
import { AuthScreenNaviagtionType } from "@/navigations/typesOfPages";


const SignInScreen = () => {
    const navigation = useNavigation<AuthScreenNaviagtionType<"SignIn">> ()
    const navigateToSignUpScreen = () => {
        navigation.navigate("SignUp")
    }


    return (
        <Box>
            <Text> Sign In Screen </Text>
            <Button title="Navigate to sign up" onPress={navigateToSignUpScreen} />

        </Box>

    )
}

export default SignInScreen