import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../screen/Home';
import Profile from '../screen/profile'


const Tab = createBottomTabNavigator();


const Tabs = ({ navigation }) =>{
  return(
    <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color="#A7D397" size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color="#A7D397" size={size} />
        ),
      }}
    />
  </Tab.Navigator>
  );
}


export default Tabs;