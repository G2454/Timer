import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import Slider from '@react-native-community/slider';
import abacateRostoImg from '../assets/abacate_icon.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { getPadTime } from '../components/getPadTime';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import vovojuju3 from '../assets/Vovojuju3.png';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '../components/BottomSheet';
import { useNavigation } from '@react-navigation/native';
import { SurrenderCard3 } from './SurrenderCard3';




export function Home3(){

    const navigation = useNavigation();
        

    function portal3(){
        navigation.navigate('SurrenderCard3');
    }

    const [range, setRange] = useState(0);

    const [points, setPoints] = useState(0);

    const [timeLeft, setTimeLeft] = useState(range);

    const [isCounting, setIsCounting] = useState(false);

    const minutes = getPadTime(Math.floor((timeLeft/60)));
    const seconds = getPadTime(timeLeft-minutes*60);
    
    useEffect(() =>{
        const interval = setInterval(()=>{
            isCounting &&
            setTimeLeft((timeLeft)=>(timeLeft >= 1? timeLeft - 1 : 0));
        }, 1000);
        if(timeLeft === 0) setIsCounting(false);
        return () => {
            clearInterval(interval);
        };
    },[timeLeft ,isCounting]);

   const handleStart = () => {
    if(timeLeft === 0) setTimeLeft(range), setPoints(points +1);
    setIsCounting(true);

   };
   const handleStop = () => {

    setIsCounting(false);

   };


    return(
        <GestureHandlerRootView style={{flex: 1}}>
           
        <SafeAreaView style={styles.container} >
<View style={styles.abacate_Around}>
            <TouchableOpacity onPress={portal3}>
             <Image source={abacateRostoImg}></Image>
             </TouchableOpacity>
             <Text style = {styles.points}>{points}</Text>
        </View>
        
        
        <View>
            <Image source={vovojuju3}></Image>
        </View>
        
        <View style={styles.controls}>
            <View style={styles.clock}>
            <Text style={styles.numbers}>{ range/60 < 10 ? '0'+ range/60: range/60}</Text>
            <Text style={styles.numbers}>:</Text>
            <Text style={styles.numbers}>00</Text>
            </View>
        <View style={styles.slider}>
        <Slider
        style={{width: 300, height: 35}}
        onValueChange={(value)=>setRange(value*60)}
        minimumValue={0}
        maximumValue={60}
        step={5}
        minimumTrackTintColor='#628754'
        maximumTrackTintColor="#000000"
        thumbImage={abacateRostoImg}
/>
        <TouchableOpacity onPress = {handleStart}>
            <Ionicons name="play" size={36} color="red" /> 
        </TouchableOpacity>
                </View>
                  
            </View>
            <BottomSheet />

</SafeAreaView>
       </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    clock:{
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center',
    },
    numbers:{
        fontSize:58,
        fontFamily: fonts.timer,
        
    },

    slider:{
        marginTop:40,
        flexDirection:'row',
        backgroundColor:colors.green_light_background,
        borderRadius:8
    },

    controls:{
        marginTop:50,
        marginBottom:80
    },

    abacate_Around:{
        backgroundColor:colors.green_light_background,
        width:105,
        height:40,
        borderRadius:100,
        marginBottom:110,
        marginRight:250,
        flexDirection:'row',
    },

    points:{
        fontSize:18,
        fontFamily:fonts.timer,
        padding:5,
        paddingHorizontal:25
        
    },

  

});