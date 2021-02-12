import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
// import { createAppContainer } from 'react-navigation';

// import Navigation from './navigation';
import {
	SignInScreen,
	SignUpScreen,
	DashBoard,
	DrawerContentScreen,
	DeviceScreen
} from './navigation/index';
// import Application from './navigation/App';

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

let logado = false; // TODO: Ver esta lógica depois

export default class App extends React.Component {
	render() {
		return (
			<NavigationContainer>
				<StatusBar hidden={true} />
				<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
					<Stack.Screen name="SignIn" component={SignInScreen} />
					<Stack.Screen name="SignUp" component={SignUpScreen} />
					<Stack.Screen name="DashBoard" component={DashBoard} />
					<Stack.Screen name="Device" component={DeviceScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
