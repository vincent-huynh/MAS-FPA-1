import React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";

const sampleTask = [
  {
    title: "Sample Task 1",
    description: "Additional description for Task 1",
    id: "1",
  },
  {
    title: "Sample Task 2",
    description: "Additional description for Task 2",
    id: "2",
  },
  {
    title: "Sample Task 3",
    description: "Additional description for Task 3",
    id: "3",
  },
  {
    title: "Sample Task 4",
    description: "Additional description for Task 4",
    id: "4",
  },
  {
    title: "Sample Task 5",
    description: "Additional description for Task 5",
    id: "5",
  },
  {
    title: "Sample Task 6",
    description: "Additional description for Task 6",
    id: "6",
  },
  {
    title: "Sample Task 7",
    description: "Additional description for Task 7",
    id: "7",
  },
  {
    title: "Sample Task 8",
    description: "Additional description for Task 8",
    id: "8",
  },
  {
    title: "Sample Task 9",
    description: "Additional description for Task 9",
    id: "9",
  },
];

export default TaskList = (props) => {
  const renderItem = ({ item }) => {
    return <TaskItem item={item} />;
  };

  let taskData = getAllTaskInfo();
  return (
    <View>
      <Text>List Begins</Text>
      <FlatList
        data={taskData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const TaskItem = ({ item }) => {
  const onPressHandler = () => {
    console.log("Task " + item.title + " Pressed");
  };

  return (
    <View>
      <Text style={styles.item} onPress={onPressHandler}>
        {item.title}
      </Text>
    </View>
  );
};

const getAllTaskInfo = () => {
  return sampleTask;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});