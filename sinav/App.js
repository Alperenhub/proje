import {SafeAreaView, Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import Carouselt from './screens/Carousel';
import { useFonts } from 'expo-font';
import CarouselItem from './screens/carouselFold/CarouselItem';
import Hello from './screens/Hello';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {

  const [fontsLoaded] = useFonts({
    'Comfortaa': require('./assets/fonts/Comfortaa-Regular.ttf'),
  });


  return (
    <SafeAreaView >
      {/* <CarouselItem/> */}
      <Hello/>
    </SafeAreaView>
  );
}
