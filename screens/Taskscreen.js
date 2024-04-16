import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import { Calendar } from "react-native-big-calendar";
import { TaskContext } from "../TaskContext";
import ScrollPicker from "react-native-wheel-scrollview-picker";

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
  const [note, setNote] = useState("");

  const { task, setTask } = useContext(TaskContext);

  const currentYear = new Date().getFullYear();

  const range = (start, end) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const months = range(1, 12);
  const days = range(1, 31);
  const hours = range(0, 24);
  const minutes = range(0, 60);

  const eventNotes = (
    <View style={{ marginTop: 3 }}>
      <Text style={{ fontSize: 10, color: "white" }}>{note}</Text>
    </View>
  );

  const confirmTaskDelete = (dateToDelete) => {
    Alert.alert(
      "Remove Task",
      "Are you sure you want to remove this task?",
      [
        { text: "Cancel" },
        {
          text: "Yes",
          onPress: () => removeTask(dateToDelete),
        },
      ],
      { cancelable: true }
    );
  };

  const removeTask = (dateToRemove) => {
    const newTasks = task.filter((event) => event.title !== dateToRemove.title);

    setTask(newTasks);
    console.log(dateToRemove.title);
  };

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
      children: eventNotes,
    };

    // Everytime a task is added, sort the array to show closests events first
    setTask((prevTasks) =>
      [...prevTasks, taskToAdd].sort((a, b) => a.start - b.start)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TitleHeader navigation={navigation}>Tasks</TitleHeader>
      {toggleTask ? (
        <View>
          <Calendar
            events={task}
            height={500}
            mode="schedule"
            onPressEvent={(date) => confirmTaskDelete(date)}
          />
          <Button
            title="Add a task"
            color={"#B8664A"}
            onPress={() => setToggleTask(false)}
          />
        </View>
      ) : (
        <View style={styles.customTaskContainer}>
          <ScrollView style={styles.customTaskInputContainer}>
            <Text style={styles.textLabel}>Task Title</Text>
            <TextInput
              style={styles.titleInput}
              value={title}
              placeholder="Title..."
              onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.textLabel}>Month Start/End</Text>
            <View style={styles.startEndContainer}>
              <ScrollPicker
                dataSource={months}
                wrapperHeight={80}
                wrapperBackground="#E2BFB3"
                highlightBorderWidth={3}
                highlightColor="#B8664A"
                onValueChange={(value) => setStartMonth(value - 1)}
              />
              <ScrollPicker
                dataSource={months}
                wrapperHeight={80}
                wrapperBackground="#E2BFB3"
                highlightBorderWidth={3}
                highlightColor="#B8664A"
                onValueChange={(value) => setEndMonth(value - 1)}
              />
            </View>
            <Text style={styles.textLabel}>Day Start/End</Text>
            <View style={styles.startEndContainer}>
              <ScrollPicker
                dataSource={days}
                wrapperHeight={80}
                wrapperBackground="#E2BFB3"
                highlightBorderWidth={3}
                highlightColor="#B8664A"
                onValueChange={(value) => setStartDay(value)}
              />
              <ScrollPicker
                dataSource={days}
                wrapperHeight={80}
                wrapperBackground="#E2BFB3"
                highlightBorderWidth={3}
                highlightColor="#B8664A"
                onValueChange={(value) => setEndDay(value)}
              />
            </View>
            <Text style={styles.textLabel}>Start Time</Text>
            <View style={styles.startEndContainer}>
              <ScrollPicker
                dataSource={hours}
                wrapperHeight={80}
                wrapperBackground="#E2BFB3"
                highlightBorderWidth={3}
                highlightColor="#B8664A"
                onValueChange={(value) => setStartHour(value)}
              />
              <ScrollPicker
                dataSource={minutes}
                wrapperHeight={80}
                wrapperBackground="#E2BFB3"
                highlightBorderWidth={3}
                highlightColor="#B8664A"
                onValueChange={(value) => setStartMinutes(value)}
              />
            </View>
            <Text style={styles.textLabel}>End Time</Text>
            <View style={styles.startEndContainer}>
              <ScrollPicker
                dataSource={hours}
                wrapperHeight={80}
                wrapperBackground="#E2BFB3"
                highlightBorderWidth={3}
                highlightColor="#B8664A"
                onValueChange={(value) => setEndHour(value)}
              />
              <ScrollPicker
                dataSource={minutes}
                wrapperHeight={80}
                wrapperBackground="#E2BFB3"
                highlightBorderWidth={3}
                highlightColor="#B8664A"
                onValueChange={(value) => setEndMinutes(value)}
              />
            </View>

            {/* Add Notes */}
            <TextInput
              value={note}
              placeholder="Notes..."
              onChangeText={(text) => setNote(text)}
              style={styles.notesInput}
            />
            <Button
              title="Add Task"
              color={"#B8664A"}
              onPress={() => addTask()}
            />
          </ScrollView>
          <Button
            title="Go Back"
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
  customTaskInputContainer: {
    margin: 12,
    display: "flex",
    backgroundColor: "#E2BFB3",
    borderRadius: 12,
  },
  customTaskInput: {
    borderWidth: 2,
    borderColor: "#B8664A",
    flex: 1,
    padding: 7,
  },
  titleInput: {
    borderWidth: 2,
    borderColor: "#B8664A",
    borderRadius: 12,
    padding: 7,
    margin: 5,
    marginHorizontal: 12,
    height: 40,
  },
  notesInput: {
    backgroundColor: "#F0D1C7",
    padding: 6,
    height: 150,
  },
  startEndContainer: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 12,
    // justifyContent: "space-between",
  },
  textLabel: {
    marginHorizontal: 24,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 12,
  },
});
