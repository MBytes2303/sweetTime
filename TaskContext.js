import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  // month starts from 0 (january = 0, feb = 1, march = 2, ...)
  // REMOVE meeting event, only for testing
  const [task, setTask] = useState([
    {
      title: "Meeting",
      start: new Date(2024, 3, 17, 10, 0),
      end: new Date(2024, 3, 17, 12, 0),
    },
  ]);

  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};
