import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function TitleHeader({ children, navigation }) {
  return (
    <View style={style.header}>
      <Text style={style.headertext}>{children}</Text>
      <Pressable onPress={() => navigation.navigate("Setting")}>
        <MaterialIcons name="settings" size={36} />
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    backgroundColor: "#FFBE98",
    padding: 10,
    paddingLeft: 64,
    paddingTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headertext: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
