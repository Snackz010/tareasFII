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
                <View>
                    <Text>Listado de productos tienda El Mango</Text>
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
                <View>
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
        <TouchableOpacity
            onLongPress={()=> eventoPantallaEliminar(item.key)}
            onPress={ ()=> eventoPantallaActualizar(item.key)}
        >
            <Text>
                Producto: {item.nombre}
            </Text>
            <Text>
                Precio: {item.precio}
            </Text>
        </TouchableOpacity>
    );

}


export default Listado;