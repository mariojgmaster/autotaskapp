import React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

import layouts from '../constants/Layout';
import colors from '../constants/Colors';
import { NavigationContainer } from '@react-navigation/native';

export default function TopBar(props) {
	return (
		<View style={styles.container}>
            <TouchableWithoutFeedback
                style={styles.iconContainer}
                onPress={() => alert('Toggle Menu')}
            >
                {/* TODO: Resolver problema com os Icones */}
                {/* <Ionicons
                    name={props.iconName}
                    size={props.iconSize}
                    color={props.iconColor}
                /> */}
                <Text style={{ fontWeight:'bold', fontSize:props.iconSize, color:props.iconColor }}>{'<'}</Text>
            </TouchableWithoutFeedback>

            {/* Para testar outras rotas */}
            <TouchableWithoutFeedback onPress={() => props.nav.navigate(props.screen)} style={styles.iconContainer}>
                <Text style={{ fontWeight:'bold', fontSize:props.iconSize, color:props.iconColor }}>{'\n>'}</Text>
            </TouchableWithoutFeedback>
            {/* Para testar outras rotas */}
            
            <View style={styles.contentContainer}>
                <Text style={styles.content}>{props.title}</Text>
            </View>
        </View>
	);
}

const styles = StyleSheet.create({
    container: {
        width: layouts.window.width,
        height: 100,
        backgroundColor: colors.TopBar.background,
        marginBottom: 10,
        paddingBottom: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    iconContainer: {},
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        color: colors.TopBar.text,
        fontSize: 22,
        fontWeight: 'bold',
    },
})
