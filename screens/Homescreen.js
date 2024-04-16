import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import TitleHeader from "../components/TitleHeader";
import { useColors } from "../components/useColors";

const Homescreen = ({ navigation }) => {
  const { background } = useColors();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: background }]}>
      <TitleHeader navigation={navigation}>Home</TitleHeader>
      {/* TODO: STYLE AS A DASHBOARD AS A BRIEF OVERVIEW OF EVERYTHING */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default Homescreen;
