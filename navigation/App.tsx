import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
// import { createAppContainer } from 'react-navigation';

// import Navigation from './navigation';
import { DashBoard, DrawerContentScreen } from '../navigation/index';

const Drawer = createDrawerNavigator()

// *****
// ***** Obs.: Este componente não está sendo usado *****
// *****

export default function App() {
	return (
		<NavigationContainer>
            <Drawer.Navigator
                drawerContent={() => <DrawerContentScreen />}
                initialRouteName="DashBoard"
            >
                <Drawer.Screen name="DashBoard" component={DashBoard} />
            </Drawer.Navigator>
		</NavigationContainer>
	);
}
