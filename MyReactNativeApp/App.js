import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LanguageScreen from './Maincomponents/LanguageScreen';
import CityScreen from './Maincomponents/CityScreen';
import FollowUpScreen from './Maincomponents/FollowUpScreen';
import PrivacyPolicy from './Maincomponents/PrivacyPolicy';
import SignUpScreen from './Maincomponents/SignUpScreen';
import LoginScreen from './Maincomponents/LoginScreen';
import BasicInfoScreen from './Maincomponents/BasicInfoScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
   
      <Stack.Navigator initialRouteName="LanguageScreen">
        <Stack.Screen name="LanguageScreen" component={LanguageScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CityScreen" component={CityScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FollowUpScreen" component={FollowUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ title: 'Privacy Policy' }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: 'SignUpScreen' }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'LoginScreen' }} />
         <Stack.Screen name="BasicInfoScreen" component={BasicInfoScreen} options={{ title: 'BasicInfoScreen' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
