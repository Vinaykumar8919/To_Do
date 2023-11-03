 import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginForm = ({ onLogin }) => {
  // Use state to capture email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Create a function to handle login
  const handleLogin = () => {
    onLogin(email, password);
  };

  return (
    <View>
      <Text>Login Page</Text>
      {/* Add input fields for email and password */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {/* Create a button for login and connect it to the handleLogin function */}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginForm;
