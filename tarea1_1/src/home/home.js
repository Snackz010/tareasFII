import React from 'react';

import {
    View,
    Text,
    Button,
    Image,
    ImageBackground,
    StyleSheet,
    Dimensions,
    ScrollView
} from 'react-native';

const Home = (props) => {

    const { username, press } = props;
    return(
        <>
            <View style={{flex:1}}>
                <ImageBackground source={require('../img/coverphoto.jpg')}
                style={styles.imagenPortada}>

                    <Image source={require('../img/profileph.jpg')}
                    style={styles.imagenPerfil}/>
                    <Text style={styles.texName}>{username}</Text>
                </ImageBackground>
                <Text style={styles.acerca}>Acerca de mi y esta app</Text>
                <Text style={styles.descripcion}>Soy {username} actualmente soy estudiante de la carrera de ingeniería
                en sistemas de información, he creado esta aplicación por motivos escolares,
                mentiria si dijera que disfruté mucho haciendola pero para {username} o sea yo,
                la responsabilidad es primero jaja 😅</Text>

                <Text style={styles.descripcion}>
                    De momento puedo decir que odio dar estilos y trabajar con la interfaz realmente no es lo mio 
                    pero estoy haciendo el intento XD, joder debo hacer esto más corto, aún no se usar el ScrollView 😑
                </Text>
                <Text style={styles.descripcion}>
                Si ya leiste esta estupidez por favor presiona el botón de aquí abajo para salir de este lugar, jaja salu2.
                </Text>
                <View style={styles.btnContainer}>
                    <Button title='Dejar de ver porqueria' 
                    color='black'
                    onPress={press}/>
                </View>
            </View>
           
        </>
    );
}

const styles = StyleSheet.create({
    imagenPortada:{
        width: Dimensions.get('window').width,
        height: '60%'
    },
    imagenPerfil:{
        width:100,
        height:100,
        borderRadius: 150,
        marginTop: '27%',
        borderWidth: 3,
        borderColor:'white'
    },
    texName:{
        fontSize: 50,
        marginTop:'-25%',
        marginLeft:'44%'
    },
    acerca:{
        marginTop:'-30%',
        fontSize: 30
    },
    descripcion: {
        fontSize:17
    },
    btnContainer:{
       width: '40%',
       alignSelf:'center',
       marginTop:'10%'
    }
});

export default Home;