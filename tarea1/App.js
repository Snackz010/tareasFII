/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert
} from 'react-native';

import Login from './src/login/loging.js';
import Home from './src/home/home.js'

  class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        currentView: 'Login',
      };
    }


    render(){
      var  activeView  = this.state.currentView;
      if (activeView == 'Login') {
        return(
          <Login 
          press={this.pressEvent}
          />
        );
      }else{
        return(
         <Home 
         press={this.pressEvent}
         />
        );
      }
    }

    pressEvent = ()=> {
      var actualState = this.state;
      (actualState.currentView == 'Login')?
      this.setState({
        currentView:'Home'
      }) :
      this.setState({
        currentView:'Login'
      });
    }    
  
  }
export default App;
