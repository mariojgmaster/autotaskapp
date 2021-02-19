import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import {
	SignInScreen,
	SignUpScreen,
	DashBoard,
	MenuScreen,
	DeviceScreen
} from './navigation/index';

// const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

export default class App extends React.Component {
	render() {
		return (
			<NavigationContainer>
				<StatusBar hidden={true} />
				<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
					<Stack.Screen name="SignIn" component={SignInScreen} />
					<Stack.Screen name="SignUp" component={SignUpScreen} />
					<Stack.Screen name="DashBoard" component={DashBoard} />
					<Stack.Screen name="DeviceScreen" component={DeviceScreen} />
					<Stack.Screen name="MenuScreen" component={MenuScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
