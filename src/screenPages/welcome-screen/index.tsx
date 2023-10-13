
import { Button, Text} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNaviagtionType } from "@/navigations/typesOfPages";
import { Box } from "@/css";


const WelcomeScreen = () => {
    const navigation = useNavigation<AuthScreenNaviagtionType<"Welcome">> ()
    const navigateToSignInScreen = () => {
        navigation.navigate("SignIn")
    }
    const navigateToBusinSignInScreen = () => {
        navigation.navigate("BusinSignIn")
    }



    return (
    <Box>
        <Text> Welcome Screen</Text>
        <Button title="Navigate to sign In" onPress={navigateToSignInScreen} />
        <Button title="Navigate to Business sign In" onPress={navigateToBusinSignInScreen} />
    </Box>
    )
}

export default WelcomeScreen