import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CityScreen = ({ navigation, route }) => {
  const { language } = route.params || { language: 'en' };
  const [city, setCity] = useState('');

  const texts = {
    en: {
      question: "What city/town do you live in?",
      placeholder: "City",
      button: "Continue",
    },
    am: {
      question: "የምትኖሩበት ከተማ/ክፍለ ሀገር?",
      placeholder: "ከተማ",
      button: "ቀጥል",
    },
  };

  const lang = texts[language];

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <Text style={styles.textN}>N</Text>
            <Text style={styles.textE1}>E</Text>
            <Text style={styles.textE2}>P</Text>
            <Text style={styles.textP}>P</Text>
          </View>
        </View>
      </View>

      {/* Question */}
      <Text style={styles.questionText}>{lang.question}</Text>

      {/* Input */}
      <View style={styles.inputContainer}>
        <FontAwesome name="map-marker" size={20} color="black" style={{ marginRight: 8 }} />
        <TextInput
          style={styles.input}
          placeholder={lang.placeholder}
          placeholderTextColor="#999"
          value={city}
          onChangeText={setCity}
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate('FollowUpScreen', { city, language })}
        disabled={!city.trim()}
      >
        <Text style={styles.buttonText}>{lang.button}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: { marginBottom: 30 },
  outerCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fef2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textN: { position: 'absolute', top: 0, fontSize: 30 },
  textE1: { position: 'absolute', left: 0, fontSize: 30 },
  textE2: { position: 'absolute', right: 0, fontSize: 30 },
  textP: { position: 'absolute', bottom: 0, fontSize: 30 },
  questionText: { fontSize: 18, marginBottom: 15, textAlign: 'center' },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#aaa',
    alignItems: 'center',
    marginBottom: 25,
    width: '100%',
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  continueButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
