import {SafeAreaView, Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppStack from './navigation/AppStack';


NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {

  const [fontsLoaded] = useFonts({
    'Comfortaa': require('./assets/fonts/Comfortaa-Regular.ttf'),
  });


  return (
    <NavigationContainer>


    <AppStack/>

  </NavigationContainer>
  );
}
