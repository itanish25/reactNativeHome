import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.searchbar}>
    <TouchableOpacity>
      <Icon name="menu" size={30} color="white" style={styles.icon} />
      {/* Hamburger icon */}
      </TouchableOpacity>
      <View style={styles.searchBarContainer}>
        <Icon name="search" size={25} color="white" style={styles.icon} />
        {/* Search icon */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
        />
      </View>
      <TouchableOpacity>
      <Icon name="bell" size={30} color="white" style={styles.icon} />
      {/* Bell icon */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchbar: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0d2531",
    borderRadius: 20,
    width: "65%",
  },
  searchBar: {
    flex: 1,
    height: 40,
    color: "#6e7c83",
    marginLeft: 5,
    fontSize: 20,
    borderStyle: "none",
    borderColor: "none",
  },
  icon: {
    marginHorizontal: 5,
  },
  imageContainer: {
    alignItems: "flexStart",
    marginLeft: "5%",
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 20,
  },
});
