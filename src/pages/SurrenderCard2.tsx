import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import UpperSheet from '../components/UpperSheetCard2';
import colors from '../styles/colors';

export function SurrenderCard2(){
    return(
        <GestureHandlerRootView style={{flex:1}}>
        <View style={styles.container}>

        <UpperSheet/>  
        </View>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.green_light_background
    },

});