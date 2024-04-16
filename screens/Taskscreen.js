import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import { Calendar } from "react-native-big-calendar";
import { TaskContext } from "../TaskContext";

export default function Taskscreen({ navigation }) {
  const [toggleTask, setToggleTask] = useState(true);

  // const currentDate = new Date();

  const [title, setTitle] = useState("");
  const [startMonth, setStartMonth] = useState(0);
  const [endMonth, setEndMonth] = useState(0);
  const [startDay, setStartDay] = useState(0);
  const [endDay, setEndDay] = useState(0);
  const [startHour, setStartHour] = useState(0);
  const [endHour, setEndHour] = useState(0);
  const [startMinutes, setStartMinutes] = useState(0);
  const [endMinutes, setEndMinutes] = useState(0);

  const { task, setTask } = useContext(TaskContext);

  const currentYear = new Date().getFullYear();

  const addTask = () => {
    const taskToAdd = {
      title: title,
      start: new Date(
        currentYear,
        startMonth,
        startDay,
        startHour,
        startMinutes
      ),
      end: new Date(currentYear, endMonth, endDay, endHour, endMinutes),
    };

    // Everytime a task is added, sort the array to show closests events first
    setTask((prevTasks) =>
      [...prevTasks, taskToAdd].sort((a, b) => a.start - b.start)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TitleHeader navigation={navigation}>Tasks</TitleHeader>
      {/* TODO: ADD TASKS THAT DYNAMICALLY AFFECTS THE CALENDAR */}
      {toggleTask ? (
        <>
          <Calendar events={task} height={600} mode="schedule" />
          <Button
            title="Add a task"
            color={"#B8664A"}
            onPress={() => setToggleTask(false)}
          />
        </>
      ) : (
        <View style={styles.customTaskContainer}>
          {/* Need input fields for: Month, Day, Hours, Minutes */}
          <ScrollView style={styles.customTaskInputContainer}>
            <TextInput
              style={styles.titleInput}
              value={title}
              placeholder="Title..."
              onChangeText={(text) => setTitle(text)}
            />
            <View style={styles.startEndContainer}>
              <TextInput
                style={styles.customTaskInput}
                value={startMonth}
                placeholder="Month..."
                onChangeText={(num) => setStartMonth(parseInt(num) - 1)}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.customTaskInput}
                value={endMonth}
                placeholder="Month..."
                onChangeText={(num) => setEndMonth(parseInt(num) - 1)}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.startEndContainer}>
              <TextInput
                style={styles.customTaskInput}
                value={startDay}
                placeholder="Day..."
                onChangeText={(num) => setStartDay(num)}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.customTaskInput}
                value={endDay}
                placeholder="Day..."
                onChangeText={(num) => setEndDay(num)}
                keyboardType="numeric"
              />
            </View>
            <Text>Start Time</Text>
            <View style={styles.startEndContainer}>
              <TextInput
                style={styles.customTaskInput}
                value={startHour}
                placeholder="Hour"
                onChangeText={(num) => setStartHour(num)}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.customTaskInput}
                value={startMinutes}
                placeholder="Minutes"
                onChangeText={(num) => setStartMinutes(num)}
                keyboardType="numeric"
              />
            </View>
            <Text>End Time</Text>
            <View style={styles.startEndContainer}>
              <TextInput
                style={styles.customTaskInput}
                value={endHour}
                placeholder="Hour"
                onChangeText={(num) => setEndHour(num)}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.customTaskInput}
                value={endMinutes}
                placeholder="Hour"
                onChangeText={(num) => setEndMinutes(num)}
                keyboardType="numeric"
              />
            </View>
            {/* Add Notes */}
            {/* <TextInput
              value={title}
              placeholder="Notes..."
              onChangeText={(text) => setTitle(text)}
            /> */}
            <Button
              title="Add Task"
              color={"#B8664A"}
              onPress={() => addTask()}
            />
          </ScrollView>
          <Button
            title="Cancel"
            color={"#B8664A"}
            onPress={() => setToggleTask(true)}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEECE2",
  },
  customTaskContainer: {
    flex: 1,
  },
  customTaskInputContainer: { padding: 12, flex: 1 },
  customTaskInput: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    height: 35,
    width: 150,
    marginHorizontal: 20,
  },
  titleInput: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    marginHorizontal: 20,
    height: 35,
  },
  startEndContainer: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 12,
    // justifyContent: "space-between",
  },
});