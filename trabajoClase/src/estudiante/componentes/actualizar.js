import React from 'react';
import{
    View,
    TextInput,
    Button,
    Text,
} from 'react-native'


const Actualizar = (props) => {
    const { nombre, eventoNuevoNombre, eventoActualizar, nuevoNombre } = props;
    return(
        <View>
            <Text>Nombre actual: { nombre }</Text>
            <TextInput 
                onChangeText={eventoNuevoNombre}
                value = {nuevoNombre}
            />
            <Button 
                title='Actualizar'
                onPress = {eventoActualizar}
            />
        </View>
    );
}

export default Actualizar;