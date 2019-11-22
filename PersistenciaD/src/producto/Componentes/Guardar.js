import React from 'react';

import {
    TextInput,
    View,
    Text,
    Button,
} from 'react-native';

const Guardar = (props) => {

    const {
        nombreProducto,
        eventoNombreProducto,
        precioProducto,
        eventoPrecioProducto,
        eventoGuardar
    } = props;

    return (
        <View>
            <Text>
                Añadiendo un nuevo Producto
            </Text>
            <TextInput
                onChangeText={eventoNombreProducto}
                value={nombreProducto}
            />
            <TextInput
               onChangeText={eventoPrecioProducto}
               value={precioProducto}
            />
            <Button
                title='Añadir' onPress={eventoGuardar}
            />
        </View>
    );
}

export default Guardar;