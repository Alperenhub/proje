import {SafeAreaView, Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import Carouselt from './screens/Carousel';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <SafeAreaView className='h-screen bg-slate-500'>
      <Carouselt/>
    </SafeAreaView>
  );
}
