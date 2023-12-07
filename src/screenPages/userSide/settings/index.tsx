import React, {useState, useEffect} from "react";
import { Box, Text } from "@/css";
import { AuthScreenNavigationType } from "@/navigations/typesOfPages";
import { useNavigation } from "@react-navigation/native";
import {Button, StyleSheet, Dimensions, SafeAreaView} from "react-native";
import DarkTheme from "@/css/theme/colorStyles";
import Modal from 'react-native-modal';
import { FontAwesome } from "@expo/vector-icons";

const Settings = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"Settings">> ()
    const navigateToSignInScreen = () => {
        navigation.navigate("SignIn")
    }

    return (
        <SafeAreaView style={[DarkTheme.container, {flex: 1}]}>
            <Button title="Log Out" onPress={navigateToSignInScreen}/>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems:'center',
    },
    openButton: {
      alignItems: 'center',
      backgroundColor: 'blue',
      padding: 10,
    },
    modal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    modalContent: {
      backgroundColor: 'white',
      height: Dimensions.get('window').height - 100,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    closeButton: {
      alignItems: 'center',
      backgroundColor: 'red',
      padding: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
  });
  const styles2 = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    containerWithResults: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    input: {
      height: 40,
      width: 300,
      borderColor: "gray",
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
    },
    resultsContainer: {
      marginTop: 20,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start",
    },
    resultTile: {
      width: "30%", // Adjust the width as needed
      margin: 5,
      padding: 10,
      backgroundColor: "lightgray",
      borderRadius: 5,
    },
    resultText: {
      fontSize: 16,
      fontWeight: "bold",
    },
    noResults: {
      fontSize: 16,
      fontWeight: "bold",
      color: "red",
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      paddingHorizontal: 10,
    },
    settingsButton: {
      position: "absolute",
      top: 10,
      right: 10,
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: "blue",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default Settings;