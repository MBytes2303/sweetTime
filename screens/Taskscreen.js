import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import React, { useContext } from "react";
import TitleHeader from "../components/TitleHeader";
import { Calendar } from "react-native-big-calendar";
import { TaskContext } from "../TaskContext";

export default function Taskscreen({ navigation }) {
  const { task, setTask } = useContext(TaskContext);

  return (
    <SafeAreaView style={styles.container}>
      <TitleHeader navigation={navigation}>Tasks</TitleHeader>
      {/* TODO: ADD TASKS THAT DYNAMICALLY AFFECTS THE CALENDAR */}
      <Calendar events={task} height={600} mode="schedule" />
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
