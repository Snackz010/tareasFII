import React from 'react';
import {
    SafeAreaView,
    Text,
    FlatList,
    Button,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from 'react-native';

const Listado = (props) => {
    
    const {
        datos,
        eventoPantallaGuardar,
        eventoPantallaEliminar,
        eventoPantallaActualizar
    } = props;

    return(
        <SafeAreaView>
            <Text>Listado de alumnos</Text>
            <Button 
            title='Agregar'
            onPress={eventoPantallaGuardar}
            />
            <FlatList 
                data={datos}
                renderItem={
                    ({item}) => <Elemento item={item}
                    eventoPantallaEliminar ={eventoPantallaEliminar}
                    eventoPantallaActualizar = {eventoPantallaActualizar}
                    />
                }
            />
        </SafeAreaView>
    );
}

const Elemento = (props) => {
    const { 
        item, 
        eventoPantallaEliminar,
        eventoPantallaActualizar
    } = props;

    return(
        <TouchableOpacity 
        onLongPress={ () => eventoPantallaEliminar(item.key)}
        onPress={() => eventoPantallaActualizar(item.key)}
        >
            <Text style={styles.elemento}>
                {item.nombreAlumno}
            </Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    titulo: {
        color: 'green',
        fontSize: 18,
    },
    elemento: {
        flex: 1,
        padding: 8,
        fontWeight: 'bold',
        color: 'white',
        height: 50,
        ...Platform.select({
            ios: {
                backgroundColor: 'red',
            },
            android: {
                backgroundColor: 'blue'
            },
        }),
        margin: 8,
    },
});

export default Listado; 