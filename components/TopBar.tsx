import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

import layouts from '../constants/Layout';
import colors from '../constants/Colors';

export default class TopBar extends React.Component {

    state= {
        isMenuEnabled: false
    }

    render() {
        return (
            <View style={styles.container}>
                {/* {
                    this.props.isBackBtn ?
                        <TouchableWithoutFeedback onPress={() => this.props.nav.navigate('DashBoard')} style={styles.iconContainer}>
                            <Text style={{ fontWeight: 'bold', fontSize: this.props.iconSize, color: this.props.iconColor }}>{'<'}</Text>
                        </TouchableWithoutFeedback>
                        : */}
                        <TouchableWithoutFeedback onPress={() => this.props.act()} style={styles.iconContainer}>
                            <Text style={{ fontWeight: 'bold', fontSize: this.props.iconSize, color: this.props.iconColor }}>{'='}</Text>
                        </TouchableWithoutFeedback>
                {/* } */}
    
                <View style={styles.contentContainer}>
                    <Text style={styles.content}>{this.props.title}</Text>
                </View>
            </View>
        );
    }
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
