import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import Tabs from './navigation/tabs';
import Login from "./screen/login";
import Product from "./screen/product";
import Home from "./screen/Home";
import Product1 from "./screen/product1";
import Product2 from "./screen/product2";
import Product3 from "./screen/product3";
import Product4 from "./screen/product4";
import Product5 from "./screen/product5";
import Product6 from "./screen/product6";
import Product7 from "./screen/product7";
import Product8 from "./screen/product8";
import Product9 from "./screen/product9";
import Product10 from "./screen/product10";
import Product11 from "./screen/product11";
import Product12 from "./screen/product12";
import Product13 from "./screen/product13";
import Product14 from "./screen/product14";
import Product15 from "./screen/product15";
import Product16 from "./screen/product16";
import Product17 from "./screen/product17";
import Product18 from "./screen/product18";
import Cart from "./screen/Cart";
import profile from "./screen/profile";




const Stack = createStackNavigator();
const App = () => {


  const [fontsLoaded] = useFonts({
    'NotoSansThai-Regular': require('./assets/fonts/NotoSansThai-Regular.ttf'),
    
  });

  if (!fontsLoaded) {
    return null;
  }
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
        <Stack.Screen
        name="Product1"
        component={Product1}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="Product2"
        component={Product2}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="Product3"
        component={Product3}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="Product4"
        component={Product4}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="Product5"
        component={Product5}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="Product6"
        component={Product6}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="Product7"
        component={Product7}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="Product8"
        component={Product8}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="Product9"
        component={Product9}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="Product10"
        component={Product10}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="Product11"
        component={Product11}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="Product12"
        component={Product12}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="Product13"
        component={Product13}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="Product14"
        component={Product14}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="Product15"
        component={Product15}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="Product16"
        component={Product16}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="Product17"
        component={Product17}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="Product18"
        component={Product18}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}/>
        <Stack.Screen
        name="profile"
        component={profile}
        options={{headerShown: false}}/>
        
        
        

      </Stack.Navigator>

 
    </NavigationContainer>
  );
}

export default App;
