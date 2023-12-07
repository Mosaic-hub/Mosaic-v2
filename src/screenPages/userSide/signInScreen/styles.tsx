import {StyleSheet} from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
      },
      text: {
        fontSize: 15,
        marginBottom: 20,
      },
      textBox: {
        width: 375,
        marginBottom: 15,
      },
      showPassword: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
      },
      button: {
        marginBottom: 16,
        width: 200,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
      },
      buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
      },
})

export default style;