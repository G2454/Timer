import React from 'react';
import {View, Text, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import abacateRostoImg from '../assets/abacate_icon.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';



export function Register(){
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={abacateRostoImg} style={styles.image}></Image>
                <Text style={styles.title}>teste {'\n'}começar</Text>
            </View >
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder='Email' />
                <TextInput style={styles.input} placeholder='Senha' />

                </View>

                <View >
                <TouchableOpacity style={styles.circle}>
                <Text style={styles.text}>APERTAR</Text>
                </TouchableOpacity>

               
                <View>
                    <Text style={styles.remember}>jA POSSUO CADASTRO</Text>
                </View>
            </View>
            
                
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
    },
    title:{
        marginTop:20,
        fontSize:36,
        textAlign:'left',
        color: colors.green_darker,
        fontFamily: fonts.title
    },
    image:{
        marginTop:80,
        alignSelf:'center'
    },
    form:{
        position:'absolute',
        flex:1,
        justifyContent:'center',
        paddingHorizontal:54,
        alignItems:'center',
        marginTop: 250,
        textAlign:"left"

    },
    input:{
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 150,
        paddingVertical:10,
        marginVertical: 10,
        textAlign:'left'
    },
    circle:{
        marginVertical:10,
        backgroundColor:colors.green_light,
        width:327,
        height:53,
        borderRadius:16,
        justifyContent:"center",
        alignItems:'center'
    },
    text:{
        fontSize:18,
        color:colors.white,
        fontFamily:fonts.button
    },

    remember:{
        marginVertical:50,
        fontFamily:fonts.button_no_border,
        textDecorationLine:'underline',
        textDecorationColor: colors.green_light

    }
 
})

