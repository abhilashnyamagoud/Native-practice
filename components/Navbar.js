import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from "./About";

const Stack = createNativeStackNavigator();

const Navbar=(props)=>{

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="About" component={About} options={{title:"Wecome"}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navbar
