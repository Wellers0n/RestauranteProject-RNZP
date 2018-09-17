import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Lista extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeProduto', {title: this.props.data.title, produtos: this.props.data.produtos, key: this.props.data.key})}>
                <View style={[styles.listaItens, {backgroundColor: this.props.data.bg}]}>
                    <Image source={this.props.data.img} style={styles.img}/>
                    <View style={styles.containerText}>
                        <Text style={styles.titulo}>{this.props.data.title}</Text>
                        <Text style={styles.descricao}>{this.props.data.descricao}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    listaItens:{
        height: 100,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    img:{
        marginLeft: 10,
    },
    containerText:{    
        alignItems: 'center',
        flex:1
    },
    titulo:{
        color: 'white',
        fontSize: 28,
    },
    descricao:{
        color:'white',
        fontSize: 18,
    }
})