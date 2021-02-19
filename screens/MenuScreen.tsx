import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { myNavScreen } from './DashBoardScreen'

import layouts from '../constants/Layout';
import images from '../constants/Images';
import colors from '../constants/Colors';

// *****
// ***** Obs.: Este componente será usado quando resolver o problema do
// *****       Drawer Navigation das telas de SignIn e SignUp.
// *****

export default function MenuScreen(props) {
    return (
        <SafeAreaProvider>
            {/* <StatusBar hidden={true} /> */}
            <View style={styles.container}>
                <View style={styles.itemsContainer_close}>
                    <TouchableWithoutFeedback onPress={() => props.act()} style={styles.iconContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: colors.DrawerContent.text }}>X</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.itemsContainer_img}>
                    <Image style={styles.imgUser} source={images.User.userUri} />
                </View>
                <View style={styles.itemsContainer_box}>
                    <ItemMenu title="Dispositivos" nav={props.nav} screen='DeviceScreen' isExit={false} />

                    {/* <ItemMenu title="Sensores" nav={props.nav} screen="DashBoardScreen" isExit={false} /> */}
                    <TouchableWithoutFeedback
                        onPress={() => (props.nav.navigate('DashBoard'))}
                        style={styles.itemContainer}>
                        <View style={styles.itemContainer}>
                            <View style={styles.imgContainer}>
                                <Text style={{ color: '#FFF', fontSize: 10 }}>Icon</Text>
                            </View>
                            <Text style={styles.text}>Sensores</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <ItemMenu title="Departamentos" nav={props.nav} screen="DepartmentScreen" isExit={false} />
                    <ItemMenu title="Agendamentos" nav={props.nav} screen="ScheaduleScreen" isExit={false} />
                    <ItemMenu title="Configurações" nav={props.nav} screen="SettingScreen" isExit={false} />
                    <ItemMenu title="Sair" nav={props.nav} screen="" isExit={true} />
                </View>
            </View>
        </SafeAreaProvider>
    );
}

function ItemMenu(props) {
    return (
        <TouchableWithoutFeedback
            onPress={() => ((!props.isExit) ? props.nav.navigate(props.screen) : props.nav.navigate('SignIn'))}
            style={styles.itemContainer}>
            <View style={styles.itemContainer}>
                <View style={styles.imgContainer}>
                    <Text style={{ color: '#FFF', fontSize: 10 }}>Icon</Text>
                </View>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        height: layouts.window.height,
        padding: 20,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: colors.DrawerContent.background,
    },
    itemsContainer_close: {
        width: '100%',
        alignItems: 'flex-end',
    },
    itemsContainer_img: {
        width: '100%',
        alignItems: 'center',
    },
    itemsContainer_box: {
        paddingTop: 40,
        width: '100%',
        alignItems: 'center',
    },
    itemContainer: {
        width: '100%',
        height: 50,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imgContainer: {
        width: 32,
        height: 32,
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    imgUser: {
        width: 100,
        height: 100,
        borderRadius: 100,
        margin: 20,
    },
    text: {
        fontSize: 16,
        color: colors.DrawerContent.text,
    },
})
