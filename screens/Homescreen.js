//Homescreen.js
import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import TitleHeader from "../components/TitleHeader";
import { useColors } from "../components/useColors";

const Homescreen = ({ navigation, isDarkMode }) => {
  const { background, text } = useColors(isDarkMode);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: background }]}>
      <TitleHeader navigation={navigation}>Home</TitleHeader>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/Quiz.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/Task.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={{ color: text }}>Testing color</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  image: {
    height: 200, // Adjust the height as needed
    width: "45%", // Adjust the width as needed
  },
});

export default Homescreen;
