import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import layouts from '../constants/Layout';

// *****
// ***** Obs.: Este componente será usado quando resolver o problema do
// *****       Drawer Navigation das telas de SignIn e SignUp.
// *****

export default function DrawerContentScreen() {
    return (
        <SafeAreaProvider>
            <StatusBar hidden={true} />
            <View>
                <Text>Vai, Garoto! W: {layouts.window.width}</Text>
            </View>
        </SafeAreaProvider>
    );
}