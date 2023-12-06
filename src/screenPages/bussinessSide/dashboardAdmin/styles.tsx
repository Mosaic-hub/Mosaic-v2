import {StyleSheet, Dimensions} from "react-native";


export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 20,
      },
      text: {
        fontSize: 15,
        marginBottom: 10,
        fontWeight: 'bold',
      },
      textBox: {
        width: 300,
        marginBottom: 15,
        borderRadius: 5,
      },
      placeholder: {
        alignItems: "center",
        width: '90%',
        height: 700,
        marginBottom: 20,
      },
      headerView:{
        marginBottom : 50,
        justifyContent: 'flex-end',
        width:'100%',
        height: 125,
        backgroundColor: '#191B1F',
        marginTop: -47,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 100,
        paddingBottom: 20,
      },
      modalContainer:{
        height: Dimensions.get('window').height - 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalResults: {
        marginBottom: 16,
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
      },
      button: {
        marginBottom: 16,
        width: 200,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
      },
      resultsContainer: {
        marginTop: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      },
      settingsButton: {
        position: "absolute",
        bottom: 25,
        right: 20,
        width: 45,
        height: 45,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
      },
      searchBarContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        padding: 10,
      },
      containerWithResults: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      },
      modal: {
        justifyContent: 'flex-end',
        margin: 0,
      },
})