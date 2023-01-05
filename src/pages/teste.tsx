import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';


export function teste(){

    const [points, setPoints]=useState();
    const [range, setRange]=useState(0);

    useEffect(()=>{

        async function loadStoragePoints() {
            const avocados = await AsyncStorage.getItem('@timer:avocados');
            setPoints(avocados || '');

            const time = await AsyncStorage.getItem('@timer:time');
            setRange(time || 'a');
        }

        loadStoragePoints();
        

    },[points]);

    return(
        <View style = {styles.container}>
            
            <Text>{points}</Text>
          
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },

});