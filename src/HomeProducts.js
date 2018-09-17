import { View, Text, Image, StyleSheet, FlatList, Button } from 'react-native';
import React, { Component } from 'react';
import ListaProdutos from './ListaProdutos';

export default class HomeProducts extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: props.navigation.state.params.produtos,
            key: props.navigation.state.params.key
        };
    }

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title,
        tabBarLabel: 'Home',
        tabBarIcon:({focused}, {tintColor}) => {
            if(focused){
            return(
                <Image source={require('../assets/images/home_azul.png')}  style={styles.icone} />
            );}else{
                return(
                    <Image resizeMode={'contain'} source={require('../assets/images/home_preto.png')} style={styles.icone} />
                );}
        }
    })

    render(){
        return(
            <View>
              <FlatList data={this.state.list}
                        keyExtractor={({item}) => this.state.key.toString()} 
                        renderItem={({item}) => <ListaProdutos key={this.state.key} data={item} /> }
                        />  
            </View>
        )
    }
}


const styles = StyleSheet.create({
    icone:{
        height: 25,
        width: 25
    }
})