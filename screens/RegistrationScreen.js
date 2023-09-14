import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { registerUser } from '../services/AuthService';

const RegistrationScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = async () => {
        try {
            await registerUser(email, password);
            // Navigate to the LoginScreen or the next screen in your app
            navigation.navigate('Login');
        } catch (error) {
            // Handle registration error (e.g., display an error message)
            console.error('Registration failed:', error);
        }
    };

    return (
        <View>
            <Text>Register for an Account</Text>
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
            <Button title="Register" onPress={handleRegistration} />
            <Button
                title="Already have an account? Login here"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
};

export default RegistrationScreen;
