import React,{Component} from 'react';
import Eliminar from '../componentes/eliminar.js';
import Guardar from '../componentes/guardar.js';
import Listado from '../componentes/listado.js';
import Actualizar from '../componentes/actualizar.js'

class AlumnoContenedor extends Component {
    constructor(props){
        super(props);

        this.state = {
            pantalla: 'listado',
            alumnos: [],
            nombreAlumno:'',
            alumnoSeleccionadoId:'',
            nuevoNombre:''
        };
    };


    //Funciones para cambio de pantalla
    eventoPantallaGuardar = () => {
        this.setState({
            pantalla:'guardar'
        });
    }

    eventoPantallaEliminar = (alumnoId) => {
        const {alumnos} = this.state;
        const indiceEliminar = alumnos.findIndex(item => item.key === alumnoId);

        this.setState({
            pantalla:'eliminar',
            alumnoSeleccionadoId: alumnoId,
            nombreAlumnoAEliminar: alumnos[indiceEliminar].nombreAlumno
        });

    }

    eventoPantallaActualizar = (alumnoId) => {
        const {alumnos} = this.state;
        const indiceAlumnoActualizar = alumnos.findIndex(item => item.key === alumnoId);

        this.setState({
            pantalla: 'actualizar',
            alumnoSeleccionadoId:alumnoId,
            nombreAlumnoAActualizar:alumnos[indiceAlumnoActualizar].nombreAlumno,
        })
    } 

    //Eventos para pantalla crear
    eventoNombre = (textNombre) =>{
        this.setState({
            nombreAlumno: textNombre
        });
    }

    eventoGuardar = () => {
        const {nombreAlumno, alumnos} = this.state;
        alumnos.push({
            key: (alumnos.length + 1).toString(),
            nombreAlumno: nombreAlumno
        });
        this.setState({
            nombreAlumno:'',
            alumnos:alumnos,
            pantalla:'listado'
        });
    }

    //eventos para la pantalla actualizar

    eventNuevoNombre = (textNuevoNombre) => {
        this.setState({
            nuevoNombre: textNuevoNombre,
        });
    }

    //Para elminar
    eventoBorrar = () => {
        const {alumnoSeleccionadoId, alumnos} = this.state;
        const indiceEliminar = alumnos.findIndex(item => item.key === alumnoSeleccionadoId);
        if(indiceEliminar > -1 ){
            alumnos.splice(indiceEliminar,1);
        }
        this.setState({
            alumnos: alumnos,
            pantalla: 'listado'
        });
    }

    //Para actualizar
    eventoActualizar = () => {
        const { alumnoSeleccionadoId, alumnos, nuevoNombre } = this.state;
        const indiceActualizar = alumnos.findIndex(item => item.key === alumnoSeleccionadoId);

        if(indiceActualizar > -1){
            alumnos[indiceActualizar].nombreAlumno = nuevoNombre;
        }
        this.setState({
            nuevoNombre:'',
            alumnos:alumnos,
            pantalla: 'listado'
        });
    }

    render(){
        const {pantalla, alumnos, nombreAlumno} = this.state;

        switch (pantalla) {
            case 'listado':
                return(
                    <Listado 
                        datos={alumnos}
                        eventoPantallaGuardar={this.eventoPantallaGuardar}
                        eventoPantallaEliminar={this.eventoPantallaEliminar}
                        eventoPantallaActualizar={this.eventoPantallaActualizar}
                    />
                );
                break;
            case 'guardar':
                return(
                    <Guardar 
                        nombre={nombreAlumno}
                        eventoNombre={this.eventoNombre}
                        eventoGuardar={this.eventoGuardar}
                    />
                );
                break;
            case 'eliminar':
                const {nombreAlumnoAEliminar} = this.state;
                return(
                    <Eliminar 
                        nombre={nombreAlumnoAEliminar}
                        eventoEliminar = {this.eventoBorrar}
                    />
                );
                break;

            case 'actualizar':
                const {nombreAlumnoAActualizar, nuevoNombre} = this.state;
                return(
                    <Actualizar 
                    nombre = {nombreAlumnoAActualizar}
                    nuevoNombre={nuevoNombre}
                    eventoNuevoNombre = {this.eventNuevoNombre}
                    eventoActualizar = {this.eventoActualizar}
                    />
                );
                break;
        
            default:
                break;
        }

    }


};

export default AlumnoContenedor;



