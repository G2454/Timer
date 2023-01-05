import { Dimensions, StyleSheet, Text, View, Image, TouchableNativeFeedback} from 'react-native';
import { StatusBar } from 'expo-status-bar';  
import React, { useCallback, useEffect, useImperativeHandle } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import abacate from '../assets/surrender.png'
import colors from '../styles/colors';
import { CardStyleInterpolators } from '@react-navigation/stack';
import fonts from '../styles/fonts';
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import {HomeCard3} from '../pages/HomeCard3';
import { Button } from './Button';

    

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;



const SurrenderAlertCard3 = () => {

  const navigation = useNavigation();

  function goHome(){
    navigation.navigate('HomeCard3');
  }

  const translateY = useSharedValue(0);

  const context = useSharedValue ({y:0});

  const gesture = Gesture.Pan().onStart(()=>{
    context.value = {y:translateY.value};
  }).onUpdate((event) =>{
    translateY.value = event.translationY + context.value.y;
    translateY.value = Math.max(translateY.value, SCREEN_HEIGHT);
  });

    useEffect(()=>{
      translateY.value = withTiming(SCREEN_HEIGHT*1.67, { duration:1000});
    },[])
  

  const rUpperSheetStyle = useAnimatedStyle(()=>{
    return{
      transform: [{ translateY: translateY.value}]
    };
  });

  return(
    <GestureDetector gesture={gesture}>
    <Animated.View style={[styles.upperSheetContainer, rUpperSheetStyle]}>
      <TouchableNativeFeedback onPress={goHome}>
    <View style={{alignItems:'flex-end', right:10, top:20}}>  
     <Feather name="x" size={32} color="black" />
    </View>
    </TouchableNativeFeedback>
      <View style={{justifyContent:'center', alignItems:'center', top:40}}>
        <Text style={{textAlign:'left',justifyContent:'center', fontSize:40, fontFamily:fonts.title}}>Tem certeza que vai desistir bem?</Text>
    </View>
    <View style={{paddingVertical:70, justifyContent:'center', alignItems:'center', padding:10, top:10}}>
      <Text style={{fontSize:20, fontFamily:fonts.button_no_border}}>Cuidado, se desistir vai perder um abacate.{'\n'} 
Como assim não gosta de abacate?</Text>
    </View>

    <View style={{justifyContent:'center', alignItems:'center', flex:1, top:-10}}>
      <Button style={styles.botao} title={'Desistir'} onPress={goHome} />
    </View>

    <View style={styles.bottom}>
      <Image source={abacate} style={{height:240, width:'100%'}} />
    </View>
    </Animated.View>

    </GestureDetector>
  );
};

export default SurrenderAlertCard3

const styles = StyleSheet.create({
  upperSheetContainer:{
    height:SCREEN_HEIGHT,
    width:'100%',
    backgroundColor:colors.green_light_background,
    bottom:SCREEN_HEIGHT+500,
  },
  container:{
flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  bottom:{
    marginTop:SCREEN_HEIGHT/14,
  },
  question:{
    
    justifyContent:'center',
    alignItems:"center"

  },
  botao:{
    width:200,
    height:50,
    backgroundColor:'#E64848',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25
  }



});