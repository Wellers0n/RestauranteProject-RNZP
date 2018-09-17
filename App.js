import React, {Component} from 'react';
import {View} from 'react-native';
import { createBottomTabNavigator} from 'react-navigation';
import Home from './src/Home'
import Contato from './src/Contato'
import Horarios from './src/Horarios'
import Sobre from './src/Sobre'

const Navegador =  createBottomTabNavigator({
  Home:{
    screen: Home
  },
  Contato:{
    screen: Contato
  },
  Horarios:{
    screen: Horarios
  },
  Sobre:{
    screen: Sobre
  }
},{
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions:{
      showIcon:true,
      showLabel: true,
      activeTintColor: 'white',
      inactiveTintColor: '#079ed4',
      activeBackgroundColor: '#079ed4',

    },
    
  });

export default Navegador;