import { View, Text, Image, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class Contato extends Component{
    constructor(props){
        super(props);
        this.state;
    }

    static navigationOptions = {
        tabBarLabel: 'Contato',
        tabBarIcon:({focused, tintColor}) => {
            if(focused){
            return(
                <Image source={require('../assets/images/contato_preto.png')} style={styles.icone} />
            )}else{
                return(
                    <Image source={require('../assets/images/contato_azul.png')} style={styles.icone} />
                )}
        }
    }

    render(){
        return(
            <View>
                <Text>Oi</Text>
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

