import React from 'react';
import {
    View,
    Text,
    Button,
    StatusBar,
    SafeAreaView,
    StyleSheet,
    Image,
    ImageBackground,
    ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

const Home = (props) => {
    const {press} = props;
    return(
        <>
        <StatusBar backgroundColor='indigo'/>
        <SafeAreaView>
            <View>
                <ImageBackground 
                source={require('../images/pbackground.jpg')}
                style={styles.imagebackground}>
                        <Image source={require('../images/profilePic.png')} style={styles.profilePic} />
                </ImageBackground>
                <View style={styles.allView}>
                    <Text style={styles.profileName}>
                        Klissman Zeledón
                    </Text>

                    <View style={styles.iconsContainer}>
                            <View style={styles.iconView}>
                                <Icon 
                                name='plus'
                                size={25}
                                color='white'/>
                            </View>
                            <View style={styles.iconView}>
                                <Icon 
                                name='eye'
                                size={25}
                                color='white'/>
                            </View>
                            <View style={styles.iconView}>
                            <Icon 
                            name='account-edit'
                            size={25}
                            color='white'/>
                            </View>
                    </View>
                    <View style={styles.iconsContainer}>
                        
                        <View style={styles.icontextView}>
                            <Text style={styles.iconText}>
                                Add histories
                            </Text>
                        </View>
                        <View style={styles.icontextView}>
                            <Text style={styles.iconText}>
                                View as
                            </Text>
                        </View>
                        <View style={styles.icontextView}>
                            <Text style={styles.iconText}>
                                Edit profile
                            </Text>
                        </View>
                        
                    </View>
                </View>
                
                <View>
                    <View style={styles.extrainfo}>
                        <Text style={{fontSize:20}}>
                            <Icon name='home'
                            size={23}/> Lives in <Text style={styles.boldtext}>Juigalpa, Chontales.</Text>
                        </Text>
                    </View>
                    <View>
                        <Text style={{fontSize:20}}>
                            <Icon name='map-marker'
                            size={23}/> From <Text style={styles.boldtext}>Juigalpa, Chontales.</Text>
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.boldtext}>
                            <Icon name='dots-horizontal'
                            size={23}/> See your about info.
                        </Text>
                    </View>
                </View>
            </View>   
            <View style={styles.buttonView}>
                <Button title='Log out'
                color='indigo'
                onPress={press}/>
            </View>
        </SafeAreaView>
        </>
    );
};


const styles = StyleSheet.create({
    profilePic:{
        width: '40%',
        height: '40%',
        borderRadius: 90,
        marginTop: 80,
        borderWidth: 3,
        borderColor: 'white',
        backgroundColor:'indigo'
    },
    imagebackground: {
        width: '100%',
        height: '68%',
        justifyContent:'center',
        alignItems: 'center'
    },
    profileName:{
        fontSize: 27,
        marginTop: 0,
        position: 'relative',
        alignSelf:'center',
        alignContent:'stretch'
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent:'space-evenly'
    },
    iconView:{
        height: '120%',
        width:'15%',
        borderRadius: 100,
        backgroundColor: 'grey',
        alignItems: 'center',
        alignContent:'center',
        alignItems:'center'
    },
    iconText:{
        marginTop: 10,
        alignSelf:'center',
        fontSize: 10  
    },
    icontextView: {
        height: '120%',
        width:'15%',
        alignItems: 'center',
        alignContent:'center',
        alignItems:'center'
    },
    boldtext:{
        fontWeight: 'bold',
        fontSize: 20
    },
    extrainfo:{
        flexDirection:'column',
        
    },
    allView:{
        marginTop: -15,
    },
    buttonView: {
        borderRadius: 20,
        width: 80,
        height: 40,
        alignSelf:'center'
    }
});

export default Home;