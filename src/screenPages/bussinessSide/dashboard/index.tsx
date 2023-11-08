import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigations/typesOfPages";

const CompanyScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"BusinDash">>();
    return(
        <Text>Screen</Text>
    );
}

export default CompanyScreen;