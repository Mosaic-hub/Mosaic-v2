import {StyleSheet} from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    marginBottom: 10
  },
  textBox: {
    width: 375,
    marginBottom: 15,
    borderRadius: 5,
  },
  picker:{
    width: 375,
    height: 55,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 17,
    color: '#FFFFFF',
    padding: 18,
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