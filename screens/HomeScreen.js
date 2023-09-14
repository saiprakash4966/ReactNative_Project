import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Welcome to Your To-Do List App!</Text>
            <Button
                title="View Tasks"
                onPress={() => navigation.navigate('TaskList')}
            />
            {/* Add more functionality or buttons as needed */}
        </View>
    );
};

export default HomeScreen;
