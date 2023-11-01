import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // You'll need to import the FontAwesome icon library
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [data, setData] = useState([
    {
      id: 1,
      title: "ABC Electronics",
      searchtags: "electronics, gadgets, repair, tech",
    },
    {
      id: 2,
      title: "XYZ Coffee Shop",
      searchtags: "coffee, cafe, espresso, pastries",
    },
    {
      id: 3,
      title: "Sunset Yoga Studio",
      searchtags: "yoga, meditation, wellness, fitness",
    },
    {
      id: 4,
      title: "Green Thumb Landscaping",
      searchtags: "landscaping, garden, outdoor, plants",
    },
    {
      id: 5,
      title: "Quick Byte Software",
      searchtags: "software, development, IT, coding",
    },
    {
      id: 6,
      title: "Silver Spoon Restaurant",
      searchtags: "restaurant, dining, cuisine, food",
    },
    {
      id: 7,
      title: "Blue Wave Surf School",
      searchtags: "surfing, lessons, beach, waves",
    },
    {
      id: 8,
      title: "Golden Pet Grooming",
      searchtags: "pet grooming, dogs, cats, animals",
    },
    {
      id: 9,
      title: "Floral Paradise Florist",
      searchtags: "flowers, bouquets, arrangements, events",
    },
    {
      id: 10,
      title: "Fit & Fab Gym",
      searchtags: "gym, fitness, workouts, health",
    },
    {
      id: 11,
      title: "Deli Delight",
      searchtags: "deli, sandwiches, subs, lunch",
    },
    {
      id: 12,
      title: "Artistic Impressions Gallery",
      searchtags: "art, gallery, paintings, exhibitions",
    },
    {
      id: 13,
      title: "Ace Auto Repairs",
      searchtags: "auto repair, cars, mechanics, service",
    },
    {
      id: 14,
      title: "Happy Paws Pet Sitting",
      searchtags: "pet sitting, dog, cat, care",
    },
    {
      id: 15,
      title: "The Book Nook Bookstore",
      searchtags: "books, bookstore, reading, literature",
    },
    {
      id: 16,
      title: "Bayside Boating Adventures",
      searchtags: "boating, adventures, tours, sea",
    },
    {
      id: 17,
      title: "Green Thumb Landscaping",
      searchtags: "landscaping, garden, outdoor, plants",
    },
    {
      id: 18,
      title: "Tech Savvy Solutions",
      searchtags: "technology, solutions, IT, support",
    },
    {
      id: 19,
      title: "Rainbow Cleaners",
      searchtags: "dry cleaning, laundry, clothes, services",
    },
    {
      id: 20,
      title: "Fitness Fusion Studio",
      searchtags: "fitness, studio, workouts, health",
    },
  ]);
  const [searched, setSearched] = useState(false); // Flag to track if search has been initiated
  const [showAllFlag, setShowAllFlag] = useState(false); // Flag to track if "Show All" is active

  const fetchResults = async () => {
    if (searchTerm === "") {
      setResults([]);
      setSearched(false); // Reset the searched flag
    } else {
      const filteredResults = data.filter((result) =>
        result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        result.searchtags.split(', ').some(tag =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setResults(filteredResults.map((result) => result.title)); // Map to titles only
      setSearched(true); // Set the searched flag to true
      setShowAllFlag(false); // Clear the "Show All" flag
    }
  };

  const showAll = () => {
    setResults(data.map((result) => result.title)); // Display all titles
    setSearched(true); // Set the searched flag to true
    setSearchTerm(""); // Clear the search term
  };

  const clearResults = () => {
    setResults([]);
    setSearched(false); // Reset the searched flag
    setShowAllFlag(false); // Reset the "Show All" flag
    setSearchTerm(""); // Clear the search term
  };

  useEffect(() => {
    if (searchTerm === "") {
      setResults([]);
      setSearched(false); // Reset the searched flag
      if (!showAllFlag) {
        // If "Show All" is not active, reset the "Show All" flag
        setShowAllFlag(false);
      }
    }
  }, [searchTerm, showAllFlag]);

  const containerStyle = searched || showAllFlag ? styles.containerWithResults : styles.container;

  return (
    <SafeAreaWrapper>
    <View style={containerStyle}>
      {/* Circular Settings Button */}
      <TouchableOpacity style={styles.settingsButton}>
        <FontAwesome name="cog" size={30} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>Mosaic Search</Text>
      <TextInput
        style={styles.input}
        placeholder="Search for..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <View style={styles.buttonContainer}>
        <Button title="Search" onPress={fetchResults} />
        <Button title="Show All" onPress={showAll} />
      </View>
      {searched && (
        <View style={styles.resultsContainer}>
          {results.length > 0 ? (
            results.map((result, index) => (
              <View style={styles.resultTile} key={index}>
                <Text style={styles.resultText}>{result}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noResults}>No results found</Text>
          )}
        </View>
      )}
      {searched || showAllFlag ? ( // Display the "Clear" button if either search or "Show All" is active
        <Button title="Clear" onPress={clearResults}/>
      ) : null}
    </View>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
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

export default Dashboard;
