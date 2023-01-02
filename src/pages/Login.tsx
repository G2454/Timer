import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import abacateRostoImg from '../assets/abacate_icon.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/Button';
import { color } from 'react-native-reanimated';


export function Login(){
    
    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('Register');
    }


    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={abacateRostoImg} style={styles.image}></Image>
                <Text style={styles.title}>Faça seu login para {'\n'}começar</Text>
            </View >
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder='Email' />
                <TextInput style={styles.input} placeholder='Senha' />

                <View style={styles.footer}>
                
                <Button
                title={'Entrar'}
                
                />

                </View>

                <View style={styles.footer}>
                <Button
                title={'Criar Conta'}
                style={styles.newAccount}
                onPress={handleStart}
                />
                </View>
                

                <View>
                    <Text style={styles.remember}>Esqueci minha senha</Text>
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
        paddingHorizontal: 10,
        paddingVertical:10,
        marginVertical: 10,
        textAlign:'left'
    },
    footer:{
        width:300,
        marginTop:20,
        paddingHorizontal:20,
    },
    newAccount:{
        backgroundColor:colors.white,
        borderWidth:1,
        borderColor:colors.green_light,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'

    },
    text:{
        color:colors.white,
    },
    
    remember:{
        marginVertical:50,
        fontFamily:fonts.button_no_border,
        textDecorationLine:'underline',
        textDecorationColor: colors.green_light

    }
 
})

