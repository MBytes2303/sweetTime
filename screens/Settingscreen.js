import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import React from "react";

export default function Settingscreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/*TODO: ADD DARK MODE SETTING HERE */}
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
