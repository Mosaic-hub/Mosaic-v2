import { Box, Button} from "@mui/material";
import {Text} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
    const navigation = useNavigation ()
    const navigateToSignUpScreen = () => {
        navigation.navigate("AuthStack", {
            screen: "SignUp"
        })
    }


    return (
        <Box>
            <Text> Sign In Screen </Text>
            <Button variant="outlined">Outlined</Button>

        </Box>

    )
}

export default SignInScreen