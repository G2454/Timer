import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    
} from 'react-native';

import Slider from '@react-native-community/slider';
import abacateRostoImg from '../assets/abacate_icon.png';
import colors from '../styles/colors';
import { getPadTime } from '../components/getPadTime';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 



export function Home(){

    const [range, setRange] = useState(0);


    const [timeLeft, setTimeLeft] = useState(range);

    const [isCounting, setIsCounting] = useState(false);

    const minutes = getPadTime(Math.floor((timeLeft/60)));
    const seconds = getPadTime(timeLeft-minutes*60);
    
    useEffect(() =>{
        const interval = setInterval(()=>{
            isCounting &&
            setTimeLeft((timeLeft)=>(timeLeft >= 1? timeLeft - 1 : 0));
        }, 1000);
        if(timeLeft === 0) setIsCounting(false)
        return () => {
            clearInterval(interval);
        };
    },[timeLeft ,isCounting]);

   const handleStart = () => {
    if(timeLeft === 0) setTimeLeft(range);
    setIsCounting(true);

   };
   const handleStop = () => {

    setIsCounting(false);

   };

    return(
        <SafeAreaView style={styles.container} >

            {}

            <View style={styles.clock}>
                <Text style={styles.numbers}>{minutes}</Text>
                <Text style={styles.numbers}>:</Text>
                <Text style={styles.numbers}>{seconds}</Text>
            </View>
        <View style={styles.slider}>
        <Slider
        style={{width: 300, height: 35}}
        onValueChange={(value)=>setRange(value*60)}
        minimumValue={0}
        maximumValue={1}
        step={0.1}
        minimumTrackTintColor='#628754'
        maximumTrackTintColor="#000000"
        thumbImage={abacateRostoImg}
/>
<TouchableOpacity onPress={isCounting? handleStop: handleStart}>
{isCounting?
    (<Ionicons name="square" size={36} color="red" /> )
    :
(<AntDesign name="play" size={36} color="red" />)

}
</TouchableOpacity>
        </View>
           <Text>{range}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    clock:{
        flexDirection:"row"
    },
    numbers:{
        fontSize:40
    },
    slider:{
        flexDirection:'row',
        backgroundColor:colors.green_light_background,
        borderRadius:8
    },

})