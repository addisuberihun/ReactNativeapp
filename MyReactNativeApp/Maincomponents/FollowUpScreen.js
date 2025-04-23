import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FollowUpScreen = ({ route, navigation }) => {
  const { city, language } = route.params || { city: "Unknown", language: "en" };

  const texts = {
    en: {
      welcome: "Welcome to the National Exam Preparation Platform!",
      description: `You selected: ${city}. Gain invaluable skills and resources.\nAsk any question to the chatbot for automated assistance.`,
      signup: "SIGN UP",
      login: "LOGIN",
    },
    am: {
      welcome: "ወደ ብሔራዊ የመርመሪያ ፍላጎት መድረክ በደህና መጡ!",
      description: `እርስዎ የመረጡት፡ ${city} ነው። ዋጋ ያለ እውቀት እና ምክር ያግኙ።\nበቻቦት ጥያቄ ያቅርቡ።`,
      signup: "ይመዝገቡ",
      login: "ይግቡ",
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

      {/* Welcome Message */}
      <Text style={styles.welcomeText}>{lang.welcome}</Text>
      <Text style={styles.descriptionText}>{lang.description}</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
       <TouchableOpacity
  style={styles.signUpButton}
  onPress={() => navigation.navigate('SignUpScreen', { city, language })}
>
  <Text style={styles.buttonText}>{lang.signup}</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.loginButton}
  onPress={() => navigation.navigate('LoginScreen', { city, language })}
>
  <Text style={styles.buttonText}>{lang.login}</Text>
</TouchableOpacity>

      </View>
    </View>
  );
};

export default FollowUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: { marginBottom: 20 },
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
  textN: { position: 'absolute', top: 0, fontSize: 30, fontWeight: 'bold' },
  textE1: { position: 'absolute', left: 0, fontSize: 30, fontWeight: 'bold' },
  textE2: { position: 'absolute', right: 0, fontSize: 30, fontWeight: 'bold' },
  textP: { position: 'absolute', bottom: 0, fontSize: 30, fontWeight: 'bold' },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  signUpButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
