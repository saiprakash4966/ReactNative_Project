import React from 'react';
import { View, Text, Button } from 'react-native';

const TaskItem = ({ task, onMarkComplete, onDelete }) => {
    return (
        <View>
            <Text style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>
                {task.title}
            </Text>
            <Button
                title={task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                onPress={() => onMarkComplete(task.id)}
            />
            <Button title="Delete" onPress={() => onDelete(task.id)} />
        </View>
    );
};

export default TaskItem;
