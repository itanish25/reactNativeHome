import React from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity  } from "react-native";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/nature02.png")}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.whiteText1}>Welcome Home,</Text>
          <Text style={styles.whiteText2}>Andrey Thomson</Text>
        </View>
      </View>
      <View>
        <Text style={{color: "#fff", fontSize:"18px", marginTop: "5%", marginLeft: "5%", fontWeight: "600"}}>Services</Text>
        <View style={styles.servicesContainer}>
          {/* Row 1 */}
          <View style={styles.servicesRow}>
          <TouchableOpacity>
            <View style={styles.serviceItem}>
              <Image
                source={require("../assets/pic1.png")}
                style={styles.serviceImage}
              />
              <Text style={styles.serviceText}>Business</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.serviceItem}>
              <Image
                source={require("../assets/pic2.png")}
                style={styles.serviceImage}
              />
              <Text style={styles.serviceText}>Documentation</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.serviceItem}>
              <Image
                source={require("../assets/pic3.png")}
                style={styles.serviceImage}
              />
              <Text style={styles.serviceText}>Arbitrator</Text>
            </View>
            </TouchableOpacity>
          </View>
          {/* Row 2 */}
          <View style={styles.servicesRow}>
          <TouchableOpacity>
            <View style={styles.serviceItem}>
              <Image
                source={require("../assets/pic4.png")}
                style={styles.serviceImage}
              />
              <Text style={styles.serviceText}>Consultant</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.serviceItem}>
              <Image
                source={require("../assets/pic5.png")}
                style={styles.serviceImage}
              />
              <Text style={styles.serviceText}>Legal</Text>
            </View>
            </TouchableOpacity>
            <View style={styles.serviceItem}>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View>
      <Text style={{color: "#fff", fontSize:"18px", marginTop: "5%", marginLeft: "5%", fontWeight: "600"}}>Recommended Lawyers</Text>
      <View style={styles.recommendedLawyersContainer}>
      <TouchableOpacity>
          <View style={styles.recommendedLawyer}>
            <Image
              source={require("../assets/pic6.png")}
              style={styles.recommendedLawyerImage}
            />
            <Text style={styles.recommendedLawyerText}>Ritika Sharma</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.recommendedLawyer}>
            <Image
              source={require("../assets/pic7.png")}
              style={styles.recommendedLawyerImage}
            />
            <Text style={styles.recommendedLawyerText}>Simran Sinha</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.recommendedLawyer}>
            <Image
              source={require("../assets/pic8.png")}
              style={styles.recommendedLawyerImage}
            />
            <Text style={styles.recommendedLawyerText}>Chetan Aggarwal</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
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
  },
  icon: {
    marginHorizontal: 5,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: "center",
    marginLeft: '5%',
    gap: '15px',
  },
  image: {
    width: 40,
    height: 40,
  },
  whiteText1: {
    color: "#786f8f",
    fontSize: '13px',
  },
  whiteText2: {
    color: "white",
    fontSize: '17px',
    fontWeight: '600',
  },
  servicesContainer: {
    paddingLeft: '20px',
    margin: '10px',
    backgroundColor: '#133445',
    paddingTop: "10px",
    borderRadius: '20px',
    width: '95%',
  },
  serviceText: {
    color: "#fff",
    marginLeft: "5%",
    fontSize: "10px",
  },
  services: {
    flexDirection: "column", 
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  servicesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
    gap: '50px',
  },
  serviceItem: {
    alignItems: "center",
  },
  serviceImage: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginBottom: 10,
  },
  serviceTitle: {
    color: "#fff",
    fontSize: 16,
  },
  seeAllButton: {
    marginTop: '10px',
    marginLeft: '7px',
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: "#4f4c57",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e2dcf2",
  },
  seeAllText: {
    color: "#000",
    fontSize: 12,
  },
  recommendedLawyersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginLeft: "5%",
    marginTop: 10,
  },
  recommendedLawyer: {
    alignItems: "center",
  },
  recommendedLawyerImage: {
    width: 100,
    height: 130,
    borderRadius: 5,
    marginBottom: 10,
    position: "relative",
  },
  recommendedLawyerText: {
    position: "absolute",
    bottom: 25,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#fff",
    fontSize: 10,
  },
});
