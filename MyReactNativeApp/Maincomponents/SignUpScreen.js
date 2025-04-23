import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';

const SignUpScreen = ({ route, navigation }) => {
  const { language = 'en', city = '' } = route.params || {};
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const texts = {
    en: {
      header: "National Exam Preparation Platform",
      username: "Username",
      email: "Email",
      phone: "Phone Number",
      password: "Password",
      signup: "SIGN UP",
      success: "Signup successful!",
      error: "Signup failed. Please try again.",
    },
    am: {
      header: "ብሔራዊ የመርመሪያ ፍላጎት መድረክ",
      username: "የተጠቃሚ ስም",
      email: "ኢሜል",
      phone: "የስልክ ቁጥር",
      password: "የይለፍ ቃል",
      signup: "ይመዝገቡ",
      success: "መመዝገብያ ተሳክቷል!",
      error: "መመዝገብያ አልተሳካም። እባክዎን ደግመው ይሞክሩ።",
    },
  };

  const lang = texts[language];

  const handlePhoneNumberChange = (text) => {
    if (/^\d{0,9}$/.test(text)) {
      setPhoneNumber(text);
    }
  };

 const handleSignUp = async () => {
  try {
    const response = await axios.post(`http://192.168.137.149:5000/api/auth/signup`, {
      username,
      email,
      phoneNumber,
      password,
    });
 console.log("SignUp Success:", response.data);
    if (response.status === 201) {
      Alert.alert(lang.success);
      navigation.navigate('BasicInfoScreen', { language });
       navigation.navigate('BasicInfoScreen', { user: response.data.user });
    } else {
      Alert.alert(lang.error);
    }
  } catch (error) {
    if (error.response) {
      console.error('Response Error:', error.response.data);
      Alert.alert(`${lang.error} ${error.response.data.message}`);
    } else if (error.request) {
      console.error('Request Error:', error.request);
      Alert.alert(`${lang.error} No response from server.`);
    } else {
      console.error('Error:', error.message);
      Alert.alert(`${lang.error} ${error.message}`);
    }
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{lang.header}</Text>

      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <FontAwesome name="user" size={24} color="#888" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder={lang.username}
            placeholderTextColor="#888"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.inputGroup}>
          <MaterialIcons name="email" size={24} color="#888" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder={lang.email}
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.countryCode}>+251</Text>
          <TextInput
            style={styles.input}
            placeholder={lang.phone}
            placeholderTextColor="#888"
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            keyboardType="number-pad"
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
            secureTextEntry={true}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.buttonText}>{lang.signup}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

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
  formContainer: {
    width: '100%',
    marginBottom: 20,
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
  },
  countryCode: {
    fontSize: 16,
    color: '#333',
    marginRight: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  signUpButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
