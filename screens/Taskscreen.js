import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import React from "react";
import TitleHeader from "../components/TitleHeader";

export default function Taskscreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TitleHeader navigation={navigation}>Tasks</TitleHeader>
      {/* TODO: ADD TASKS THAT DYNAMICALLY AFFECTS THE CALENDAR */}
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
