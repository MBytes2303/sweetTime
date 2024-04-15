// Settingscreen.js
import React from "react";
import { SafeAreaView, StyleSheet, View, Button } from "react-native";

export default function Settingscreen({ setIsLoggedIn }) {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEECE2",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
