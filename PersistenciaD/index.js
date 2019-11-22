/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import ProductoContenedor from './src/producto/Contenedores/producto-contenedor.js'

AppRegistry.registerComponent(appName, () => ProductoContenedor);
