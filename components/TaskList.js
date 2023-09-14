import React, { useState } from 'react';
import { View, Text, FlatList, Button, TextInput } from 'react-native';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskTitle, setTaskTitle] = useState('');

    const addTask = () => {
        const newTask = { id: tasks.length + 1, title: taskTitle, completed: false };
        setTasks([...tasks, newTask]);
        setTaskTitle('');
    };

    const markTaskComplete = (taskId) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed: true } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    return (
        <View>
            <Text>Task List</Text>
            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                        {!item.completed && (
                            <Button title="Mark Complete" onPress={() => markTaskComplete(item.id)} />
                        )}
                        <Button title="Delete" onPress={() => deleteTask(item.id)} />
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
            <TextInput
                placeholder="Task Title"
                value={taskTitle}
                onChangeText={setTaskTitle}
            />
            <Button title="Add Task" onPress={addTask} />
        </View>
    );
};

export default TaskList;
