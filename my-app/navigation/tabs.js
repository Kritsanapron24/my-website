import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

import Home from '../screen/Home';
import Profile from '../screen/profile'
import Cart from '../screen/Cart'


// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();


const Tabs = ({ navigation }) => {
  return (
    <Tab.Navigator //activeColor="#f0edf6"
      tabBarOptions={{
        activeTintColor: '#6A9C89',

        labelStyle: {
          fontSize: 20,
        },
      }}
      barStyle={styles.tabbarStyle}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarColor: true,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'#45474B'} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarColor: true,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="basket" color={'#45474B'} size={30} />
          ),
        }}
      />


      

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={'#45474B'} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  tabbarStyle: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    height: 65,
    shadowOffset: {
      width: 10,
      height: 30,
    },
    shadowOpacity: 0.58,
    shadowRadius: 60.0,
    elevation: 10,
  },
});

export default Tabs;

