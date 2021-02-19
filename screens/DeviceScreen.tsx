import React, { useState } from 'react';
import {
    View,
    Text,
    StatusBar,
    Switch,
    FlatList,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import layouts from '../constants/Layout';
import colors from '../constants/Colors';

import TopBar from '../components/TopBar';
import MenuScreen from '../screens/MenuScreen';

const SENSORS_DATA = require('../constants/FakeDevicesData').default;

export default function DeviceScreen({ navigation }) {

    const renderItem = ({ item }) => {
        console.log(item)
        const path = JSON.parse(item.path)
        let valor;
        (path.value < 10) ? (valor = `0${path.value.toString()}`) : (valor = path.value);
        return (<Item
            imgUri={path.ImagemUri}
            title={item.nome}
            type={path.type}
            value={valor}
            ativo={item.ativo}
        />)
        // item.map(it => {
        //     console.log(it)
        //     const path = JSON.parse(it.path)
        //     let valor;
        //     let a = [];
        //     (path.value < 10) ? (valor = `0${path.value.toString()}`) : (valor = path.value);
        //     console.log(path)
        //     for (let i = 0; i < it.length; i++) {
        //         a.push(<Text key={it.Id}>{it.Id}</Text>)
        //     }
        //     return (a);
        // });
    }
    
    const [isMenuEnabled, setToggleMenu] = useState(false);

    return (
        <SafeAreaProvider>
            {/* <StatusBar hidden={true} /> */}
            <TopBar
                isBackBtn={true}
                nav={navigation}
                screen='DashBoard'
                title="DISPOSITIVOS"
                iconName='chevron-back-outline'
                iconSize={40}
                iconColor={colors.TopBar.icon}
                act={() => setToggleMenu(!isMenuEnabled)}
            />
            <View style={styles.container}>
                <FlatList
                    data={SENSORS_DATA[0]}
                    renderItem={renderItem}
                    keyExtractor={item => item.Id}
                />
            </View>
            {
                isMenuEnabled ?
                    <View style={{position:'absolute',width:layouts.window.width,height:layouts.window.height}}>
                        <MenuScreen nav={navigation} act={() => setToggleMenu(!isMenuEnabled)} inScreen="DeviceScreen" />
                    </View>:null
            }
        </SafeAreaProvider>
    );
}

const Item = ({ imgUri, title, type, value, ativo, onPressBtn }) => {

    const [opnDrop, setDropBtn] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View>
            <View style={styles.listItemContainer}>
                <View style={styles.listItemImgContainer}>
                    <Image style={styles.listItemImage} source={imgUri} />
                </View>
                <View style={styles.listItemTitleContainer}>
                    {/* <Text style={styles.listItemTitle}>{title}</Text> */}
                    <Text style={styles.listItemType}>{title}</Text>
                </View>
                <View style={styles.toggleOptnBtnContainer}>
                    <TouchableWithoutFeedback onPress={() => setDropBtn(!opnDrop)}>
                        <Text style={styles.toggleOptnBtnText}>V</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            {
                opnDrop ? (
                    <View style={styles.toggleOptnBtnContent}>
                        <View style={styles.btnEdit}>
                            <TouchableWithoutFeedback onPress={() => alert('EditScreen')}>
                                <Text>Icon1</Text>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.btnToggleDevice}>
                            <Switch
                                trackColor={{ false: "#DDD", true: "rgba(0,150,0,0.8)" }}
                                thumbColor={isEnabled ? "#BBB" : "#BBB"}
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                                style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                            />
                        </View>
                    </View>
                ) : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    listItemContainer: {
        width: layouts.window.width / 1.05,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: colors.Devices.background,
    },
    listItemImgContainer: {
        width: 90,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 90,
        padding: 1,
        elevation: 5,
    },
    listItemImage: {
        width: layouts.window.width / 5,
        height: layouts.window.width / 5,
        borderRadius: layouts.window.width / 5,
    },
    listItemTitleContainer: {
        flex: 15,
        paddingTop: 3,
        paddingBottom: 3,
        alignItems: 'center',
        justifyContent: 'space-around',
        // justifyContent: 'center',
    },
    listItemType: {
        paddingBottom: 2,
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.Devices.text,
    },
    listItemValueContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    listItemValue: {
        color: colors.Devices.text,
        fontSize: 40,
        fontWeight: 'bold',
    },
    listItemUnidade: {
        color: colors.Devices.text,
        marginLeft: 5,
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        opacity: 0.9,
    },
    listItemTitle: {},
    toggleOptnBtnContainer: {
        flex: 1,
    },
    toggleOptnBtnText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    toggleOptnBtnContent: {
        height: 100,
        backgroundColor: colors.Devices.background,
        marginTop: -25,
        zIndex: -1,
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btnEdit: {
        width: layouts.window.width / 6.5,
        height: layouts.window.width / 6.5,
        borderWidth: 1,
        borderRadius: layouts.window.width / 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnToggleDevice: {
        width: layouts.window.width / 6.5,
        height: layouts.window.width / 6.5,
        borderRadius: layouts.window.width / 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
