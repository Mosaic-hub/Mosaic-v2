import React, { useState, useEffect } from "react";
import {StyleSheet, View, Text, Button, TouchableOpacity, Dimensions, SafeAreaView, ScrollView, Image} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput, Switch, HelperText } from "react-native-paper";
import Modal from "react-native-modal";
import Posts from "./data"
import { SearchResult } from "./data";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigations/typesOfPages";
import Popup from "../popup/popup"
import DarkTheme from "@/css/theme/colorStyles";
import { style } from "./styles"

const logoImage = "https://res.cloudinary.com/dizhcdh0p/image/upload/v1700246870/hrsew7qdm79qqqmga3hj.png";

const Dashboard = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Dashboard">> ()
  const navigateToSettings = () => {
      navigation.navigate("Settings")
  }
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    if(!isModalVisible){
      setModalVisible(!isModalVisible);
    }
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [data, setData] = useState(Posts)
  const [searched, setSearched] = useState(false);
  const [showAllFlag, setShowAllFlag] = useState(false);

  const fetchResults = () => {
    if (searchTerm === "") {
      // If the search bar is empty, show all elements
      showAll();
    } else {
      const filteredResults = data.filter(
        (result) =>
          result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          result.searchtags.split(", ").some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
      setResults(filteredResults);
      setSearched(true);
      setShowAllFlag(false);
      toggleModal(); // Open the modal
    }
  };

  const showAll = () => {
    setResults(data);
    setSearched(true);
    setSearchTerm("");
  };

  useEffect(() => {
    if (searchTerm === "") {
      showAll();
    }
  }, [searchTerm, showAllFlag]);

  const containerStyle = searched || showAllFlag ? style.containerWithResults : style.container;

  return (
    <SafeAreaView style={[style.container, DarkTheme.container]}>
      <View style={style.headerView}>
        <Image
          source={{ uri: logoImage, width: 175, height: 45 }}
        />
        <TouchableOpacity style={style.settingsButton} onPress={navigateToSettings}>
          <FontAwesome name="cog" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={style.placeholder}></View>
      
    <View style={style.container}>
      <View style={style.searchBarContainer}>
        <TextInput
          style={[style.textBox, DarkTheme.textBox]}
          placeholder="Search for..."
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholderTextColor={'#C0C0C0'}
          textColor='#FFFFFF'
        />
        <Button title="Search" onPress={fetchResults} />
      </View>
      <Modal
        isVisible={isModalVisible}
        backdropOpacity={0.5}
        style={style.modal}
      >
        <View style={[style.modalContainer, DarkTheme.container]}>
          <SafeAreaView style={containerStyle}>
            <View style={style.searchBarContainer}>
              <TextInput
                style={[style.textBox, DarkTheme.textBox]}
                placeholder="Search for..."
                value={searchTerm}
                onChangeText={setSearchTerm}
                placeholderTextColor={'#C0C0C0'}
                textColor='#FFFFFF'
              />
              <Button title="Search" onPress={fetchResults} />
            </View>
            <Text style={[style.text, DarkTheme.text, {fontSize: 20}]}>Mosaic Search</Text>
            {searched && (
              <ScrollView style={{flex: 1}} contentContainerStyle={style.resultsContainer}>
                {results.length > 0 ? (
                  results.map((result, index) => (
                    <TouchableOpacity
                      onPress={() => openPopup()}
                      style={[style.modalResults, DarkTheme.interactable]}
                      key={index}>
                      <Text style={[style.text, DarkTheme.text]}>{result.title}</Text>
                      <Text style={[style.text, DarkTheme.text]}>{result.company}</Text>
                      <Text style={[style.text, DarkTheme.text]}>{result.price}</Text>
                    </TouchableOpacity>
                  ))
                  
                ) : (
                  <Text style={[style.text, {color: "red"}]}>No results found</Text>
                )}
                <Popup isVisible={isPopupVisible} onClose={closePopup} />
              </ScrollView>
            )}
          </SafeAreaView>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={[style.button, {backgroundColor: '#EB9349'}]}
          >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
    </SafeAreaView>
  );
};

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
  resultsContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  resultTile: {
    width: "30%",
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
  closeButton: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default Dashboard;
