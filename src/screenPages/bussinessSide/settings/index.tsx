import React, {useState, useEffect} from "react";
import { Box, Text } from "@/css";
import { AuthScreenNavigationType } from "@/navigations/typesOfPages";
import { useNavigation } from "@react-navigation/native";
import {Button, StyleSheet, Dimensions, SafeAreaView} from "react-native";
import DarkTheme from "@/css/theme/colorStyles";
import Modal from 'react-native-modal';
import { FontAwesome } from "@expo/vector-icons";

const BusinSettings = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"BusinSettings">>();
    const navigateToLogIn = () => {
        navigation.navigate("BusinSignIn")
    }

    return (
        <SafeAreaView style={[DarkTheme.container, {flex: 1}]}>
            <Button title="Log Out" onPress={navigateToLogIn}/>
        </SafeAreaView>


    )
}


export default BusinSettings;