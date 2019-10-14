import React from 'react';
import{
    View,
    Text,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    TextInput,
    StyleSheet,
    Button
}from  'react-native';



const Login = (props) => {
    const  {press}  = props;
    return(
        <>
        <StatusBar backgroundColor='black'/>
        
        <SafeAreaView>
            <ImageBackground source={require('../images/loginBgd.jpg')} style={styles.imagebackground}>
                <View style={styles.innerview}>
                    <Text style={styles.tittle}>
                        Log in
                    </Text>
                    <TextInput placeholder='User' style={styles.textinputU}></TextInput>
                    <TextInput placeholder='Password' style={styles.textinputP}></TextInput>
                    <Button title='Login' color='#A7AAB5'
                    onPress={press}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    imagebackground: {
        width: '100%',
        height: '100%',
       justifyContent:'space-between',
        alignItems: 'center'
    },
    innerview: {
        width: '80%',
        height: '70%',
        marginTop: '24%',
        marginBottom:'40%',
        backgroundColor:'rgba(255,255,255, .4)',
        borderRadius:20,
        alignItems:'center'
    },
    tittle: {
        fontSize: 30,
        color: 'white',
        marginTop: 10
    },
    textinputU: {
        fontSize: 27,
        width: '50%',
        marginTop: '24%',
        marginBottom:'10%',
        textAlign:'center'
    },
    textinputP: { 
      width:'70%',
      fontSize:27,
      textAlign:'center'
    }
});


export default Login;

