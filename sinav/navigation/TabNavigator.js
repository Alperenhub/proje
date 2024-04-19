import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import User from '../screens/User';
import Hello from '../screens/Hello';
import Quiz from '../screens/Quiz';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="UserPage"
      shifting={true}
      sceneAnimationEnabled={false}
      activeColor="#ffffff"
      inactiveColor="#a0a0a0"
      barStyle={{ backgroundColor: '#6200ee' }}
      labeled={false}
    >
      <Tab.Screen name="UserPage" component={User} />
      <Tab.Screen name="HelloPage" component={Hello} />
      <Tab.Screen name="QuizPage" component={Quiz} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
