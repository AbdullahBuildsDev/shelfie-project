import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router';

const RootLayout = () => {
    return (
        <Stack screenOptions={{
            headerStyle: { backgroundColor: '#c5badb' }, // 6-digit hex code use karein
            headerTintColor: '#333'
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