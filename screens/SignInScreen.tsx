import { useLinkProps } from '@react-navigation/native';
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import colors from '../constants/Colors';
import images from '../constants/Images';
import layouts from '../constants/Layout';

const signIn = true;

let handlerSignIn = nav => {
    if(signIn) { nav.navigate('DashBoard'); }
    else { alert('Não foi possível efetuar login.') }
}

// const logoUri = require('../assets/images/Logo.png')

export default function SignInScreen({ navigation }) {
    return (
        <SafeAreaProvider>
            {/* <StatusBar hidden={true} /> */}
            <View style={ styles.mainContainer }>
                <Logo />
                <SignInForm nav={navigation} />
                <CallSignUp nav={navigation} screen="SignUp" />
            </View>
        </SafeAreaProvider>
    );
}

function Logo() {
    return (
        <View style={ styles.logoContainer }>
            <Image style={ styles.logoImage } source={ images.LogIn.logoUri } />
        </View>
    );
}

function SignInForm(props) {
    return (
        <View style={ styles.signInFormContainer }>
            <TextInput
                style={ [styles.signInInput, styles.signInInput_username] }
                onChangeText={() => {}}
                placeholder="E-mail"
            />
            <TextInput
                style={ [styles.signInInput, styles.signInInput_password] }
                onChangeText={() => {}}
                placeholder="Senha"
                secureTextEntry={true}
            />
            <View style={styles.buttonSignInContainer}>
                <TouchableOpacity
                    style={styles.buttonSignIn}
                    onPress={() => handlerSignIn(props.nav)}
                >
                    <Text style={styles.buttonSignInText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function CallSignUp(props) {
    return (
        <View style={styles.callSignUpContainer}>
            <TouchableWithoutFeedback
                onPress={() => props.nav.navigate(props.screen)}
            >
                <Text style={styles.callSignUpLinkText}>Cadastrar Nova Conta</Text>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: colors.LogIn.background,
        paddingVertical: layouts.window.height / 10,
    },
    logoContainer: {},
    signInFormContainer: {
        width: layouts.window.width,
        paddingVertical: layouts.window.height / 10,
        paddingHorizontal: layouts.window.width * 0.4,
        alignItems: 'center',
    },
    signInInput: {
        width: layouts.window.width / 1.2,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 18,
        borderWidth: 1,
        backgroundColor: '#FFF',
        borderRadius: layouts.window.width / 1.5,
    },
    signInInput_username: {
        marginBottom: layouts.window.height / 40,
    },
    signInInput_password: {},
    buttonSignInContainer: {
        width: layouts.window.width,
        alignItems: 'flex-end',
        paddingHorizontal: '40%',
    },
    buttonSignIn: {
        width: layouts.window.width / 3,
        fontSize: 24,
        marginTop: '15%',
        padding: '3%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: layouts.window.width / 3,
        backgroundColor: colors.LogIn.button,
    },
    buttonSignInText: {
        color: colors.LogIn.text,
    },
    callSignUpContainer: {},
    callSignUpLinkText: {
        color: colors.LogIn.text,
        fontSize: 16,
        opacity: 0.6,
        textDecorationLine: 'underline',
    },
    logoImage: {
        width: layouts.window.width / 2.5,
        height: layouts.window.width / 2.5,
        borderRadius: layouts.window.width / 2.5,
    }
})
