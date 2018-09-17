import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import React, { Component } from 'react';
import Lista from './Lista';


export default class HomeList extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: [
                {
                    key: 1,
                    title: 'Prato Executivo',
                    descricao: 'Pratos já prontos para comer',
                    img: require('../assets/images/tipos/pe.png'),
                    bg: '#e35339',
                    produtos: [
                        {nome: 'Prato de Frango', img: require('../assets/images/cardapio/pe/executivos_frang_.png')},
                        {nome: 'Prato de Peixe', img: require('../assets/images/cardapio/pe/executivos_peix_.png')},
                        {nome: 'Prato de Picanha', img: require('../assets/images/cardapio/pe/executivos_picanh_.png')}
                    ]
                },
                {
                    key: 2,
                    title: 'Saladas',
                    img: require('../assets/images/tipos/saladas.png'),
                    descricao: 'Pratos saudáveis para você.',
                    bg: '#a6bb24',
                    produtos: [
                        {nome: 'Salada de Frango', img: require('../assets/images/cardapio/saladas/salada-fr.png')},
                        {nome: 'Salada água doce', img: require('../assets/images/cardapio/saladas/salada_aguadoc_.png')},
                        {nome: 'Salada de Salmão', img: require('../assets/images/cardapio/saladas/salada_salma.png')}
                    ]
                },
                {
                    key: 3,
                    title: 'Bebidas',
                    img: require('../assets/images/tipos/bebidas.png'),
                    descricao: 'Bebidas para você.',
                    bg: '#079ed4',
                    produtos: [
                        {nome: 'Capirosca', img: require('../assets/images/cardapio/bebidas/capirosc_3.png')},
                        {nome: 'Cookies cream', img: require('../assets/images/cardapio/bebidas/cookies_crea.png')},
                        {nome: 'morango GD', img: require('../assets/images/cardapio/bebidas/morango_gd.png')},
                        {nome: 'Patra', img: require('../assets/images/cardapio/bebidas/patra.png')},
                        {nome: 'Suco Fitness', img: require('../assets/images/cardapio/bebidas/suco_fitines_gd.png')},
                    ]
                },
                {
                    key: 4,
                    title: 'Sobremesas',
                    img: require('../assets/images/tipos/sobremesa.png'),
                    descricao: 'Sobremesas Deliciosas.',
                    bg: '#fcb81c',
                    produtos: [
                        {nome: 'Brownie', img: require('../assets/images/cardapio/sobremesas/brownie_gd.png')},
                        {nome: 'Creme papaya', img: require('../assets/images/cardapio/sobremesas/creme_papaya_cassis_gd.png')},
                        {nome: 'Delicia Gelada', img: require('../assets/images/cardapio/sobremesas/delicia_gelada_gd.png')},
                    ]
                },
                
                
            ]
        }
    }

    static navigationOptions = {
        title: 'Restaurante',
        tabBarLabel: 'Home',
        tabBarIcon:({focused, tintColor}) => {
            if(focused){
            return(
                <Image source={require('../assets/images/home_preto.png')} style={styles.icone} />
            );}else{
                return(
                    <Image source={require('../assets/images/home_azul.png')}  style={styles.icone} />
                );}
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList data={this.state.list} keyExtractor={(item) => item.key.toString()} renderItem={({item}) => <Lista key={item.key} data={item} navigation={this.props.navigation} />} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    icone:{
        height: 25,
        width: 25
    }
})