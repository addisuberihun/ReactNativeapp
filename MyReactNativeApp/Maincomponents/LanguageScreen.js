import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LanguageScreen = ({ navigation }) => {
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

      {/* Language Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CityScreen', { language: 'en' })}
        >
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CityScreen', { language: 'am' })}
        >
          <Text style={styles.buttonText}>አማርኛ</Text>
        </TouchableOpacity>
      </View>

      {/* Privacy Link */}
      <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
        <Text style={styles.privacyText}>Privacy policy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  logoContainer: { marginBottom: 50 },
  outerCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fef2f2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textN: { position: 'absolute', top: 0, fontSize: 30 },
  textE1: { position: 'absolute', left: 0, fontSize: 30 },
  textE2: { position: 'absolute', right: 0, fontSize: 30 },
  textP: { position: 'absolute', bottom: 0, fontSize: 30 },
  buttonContainer: { flexDirection: 'row', gap: 20, marginVertical: 30 },
  button: { borderWidth: 1, padding: 10, borderRadius: 10 },
  buttonText: { fontSize: 18 },
  privacyText: { color: 'blue', fontSize: 18 }
});
