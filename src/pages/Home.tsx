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
import vovojojo1 from '../assets/Vovojuju1.png';
import vovojojo2 from '../assets/Vovojuju2.png';
import vovojojo3 from '../assets/Vovojuju3.png';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '../components/BottomSheet';
import { useNavigation } from '@react-navigation/native';
import { BackAvocado } from './BackAvocado';
import { FontAwesome } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Surrender } from './Surrender';



export function Home(){

    const navigation = useNavigation();


    function whatIsAvocado(){
        navigation.navigate('BackAvocado');
    }

    const [vovo, setVovo] = useState<string>();

    const [range, setRange] = useState(0);

    const [vovo2, setVovo2] = useState();
    const [teste, setTeste] = useState();

    const [points, setPoints] = useState(0);

    const handleStop = () => {

        setIsCounting(false);
        setPoints(points -1);
        setRange(0);
        navigation.navigate('Surrender');
    
       };

    const [timeLeft, setTimeLeft] = useState(range);

    const [isCounting, setIsCounting] = useState(false);

    const minutes = getPadTime(Math.floor((timeLeft/60)));
    const seconds = getPadTime(timeLeft-minutes*60);

    function clearAllData() {
        AsyncStorage.getAllKeys()
            .then(keys => AsyncStorage.multiRemove(keys))
            .then(() => alert('success'));
    }

   

 
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
   

   
   function underClock(){
    if(isCounting == false){
        return(
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
        )
    }else{
        return(
            <View style={styles.stop}>
        <TouchableOpacity onPress = {handleStop}>
            <FontAwesome name="square" size={24} color="white" /> 
        </TouchableOpacity>
        </View>
        )
    }
   }

   function clockDisplay(){
    if(isCounting == false){
        return(
            <View style={styles.clock}>
            <Text style={styles.numbers}>{ range/60 < 10 ? '0'+ range/60: range/60}</Text>
            <Text style={styles.numbers}>:</Text>
            <Text style={styles.numbers}>00</Text>
            </View>
        )
    }else{
        return(
            <View style={styles.clock}>
            <Text style={styles.numbers}>{ minutes}</Text>
            <Text style={styles.numbers}>:</Text>
            <Text style={styles.numbers}>{seconds}</Text>
            </View>
        )
    }
   }

 

    return(
        <GestureHandlerRootView style={{flex: 1}}>
           
        <SafeAreaView style={styles.container} 
        >
        <View style={styles.abacate_Around}>
            <TouchableOpacity onPress={whatIsAvocado}>
             <Image source={abacateRostoImg}></Image>
             </TouchableOpacity>
             <Text style = {styles.points}>{points}</Text>
        </View>
            
        <View>
                <Image source={vovojojo1}></Image>
        </View>
        
        <View style={styles.controls}>
            <View>
            {clockDisplay()}
            </View>
            
        <View>
        {underClock()}
        </View>

        </View>
            
            <BottomSheet />
            
</SafeAreaView>
       </GestureHandlerRootView>
  );

};

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
    stop:{
        marginTop:20,
        marginLeft:45,
        alignItems:'center',
        justifyContent:'center',
        width:56,
        height:56,
        backgroundColor:"#FF0000",
        borderRadius:28,
    }
  

});