import React from 'react';
import{
    View,
    TextInput,
    Button,
    StyleSheet,
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

            <TextInput placeholder='Nuevo nombre'
               onChangeText={eventoNuevoNombre}
               value={nuevoNombre}
            />
            <TextInput placeholder='Nuevo precio'
                onChangeText={eventoNuevoPrecio}
                value={nuevoPrecio}
            />
            <View style={Styles.button}>
                <Button 
                    title='Actualizar'
                    onPress={eventoActualizar}
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

export default Actualizar;