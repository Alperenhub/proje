import {SafeAreaView, Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import SingUp from '../screens/SingUp';
import User from '../screens/User';
import Hello from '../screens/Hello';
import CarouselItem from '../screens/carouselFold/CarouselItem';
import Kvkk from '../screens/Kvkk';
import Quiz from '../screens/Quiz';

const AppStack = () => {

    const Stack = createStackNavigator();


  return (
<Stack.Navigator>

  <Stack.Screen name="Hello" component={Hello} options={{ headerShown: false }} />
  <Stack.Screen name="Quiz" component={Quiz} initialParams={{ amount: 10 }} options={{ headerShown: false }} />
  <Stack.Screen name="CarouselItem" component={CarouselItem} options={{ headerShown: false }} />

  <Stack.Screen name="SignUp" component={SingUp} options={{ headerShown: false }} />
  <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
  <Stack.Screen name="User" component={User} options={{ headerShown: false }} />
  <Stack.Screen name="Kvkk" component={Kvkk} options={{ headerShown: false }} />
</Stack.Navigator>
  )
}

export default AppStack