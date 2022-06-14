import * as React from 'react';
import { View, Text,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from "./src/screens/Login";
import Home from './src/screens/Home';


const Stack= createStackNavigator()

 export default function App() {

    return(
    
    <NavigationContainer>
        <StatusBar backgroundColor="#87c137"/>
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={TelaInicial}
                options={{headerShown:false}}
            />
            <Stack.Screen 
                name="Home"
                component={Home}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
    </NavigationContainer>


    );
}
