import React from 'react';

import {
    TextInput,
    View,
    Text,
    Button,
    StyleSheet
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
                placeholder='Nombre'
                onChangeText={eventoNombreProducto}
                value={nombreProducto}
            />
            <TextInput
                placeholder='Precio'
               onChangeText={eventoPrecioProducto}
               value={precioProducto}
            />

            <View style={Styles.button}>
                <Button
                    title='Añadir' onPress={eventoGuardar}
                />
            </View>
            
        </View>
    );
}


const Styles = StyleSheet.create({
    button:{
        marginLeft:'25%',
        marginRight:'25%',
        borderRadius:70
    }
});

export default Guardar;