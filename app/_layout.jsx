import { StyleSheet, Text, useColorScheme, View } from 'react-native'

import { Stack } from 'expo-router';
import { Colors } from "../constants/colors"


const RootLayout = () => {
    const colorScheme = useColorScheme()
    console.log(colorScheme)
    const theme = Colors[colorScheme] ?? Colors.automatic

    return (
        <Stack screenOptions={{   
            headerStyle: { backgroundColor: theme.background  }, 
            headerTintColor: theme.text
        }}>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="about" options={{ title: 'About' }} /> 
            <Stack.Screen name="contact" options={{ title: 'Contact', headerShown: false }} />  
        </Stack>
    );
}

export default RootLayout;
/*
Stack
|etc
|etc
|Contact        
|About
|Index
-------------
*/