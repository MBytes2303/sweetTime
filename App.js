import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from 'react';
import { Button } from "react-native";

import { TaskProvider } from "./TaskContext";

import Loginscreen from "./screens/Loginscreen";
import Homescreen from "./screens/Homescreen";
import Taskscreen from "./screens/Taskscreen";
import Calendarscreen from "./screens/Calendarscreen";
import Settingscreen from "./screens/Settingscreen";


const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#CF7A48"
      inactiveColor="#979290"
      barStyle={{ backgroundColor: "#FFBE98" }}
    >
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Task"
        component={Taskscreen}
        options={{
          tabBarLabel: "Task",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendarscreen}
        options={{
          tabBarLabel: "Calendar",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="calendar-month" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Here you can implement your login logic
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {!isLoggedIn ? (
            <Stack.Screen
              name="Login"
              options={{ title: "Login" }}
            >
              {props => <Loginscreen {...props} handleLogin={handleLogin} />}
            </Stack.Screen>
          ) : (
            <Stack.Screen
              name="Main"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
          )}
          <Stack.Screen
            name="Setting"
            component={Settingscreen}
            options={{
              headerStyle: {
                backgroundColor: "#FFBE98",
              },
              headerTitleStyle: {
                fontSize: 32,
                fontWeight: "bold",
              },
              headerRight: () => (
                <Button
                  onPress={handleLogout}
                  title="Logout"
                  color="#FF0000"
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}
