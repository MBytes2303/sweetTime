import { SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
import React, { useContext, useState } from "react";
import { Calendar } from "react-native-big-calendar";
import { TaskContext } from "../TaskContext";

import TitleHeader from "../components/TitleHeader";

export default function Calendarscreen({ navigation }) {
  const [calendarMode, setCalendarMode] = useState("week");

  const { task, setTask } = useContext(TaskContext);

  return (
    <SafeAreaView style={styles.container}>
      <TitleHeader navigation={navigation}>Calendar</TitleHeader>
      <View style={styles.mode}>
        <View style={{ flex: 1 }}>
          <Button
            title="Day"
            onPress={() => {
              setCalendarMode("day");
            }}
            color={"#B8664A"}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title="Week"
            onPress={() => {
              setCalendarMode("week");
            }}
            color={"#B8664A"}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title="Month"
            onPress={() => {
              setCalendarMode("month");
            }}
            color={"#B8664A"}
          />
        </View>
      </View>
      <Calendar events={task} height={400} mode={calendarMode} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEECE2",
  },
  mode: {
    flex: 1,
    flexGrow: 0.15,
    flexDirection: "row",
  },
});
