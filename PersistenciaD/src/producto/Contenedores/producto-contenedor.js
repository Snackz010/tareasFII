import React,{Component} from 'react';
import {
    View,
    Text,
    AsyncStorage
} from 'react-native';

import Listado from '../Componentes/Listado.js';
import Guardar from '../Componentes/Guardar.js';
import Eliminar from '../Componentes/Elminar.js'
import Actualizar from '../Componentes/Actualizar.js'


class ProductoContenedor extends Component{
    constructor(props){
        super(props);

        this.state = {
            Productos:[],
            Pantalla:'Listado',
            nombreProducto:'',
            precioProducto:'',
            nuevoNombreP:'',
            nuevoPrecioP:'',
            productoSeleccionadoId:''

        }
    }


    //Funciones para pantalla Listado

    eventoPantallaGuardar = () => {
        this.setState({
            Pantalla:'Guardar'
        });
    }


    //Funciones para pantalla Guardar producto

    eventoNombreProducto = (nombre) => {
        this.setState({
            nombreProducto: nombre,
        });
    }

    eventoPrecioProducto = (precio) => {
        this.setState({
            precioProducto: precio,
        });
    }

    eventoGuardar = async () => {
        const {nombreProducto, precioProducto, Productos } = this.state;

        Productos.push({
            key: (Productos.length + 1).toString(),
            nombre: nombreProducto,
            precio: precioProducto
        });

        await this.modificarProductos(Productos);

        this.setState({
            nombreProducto:'',
            precioProducto:'',
            Productos: Productos,
            Pantalla:'Listado'
        });
    }


    //Funciones para pantalla actualizar

    eventoNuevoNombreProducto = (nuevoNombre) => {
        this.setState({
            nuevoNombreP:nuevoNombre
        });
    }

    eventoNuevoPrecioProducto = (nuevoPrecio) => {
        this.setState({
            nuevoPrecioP:nuevoPrecio
        });
    }

    eventoPantallaActualizar = (productoId) => {
        const {Productos} = this.state;
        const indiceProductoAActualizar = Productos.findIndex(item => item.key === productoId);

        this.setState({
            Pantalla: 'Actualizar',
            productoSeleccionadoId:productoId,
            nombreProductoActualizar:Productos[indiceProductoAActualizar].nombre,
            precioProductoActualizar:Productos[indiceProductoAActualizar].precio
        })
    }


    eventoActualizar = async () => {
        const { productoSeleccionadoId, Productos, nuevoNombreP, nuevoPrecioP } = this.state;
        const indiceActualizar = Productos.findIndex(item => item.key === productoSeleccionadoId);

        if(indiceActualizar > -1){
            Productos[indiceActualizar].nombre = nuevoNombreP;
            Productos[indiceActualizar].precio = nuevoPrecioP;
        }

        await this.modificarProductos(Productos);

        this.setState({
            nuevoNombreP:'',
            nuevoPrecioP:'',
            Productos:Productos,
            Pantalla: 'Listado'
        });
    }
   
    //Funciones para la pantalla eliminar

    eventoPantallaEliminar = (productoId) =>{
        const {Productos} = this.state;

        const indiceEliminar = Productos.findIndex(item => item.key === productoId);

        this.setState({
            Pantalla:'Eliminar',
            productoSeleccionadoId:indiceEliminar,
            nombreProductoEliminar:Productos[indiceEliminar].nombre,
            precioProductoEliminar:Productos[indiceEliminar].precio,
        });

    }

    eventoEliminar = async () => {
        const {productoSeleccionadoId, Productos} = this.state;
        const indiceEliminar = Productos.findIndex(item => item.key === productoSeleccionadoId);
        if(indiceEliminar >= -1){
            Productos.splice(indiceEliminar,1);
        }

        await this.modificarProductos(Productos);

        this.setState({
            Pantalla:'Listado',
            Productos:Productos
        });
    }


    modificarProductos = async (productos) => {
        const datosConvertidos = JSON.stringify(productos)
        await AsyncStorage.setItem('DATOS',datosConvertidos);
    }


    obtenerProductos= async () => {
        const datos = await AsyncStorage.getItem('DATOS');
        return datos;
    }

    render(){
        const {
            Productos, 
            Pantalla, 
            nombreProducto, 
            precioProducto, 
            nuevoNombreP, 
            nuevoPrecioP,
            nombreProductoActualizar,
            precioProductoActualizar,
            nombreProductoEliminar,
            precioProductoEliminar
        } = this.state;
        
        switch (Pantalla) {
            case 'Listado':
                    return(
                        <Listado 
                            data={Productos}
                            eventoPantallaGuardar={this.eventoPantallaGuardar}
                            eventoPantallaActualizar={this.eventoPantallaActualizar}
                            eventoPantallaEliminar={this.eventoPantallaEliminar}
                        />
                    );
                break;
            case 'Guardar':
                    return(
                        <Guardar 
                            nombreProducto={nombreProducto}
                            precioProducto={precioProducto}
                            eventoNombreProducto={this.eventoNombreProducto}
                            eventoPrecioProducto={this.eventoPrecioProducto}
                            eventoGuardar={this.eventoGuardar}
                        />
                    );
                break;
            case 'Actualizar':
                    return(
                        <Actualizar 
                            eventoNuevoNombre={this.eventoNuevoNombreProducto}
                            eventoNuevoPrecio={this.eventoNuevoPrecioProducto}
                            nuevoNombre={nuevoNombreP}
                            nuevoPrecio={nuevoPrecioP}
                            nombreActual={nombreProductoActualizar}
                            precioActual={precioProductoActualizar}
                            eventoActualizar={this.eventoActualizar}

                        />
                    );
                break;
            case 'Eliminar':
                    return(
                        <Eliminar 
                            nombre={nombreProductoEliminar}
                            precio={precioProductoEliminar}
                            eventoEliminar={this.eventoEliminar}

                        />
                    );
                break;
            default:
                break;
        }

    }


    async componentDidMount() {
        const datos = await this.obtenerProductos();
        if(datos !== null) {
            const productos = JSON.parse(datos);
            this.setState({
                Productos: productos,
            });
        }
    }

}

export default ProductoContenedor;