import React from 'react';
import{
    View,
    TextInput,
    Button,
    Text,
} from 'react-native'


const Actualizar = (props) => {
    
    const {eventoNuevoNombre, eventoNuevoPrecio, nuevoNombre, nuevoPrecio, eventoActualizar, precioActual, nombreActual} = props;

    return(
        <View>
            <View> 
                <Text>Nombre actual: { nombreActual }</Text>
            </View>
            <View> 
                <Text>Precio actual: { precioActual }</Text>
            </View>

            <TextInput 
               onChangeText={eventoNuevoNombre}
               value={nuevoNombre}
            />
            <TextInput 
                onChangeText={eventoNuevoPrecio}
                value={nuevoPrecio}
            />
            <Button 
                title='Actualizar'
                onPress={eventoActualizar}
            />
        </View>
    );
}

export default Actualizar;