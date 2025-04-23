import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';

const LoginScreen = ({ route, navigation }) => {
  const { language } = route.params || { language: 'en' };
  const [usePhone, setUsePhone] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [password, setPassword] = useState('');

  const texts = {
    en: {
      header: 'Login to Your Account',
      userInput: usePhone ? 'Phone Number' : 'Email',
      password: 'Password',
      login: 'LOGIN',
      forgotPassword: 'Forgot Password?',
      usePhone: 'Use Phone',
      useEmail: 'Use Email',
    },
    am: {
      header: 'ወደ መለያዎ ይግቡ',
      userInput: usePhone ? 'የስልክ ቁጥር' : 'ኢሜል',
      password: 'የይለፍ ቃል',
      login: 'ግባ',
      forgotPassword: 'የይለፍ ቃል ረሳት?',
      usePhone: 'ስልክ ተጠቀም',
      useEmail: 'ኢሜል ተጠቀም',
    },
  };

  const lang = texts[language];

  const handlePhoneChange = (text) => {
    const cleaned = text.replace(/[^0-9]/g, '').slice(0, 9);
    setUserInput(cleaned);
  };

  const handleLogin = async () => {
    if (!userInput || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      const response = await axios.post('http://192.168.137.149:5000/api/auth/login', {
        userInput: usePhone ? '+251' + userInput : userInput,
        password,
      });

      Alert.alert('Success', response.data.message);
      // Example: navigate to dashboard
      // navigation.navigate('HomeScreen', { user: response.data.user });
      navigation.navigate('BasicInfoScreen', { language });
    } catch (error) {
      Alert.alert('Login Failed', error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{lang.header}</Text>

      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>{usePhone ? lang.usePhone : lang.useEmail}</Text>
        <Switch
          value={usePhone}
          onValueChange={setUsePhone}
          trackColor={{ false: '#ccc', true: '#28a745' }}
          thumbColor="#fff"
        />
      </View>

      <View style={styles.inputGroup}>
        <FontAwesome name="user" size={24} color="#888" style={styles.icon} />
        {usePhone && <Text style={styles.phonePrefix}>+251</Text>}
        <TextInput
          style={styles.input}
          placeholder={lang.userInput}
          placeholderTextColor="#888"
          value={userInput}
          onChangeText={usePhone ? handlePhoneChange : setUserInput}
          keyboardType={usePhone ? 'numeric' : 'email-address'}
        />
      </View>

      <View style={styles.inputGroup}>
        <FontAwesome name="lock" size={24} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={lang.password}
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>{lang.forgotPassword}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>{lang.login}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  switchText: {
    marginRight: 10,
    fontSize: 16,
    color: '#333',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 50,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  phonePrefix: {
    fontSize: 16,
    color: '#333',
    marginRight: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  forgotPassword: {
    marginBottom: 20,
    width: '100%',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#007bff',
    textAlign: 'right',
  },
  loginButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
