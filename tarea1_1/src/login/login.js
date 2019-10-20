import React from 'react';

import {
    View,
    StatusBar,
    Text,
    Button,
    TextInput,
    StyleSheet,
    Dimensions,
    ImageBackground
} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = (props) => {

    const { press, changeText } = props;

    return(
        <>
        <StatusBar backgroundColor='black'/>
        <ImageBackground source={require('../img/fondoBg.jpg')} style={styles.imageBackgrond}>
            <View style={styles.container}>

                <View style={styles.textInputView}>
                    <Icon name='account'
                    style={styles.icons}
                    size={27}/>
                    <TextInput 
                    style={styles.textIn}
                    placeholder='Usuario'
                    onChangeText={changeText}
                    />
                </View>

                <View style={styles.textInputView}>
                    <Icon name='eye'
                    style={styles.icons}
                    size={27}/>
                    <TextInput 
                    style={styles.textIn}
                    placeholder='Contraseña'
                    secureTextEntry/>
                </View>

                <View style={styles.btmView}> 
                    <Button title='Ingresar'
                    onPress={press}
                    color='gray'/>
                </View>  
                
            </View>
            </ImageBackground>
        </>
    );
};


const styles = StyleSheet.create({
    textInputView:{
        backgroundColor:'rgba(255,255,255, .7)',
        marginTop: '10%',
        borderRadius: 15,
        alignItems:'center',
        flexDirection: 'row',
        marginHorizontal:'5%',
        height: 60
    },
    imageBackgrond: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center'
    },
    container:{
       marginTop:'40%',
       alignContent: 'space-between'
    },
    btmView:{
        marginTop:'10%',
        borderRadius: 80,
        marginHorizontal:'15%'
    },
    textIn: {
        fontSize: 26,
        marginBottom:'10%'
    },
    icons:{
        marginBottom:'10%',
    }
});

export default Login;