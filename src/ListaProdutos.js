import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

export default class ListaProdutos extends Component{
    constructor(props){
        super(props);
        this.state
    }

    render(){
        return(
            <View style={styles.container}>
                <Image resizeMode={'contain'} source={this.props.data.img} style={styles.img} />
                <Text style={styles.texto}>{this.props.data.nome}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#079ed4',
        margin: 15,
        height: 120,
        borderRadius: 20,
        alignItems: 'center',
    },
    texto:{
        color: 'white',
        flex:1,
        fontSize: 30,
        textAlign: 'left',
        margin: 8
    },
    img:{
        height: 80,
        width: 80,
        borderRadius: 40,
        margin: 5,
    }
})