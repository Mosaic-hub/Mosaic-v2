import {StyleSheet} from "react-native";

const DarkTheme = StyleSheet.create({
    container: {
        backgroundColor: '#282b30',
      },
    interactable: {
        backgroundColor: '#609EAB',
    },
    text: {
        color: '#FFFFFF',
        textShadowColor: 'black', // Outline color
        textShadowOffset: { width: 0, height: 0.5 }, // Outline offset
        textShadowRadius: 5, // Outline radius
    },
    textBox:{
        backgroundColor: '#42474F',
    },
})

export default DarkTheme;