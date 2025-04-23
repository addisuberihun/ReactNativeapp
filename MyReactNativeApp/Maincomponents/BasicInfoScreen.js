import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker, Alert } from 'react-native';

const BasicInfoScreen = ({ route, navigation }) => {
  const { language = 'en' } = route.params || {}; // Default to English if language is not provided
  const [stream, setStream] = useState('');
  const [school, setSchool] = useState('');

  const texts = {
    en: {
      header: "Basic Information",
      stream: "Select Stream",
      school: "Enter School Name",
      complete: "COMPLETE",
      success: "Information submitted successfully!",
      error: "Submission failed. Please try again.",
    },
    am: {
      header: "መሠረታዊ መረጃ",
      stream: "መስመር ይምረጡ",
      school: "የትምህርት ቤት ስም ያስገቡ",
      complete: "ማጠናቀቂያ",
      success: "መረጃ ተሳክቷል!",
      error: "መረጃ መስጠት አልተሳካም። እባክዎን ደግመው ይሞክሩ።",
    },
  };

  const lang = texts[language];

  const handleComplete = () => {
    if (stream && school) {
      Alert.alert(lang.success);
      navigation.navigate('Dashboard'); // Replace 'Dashboard' with your actual next screen
    } else {
      Alert.alert(lang.error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{lang.header}</Text>

      {/* Stream Picker */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>{lang.stream}:</Text>
        <Picker
          selectedValue={stream}
          style={styles.picker}
          onValueChange={(itemValue) => setStream(itemValue)}
        >
          <Picker.Item label={language === 'am' ? 'መስመር ይምረጡ' : 'Select your stream'} value="" />
          <Picker.Item label={language === 'am' ? '9ኛ እስከ 12ኛ: በርካታ መስመር' : 'Grade 9 to 12: Natural'} value="Natural" />
          <Picker.Item label={language === 'am' ? '9ኛ እስከ 12ኛ: ማኅበረሰባዊ መስመር' : 'Grade 9 to 12: Social'} value="Social" />
        </Picker>
      </View>

      {/* School Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>{lang.school}:</Text>
        <TextInput
          style={styles.input}
          placeholder={lang.school}
          placeholderTextColor="#888"
          value={school}
          onChangeText={setSchool}
        />
      </View>

      {/* Complete Button */}
      <TouchableOpacity style={styles.completeButton} onPress={handleComplete}>
        <Text style={styles.buttonText}>{lang.complete}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasicInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#333',
  },
  completeButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
