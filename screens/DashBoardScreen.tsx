import React, { useState } from 'react';
import {
    View,
    Text,
    StatusBar,
    FlatList,
    Image,
    StyleSheet,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import layouts from '../constants/Layout';
import colors from '../constants/Colors';

import TopBar from '../components/TopBar';
import MenuScreen from '../screens/MenuScreen';

const SENSORS_DATA = require('../constants/FakeSensorsData').default;

export default function DashBoard({ navigation }) {
    
    const [isMenuEnabled, setToggleMenu] = useState(false);

    const renderItem = ({ item }) => {
        const path = JSON.parse(item.path)
        let tipo;
        let unidMed;
        let valor;
        switch (path.type) {
            case 1: unidMed='ºC';tipo='Temperatura';break;
            case 2: unidMed='%';tipo='Humidade';break;
            case 3: unidMed='lux';tipo='Luminosidade';break;
            case 4: unidMed='dB';tipo='Intensidade Sonora';break;
            case 5: unidMed='-';tipo='Outro';break;
            default: unidMed='';tipo='No Type';break;
        }
        (path.value<10)?(valor=`0${path.value.toString()}`):(valor=path.value);
        return (<Item
            imgUri={path.ImagemUri}
            title={item.nome}
            type={tipo}
            value={valor}
            unidade={unidMed}
        />)
    }

    return (
        <SafeAreaProvider>
            {/* <StatusBar hidden={true} /> */}
            <TopBar
                isBackBtn={false}
                nav={navigation}
                screen='DeviceScreen'
                title="DASHBOARD"
                iconName='chevron-back-outline'
                iconSize={42}
                iconColor={colors.TopBar.icon}
                act={() => setToggleMenu(!isMenuEnabled)}
            />
            <View style={styles.container}>
                <FlatList
                    data={SENSORS_DATA}
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

const Item = ({ imgUri, title, type, value, unidade }) => (
    <View style={styles.listItemContainer}>
        <View style={styles.listItemImgContainer}>
            <Image style={styles.listItemImage} source={imgUri} />
        </View>
        <View style={styles.listItemTitleContainer}>
            {/* <Text style={styles.listItemTitle}>{title}</Text> */}
            <Text style={styles.listItemType}>{type}</Text>
            <View style={styles.listItemValueContainer}>
                <Text style={styles.listItemValue}>{value}</Text>
                <Text style={styles.listItemUnidade}>{unidade}</Text>
            </View>
        </View>
    </View>
)

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
        backgroundColor: colors.DashBoard.background,
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
        flex: 1,
        paddingTop: 3,
        paddingBottom: 3,
        alignItems: 'center',
        justifyContent: 'space-around',
        // justifyContent: 'center',
    },
    listItemType: {
        paddingBottom: 2,
        fontSize: 18,
        fontWeight: 'bold',
    },
    listItemValueContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    listItemValue: {
        color: colors.DashBoard.text,
        fontSize: 40,
        fontWeight: 'bold',
    },
    listItemUnidade: {
        color: colors.DashBoard.text,
        marginLeft: 5,
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        opacity: 0.9,
    },
    listItemTitle: {},
})
