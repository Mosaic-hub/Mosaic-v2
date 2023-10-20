import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
<<<<<<< Updated upstream
import { AuthScreenNaviagtionType } from "@/navigations/typesOfPages";
import { Box } from "@/css";
=======
import { AuthScreenNavigationType } from "@/navigations/typesOfPages";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { LinearGradient } from "expo-linear-gradient";
>>>>>>> Stashed changes

const logoImage = "https://res.cloudinary.com/dxmis4bog/image/upload/f_auto,q_auto/cqil9yea0xlzaxi8rsx3";

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();

  const navigateToSignInScreen = () => {
    navigation.navigate("SignIn");
  };

  const navigateToBusinessSignInScreen = () => {
    navigation.navigate("BusinSignIn");
  };

<<<<<<< Updated upstream
    return (
    <Box>
        <Text> Welcome Screen</Text>
        <Button title="Navigate to sign In" onPress={navigateToSignInScreen} />
        <Button title="Navigate to Business sign In" onPress={navigateToBusinSignInScreen} />
    </Box>
    )
}
=======
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <LinearGradient colors={["#ffffff", "#ffeed9", "f8daff", "#ffe5c0", "#fef9ff", "#ffffff"]} style={styles.gradient}>
          <View style={styles.content}>
            <Text style={styles.title}>WELCOME TO</Text>
            <Image
              source={{ uri: logoImage, width: 140, height: 140 }}
            />
            <Text style={styles.title}>Every Step Go Productive</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={navigateToSignInScreen} style={styles.button}>
              User Log In
            </Button>
            <Button mode="contained" onPress={navigateToBusinessSignInScreen} style={styles.button}>
              Business Log In
            </Button>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 28,
  },
  buttonContainer: {
    marginTop: 16,
    marginHorizontal:90,
  },
  button: {
    marginBottom: 16,
  },
});
>>>>>>> Stashed changes

export default WelcomeScreen;
