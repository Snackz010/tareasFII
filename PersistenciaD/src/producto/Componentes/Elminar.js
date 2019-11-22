import React from 'react';

import {
    View,
    Text,
    Button,
} from 'react-native';

const Eliminar = (props) => {
    const {
        nombre,
        precio,
        eventoEliminar
    }= props;


    return(
        <View>
            <View>
                <Text>
                    Nombre producto: {nombre}
                </Text>
            </View>
            <View>
                <Text>
                    Precio: {precio}
                </Text>
            </View>
            <View>
                <Button title='Eliminar' onPress={eventoEliminar}/>
            </View>
            
        </View>
    )
}
export default Eliminar;