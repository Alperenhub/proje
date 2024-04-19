import {SafeAreaView, Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Login from './screens/Login';
// import SingUp from './screens/SingUp';
// import User from './screens/User';
// import Hello from './screens/Hello';
// import Carouselt from './screens/Carousel';
import { useFonts } from 'expo-font';
import AppStack from './navigation/AppStack';
// import CarouselItem from './screens/carouselFold/CarouselItem';
// import Kvkk from './screens/Kvkk';
// import Quiz from './screens/Quiz';

NativeWindStyleSheet.setOutput({
  default: "native",
});
// const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Comfortaa': require('./assets/fonts/Comfortaa-Regular.ttf'),
  });


  return (
    <NavigationContainer>
   {/* <Stack.Navigator>
  <Stack.Screen name="Quiz" component={Quiz} initialParams={{amount: 10}} headerShown={false}/>
  <Stack.Screen name="CarouselItem" component={CarouselItem} headerShown={false}/>
  <Stack.Screen name="SignUp" component={(props) => <SingUp {...props} />} headerShown={false}/>
  <Stack.Screen name="Login" component={(props) => <Login {...props} />} headerShown={false}/>
  <Stack.Screen name="User" component={User} headerShown={false}/>
  <Stack.Screen name="Kvkk" component={Kvkk} headerShown={false}/>
  <Stack.Screen name="Hello" component={Hello} headerShown={false}/>
</Stack.Navigator> */}

    <AppStack/>

  </NavigationContainer>
  );
}
