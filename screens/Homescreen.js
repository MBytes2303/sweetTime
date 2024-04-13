import { SafeAreaView, StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";

import TitleHeader from "../components/TitleHeader";

export default function Homescreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TitleHeader navigation={navigation}>Home</TitleHeader>
      {/* TODO: STYLE AS A DASHBOARD AS A BRIEF OVERVIEW OF EVERYTHING */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEECE2",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
