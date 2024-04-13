import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import React from "react";
import TitleHeader from "../components/TitleHeader";

export default function Calendarscreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TitleHeader navigation={navigation}>Calendar</TitleHeader>
      {/* TODO: CALENDAR THAT WILL DISPLAY ALL UPCOMING TASKS */}
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
