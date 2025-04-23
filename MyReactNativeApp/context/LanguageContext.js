import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
});

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState('en');

  // Load saved language on app start
  useEffect(() => {
    AsyncStorage.getItem('language').then(saved => {
      if (saved) setLanguageState(saved);
    });
  }, []);

  // Wrap setter to persist
  const setLanguage = async (lang) => {
    setLanguageState(lang);
    await AsyncStorage.setItem('language', lang);
  };

  // **Make sure to return ONLY this Provider**—no stray text!
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
