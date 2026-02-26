import { StyleSheet, Text, useColorScheme, View } from 'react-native'

import { Stack } from 'expo-router';
import { Colors } from "../constants/colors"


const RootLayout = () => {
    const colorScheme = useColorScheme()
    console.log(colorScheme)
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <Stack screenOptions={{   
            headerStyle: { backgroundColor: theme.background  }, 
            headerTintColor: theme.text
        }}>
             {/* Groups */}
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />

        {/* Individual Screens */}
            <Stack.Screen name="index" options={{ title: 'Home' }} />
        
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