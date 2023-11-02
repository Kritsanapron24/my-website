import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

import Home from '../screen/Home';
import Profile from '../screen/profile'


// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();


const Tabs = ({ navigation }) => {
  return (
    <Tab.Navigator //activeColor="#f0edf6"
      tabBarOptions={{
        activeTintColor: '#fff',
        
        labelStyle: {
          fontSize: 20,
        },
      }}
      barStyle={styles.tabbarStyle}
    >
      <Tab.Screen
        name="หน้าหลัก"
        component={Home}
        options={{
          tabBarColor:true,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="โปรไฟล์"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  tabbarStyle: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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

