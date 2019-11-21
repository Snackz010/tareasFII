/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AlumnoContenedor from './src/estudiante/contenedores/alumno-contenedor.js'

AppRegistry.registerComponent(appName, () => AlumnoContenedor);
