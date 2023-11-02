import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from './navigation/tabs';
import Login from "./screen/login";
import Product from "./screen/product";
import Home from "./screen/Home";


const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}/>
       <Stack.Screen
        name="tabs"
        component={Tabs}
        options={{headerShown: false}}/>
       <Stack.Screen
        name="Product"
        component={Product}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}/>

      </Stack.Navigator>

 
    </NavigationContainer>
  );
}

export default App;
