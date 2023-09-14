import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { loginUser } from '../services/AuthService';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await loginUser(email, password);
            // Navigate to the HomeScreen or the next screen in your app
            navigation.navigate('Home');
        } catch (error) {
            // Handle login error (e.g., display an error message)
            console.error('Login failed:', error);
        }
    };

    return (
        <View>
            <Text>Login to Your Account</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
            <Button
                title="Don't have an account? Register here"
                onPress={() => navigation.navigate('Registration')}
            />
        </View>
    );
};

export default LoginScreen;
