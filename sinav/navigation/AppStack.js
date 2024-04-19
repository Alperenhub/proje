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
  <Stack.Screen name="CarouselItem" component={CarouselItem} headerShown={false}/>
  <Stack.Screen name="Quiz" component={Quiz} initialParams={{amount: 10}} headerShown={false}/>
  <Stack.Screen name="SignUp" component={(props) => <SingUp {...props} />} headerShown={false}/>
  <Stack.Screen name="Login" component={(props) => <Login {...props} />} headerShown={false}/>
  <Stack.Screen name="User" component={User} headerShown={false}/>
  <Stack.Screen name="Kvkk" component={Kvkk} headerShown={false}/>
  <Stack.Screen name="Hello" component={Hello} headerShown={false}/>
</Stack.Navigator>
  )
}

export default AppStack