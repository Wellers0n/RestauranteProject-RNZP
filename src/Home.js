import React, {Component} from 'react';
import {View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeList from './HomeList';
import HomeProducts from './HomeProducts'


const Navegador = StackNavigator({
  HomeLista:{
    screen: HomeList
  },
  HomeProduto:{
      screen: HomeProducts
  },
  }, {
    navigationOptions:{
      headerTitleStyle:{
        color: '#079ed4',
        textAlign:'left',
        flex:1,
      }
    },
    cardStyle:{
      backgroundColor:'white',
      
      
  }});

export default Navegador;