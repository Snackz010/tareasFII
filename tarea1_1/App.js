/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView
} from 'react-native'

import Login from './src/login/login.js';
import Home from './src/home/home.js'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      view: 'Login',
      textinputValue: ''
    }
    this.handledtextChange = this.handledtextChange.bind(this);//enlazamos el metodo al contexto actual
  }

  //Este metodoo nos permite capturar el valor del textinput que esta dentro del componente Login
  //Se debe enlazar al contexto actual para que pueda modificar el estado(No necesario, funciona sin enlazar por alguna razón)
  handledtextChange = (data) => {
    this.setState({
      textinputValue: data
    });
  }


  //Funcion para cambiar a la pantalla Home y viceversa
  btnpress = () => {
    let actualState = this.state;

    (actualState.view === 'Login')? 
    this.setState({
      view: 'Home'
    }) :
    this.setState({
      view: 'Login'
    })
  }



  //Carga de componente en pantalla por defecto es login
  render(){
    let actualState = this.state;

    if (actualState.view === 'Login') {
      return(
        <Login 
        changeText= {this.handledtextChange} 
        press= {this.btnpress}/>
      );
    }if(actualState.view === 'Home'){
      return(
            <Home 
            username={actualState.textinputValue}
            press={this.btnpress}/>
      );
    }
  }
}

export default App;
