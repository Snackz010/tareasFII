import React from 'react';
import {
    SafeAreaView,
    Text,
    FlatList,
    Button,
    StyleSheet,
    TouchableOpacity,
    Platform,
    View,
    ScrollView
} from 'react-native';


const Listado = (props) => {

    const {data, eventoPantallaEliminar, eventoPantallaGuardar,eventoPantallaActualizar} = props;
        return(
            <SafeAreaView>
                <View style={Styles.tituloBG}>
                    <Text style={Styles.titulo}>Listado de productos tienda "El Mango"</Text>
                </View>
                <FlatList 
                    data={data}
                    renderItem={
                        ({item}) => <Producto   item={item}
                                                eventoPantallaEliminar={eventoPantallaEliminar}
                                                eventoPantallaActualizar={eventoPantallaActualizar}
                                    />
                    }
                />
                <View style={Styles.button}>
                    <Button title='Agregar producto' onPress={eventoPantallaGuardar}/>
                </View>
                
            </SafeAreaView>
        );
}

const Producto = (props) => {
    const {
        item,
        eventoPantallaEliminar,
        eventoPantallaActualizar
    } = props;

    return(
        <TouchableOpacity style={Styles.item}
            onLongPress={()=> eventoPantallaEliminar(item.key)}
            onPress={ ()=> eventoPantallaActualizar(item.key)}
        >
            <Text style={Styles.innerText}>
                Producto: {item.nombre}
            </Text>
            <Text style={Styles.innerText}>
                Precio: {item.precio}
            </Text>
        </TouchableOpacity>
    );

}

const Styles = StyleSheet.create({
    titulo:{
        fontSize:20,
        alignSelf:'center',
        marginTop:'8%',
        color:'white'
    },
    tituloBG:{
        backgroundColor:'black',
        height:'30%'
    },
    button:{
        marginLeft:'25%',
        marginRight:'25%',
        borderRadius:70
    },
    item:{
        backgroundColor:'gray',
        borderColor:'white',
        borderWidth:2,
        borderRadius:20
    },
    innerText:{
        color:'white',
        fontSize:20,
        alignSelf:'center'
    }
});

export default Listado;