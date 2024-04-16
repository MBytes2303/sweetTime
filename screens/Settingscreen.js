// Settingscreen.js
import React from "react";
import { View, StyleSheet, Switch, Text } from "react-native";
import { useColors } from "../components/useColors";

const Settingscreen = ({ isDarkMode, toggleDarkMode }) => {
  const { background, text } = useColors(isDarkMode);

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      {/* Dark/Light mode toggle */}
      <View style={[styles.header, styles.darkModeToggle]}>
        <Text style={styles.darkModeText}>Dark/Light mode</Text>
        <View style={styles.toggleContainer}>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>
      </View>
      <Text style={{color: text}}>Testing color</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  darkModeToggle: {
    flexDirection: "row",
    alignItems: "center",
  },
  darkModeText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 8, // Adjust the spacing between text and toggle button
  },
  toggleContainer: {
    marginLeft: "auto", // Align the toggle button to the right
  },
});

export default Settingscreen;
