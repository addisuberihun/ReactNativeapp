import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState('en');

  // Load stored language on app start
  useEffect(() => {
    AsyncStorage.getItem('language').then(saved => {
      if (saved) setLanguageState(saved);
    });
  }, []);

  // When changing, persist it
  const setLanguage = async (lang) => {
    setLanguageState(lang);
    await AsyncStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
