import React, { useState, useEffect } from "react";
import {StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Dimensions, SafeAreaView, ScrollView} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Modal from "react-native-modal";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import Posts from "./data"
import { SearchResult } from "./data";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigations/typesOfPages";
import Popup from "../popup/popup"

const Dashboard = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
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

  const clearResults = () => {
    setResults([] as never[]);
    setSearched(false);
    setShowAllFlag(false);
    setSearchTerm("");
  };

  useEffect(() => {
    if (searchTerm === "") {
      showAll();
    }
  }, [searchTerm, showAllFlag]);

  const containerStyle = searched || showAllFlag ? styles2.containerWithResults : styles.container;

  return (
    <SafeAreaWrapper>
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <Button title="Search" onPress={fetchResults} />
      </View>
      <Modal
        isVisible={isModalVisible}
        backdropOpacity={0.5}
        style={styles.modal}
      >
        <SafeAreaView style={styles.modalContent}>
          <SafeAreaView style={containerStyle}>
            <View style={styles.searchBarContainer}>
              <TextInput
                style={styles.input}
                placeholder="Search for..."
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
              <Button title="Search" onPress={fetchResults} />
            </View>
            <Text style={styles2.title}>Mosaic Search</Text>
            {searched && (
              <ScrollView style={{flex: 1}} contentContainerStyle={styles2.resultsContainer}>
                {results.length > 0 ? (
                  results.map((result, index) => (
                    <TouchableOpacity
                      onPress={() => openPopup()}
                      style={styles.resultTile}
                      key={index}>
                      <Text style={styles.resultTitle}>{result.title}</Text>
                      <Text style={styles.resultCompany}>{result.company}</Text>
                      <Text style={styles.resultPrice}>{result.price}</Text>
                    </TouchableOpacity>
                  ))
                  
                ) : (
                  <Text style={styles2.noResults}>No results found</Text>
                )}
                <Popup isVisible={isPopupVisible} onClose={closePopup} />
              </ScrollView>
            )}
            {searched || showAllFlag ? (
              <Button title="Clear" onPress={clearResults} />
            ) : null}
          </SafeAreaView>
          <TouchableOpacity
            onPress={toggleModal}
            style={styles2.closeButton}
          >
            <Text>Close</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </View>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems:'center',
  },
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
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
  resultTile: {
    width: "95%", // Adjust the width as needed
    margin: 5,
    padding: 10,
    backgroundColor: "lightgray",
    borderRadius: 5,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  resultCompany: {
    fontSize: 14,
  },
  resultPrice: {
    fontSize: 14,
    textAlign: "right",
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
  closeButton: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default Dashboard;
