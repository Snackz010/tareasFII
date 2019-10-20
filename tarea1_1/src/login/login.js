import React from 'react';

import {
    View,
    Text,
    Button,
    TextInput
} from 'react-native';


const Login = (props) => {

    const { press, changeText } = props;

    return(
        <>
            <View>
                <TextInput 
                placeholder='Usuario'
                onChangeText={changeText}/>
            </View>
            <View>
                <TextInput 
                placeholder='Contraseña'
                secureTextEntry/>
            </View>
                
            
            <Button title='Ingresar'
            onPress={press}/>
        </>
    );
};

export default Login;