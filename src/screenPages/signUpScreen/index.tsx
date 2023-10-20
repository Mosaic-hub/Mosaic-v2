
import {Button, Text} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigations/typesOfPages";
import { Box } from "@/css";

const SignUpScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"SignUp">> ()
    const navigateToSignInScreen = () => {
        navigation.navigate("SignIn")
    }


    return (
        <Box>
            <Text> Sign Up Screen </Text>
            <Button title="Navigate to sign In" onPress={navigateToSignInScreen} />

        </Box>

    )
}

export default SignUpScreen