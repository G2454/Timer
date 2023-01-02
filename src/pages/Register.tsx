import React, {useState} from 'react';
import {View, Text, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import abacateRostoImg from '../assets/abacate_icon.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../components/Button';



export function Register(){

    const [input,setInput] = useState('');
    const [hidePass, setHidePass]= useState(false);



    return(
        <SafeAreaView style={styles.container}>
            
            
           
            <View>
            <Text style={styles.cancel}>Cancelar</Text>
                <Image source={abacateRostoImg} style={styles.image}></Image>
                <Text style={styles.title}>Crie sua conta</Text>
            </View >
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder='Nome do Usuário' />
                <TextInput style={styles.input} placeholder='Email' />
                
                <View style={styles.inputArea}>
                <TextInput style={styles.password} placeholder='Senha'
                value={input}
                onChangeText={(texto) =>setInput(texto)}
                secureTextEntry={hidePass}
                 />

                <TouchableOpacity style={styles.icon}
                onPress={()=> setHidePass(!hidePass)}>
                    {hidePass ?
                <Ionicons name="eye" color="#000" size={25}/> 
                :
                <Ionicons name="eye-off" color="#000" size={25}/>
            }           
                    </TouchableOpacity>
                </View>

                </View>
                
                <View style={styles.button}>
                <Button
                title={'Cadastrar'}
                />

               
                <View>
                    <Text style={styles.remember}>Já tenho uma conta</Text>
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
        borderColor: colors.green_light,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical:10,
        marginVertical: 10,
        textAlign:'left'
    },
    
    text:{
        fontSize:18,
        color:colors.white,
        fontFamily:fonts.button
    },

    remember:{
        marginVertical:10,
        fontFamily:fonts.button_no_border,
        textDecorationLine:'underline',
        textDecorationColor: colors.green_light,
        textAlign:'center'
        

    },
    cancel:{
        fontFamily:fonts.button_no_border,
        marginRight:300,
        marginTop:60
    },
    password:{
        width:"85%",
       
        
    },
    icon:{
        width:'15%',
        justifyContent:'center',
        alignItems:"center"
    },
    inputArea:{
        flexDirection: 'row',
        width:'100%',
        backgroundColor:colors.white,
        borderRadius: 5,
        borderColor: colors.green_light,
        borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:10,
        marginVertical: 10,
        alignItems:'center',
       
    },
    button:{
        width:327,
        height:53,
        position:'absolute',
        marginTop:500

    }
 
})

