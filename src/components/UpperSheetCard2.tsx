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

import abacate from '../assets/Abacates.png'
import colors from '../styles/colors';
import { CardStyleInterpolators } from '@react-navigation/stack';
import fonts from '../styles/fonts';
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import {Home2} from '../pages/HomeCard2';

    

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;



const UpperSheetCard2 = () => {

  const navigation = useNavigation();

  function goHome(){
    navigation.navigate('Home2');
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
    <View style={{alignItems:'flex-end', top:20, right:10}}>  
     <Feather name="x" size={32} color="black" />
    </View>
    </TouchableNativeFeedback>
      <View style={{justifyContent:'center', alignItems:'center',top:50}}>
        <Text style={{textAlign:'left',justifyContent:'center', fontSize:40, fontFamily:fonts.title}}>Para que servem os abacates?</Text>
    </View>
    <View style={{paddingVertical:90, justifyContent:'center', alignItems:'center', padding:10}}>
      <Text style={{fontSize:20, fontFamily:fonts.button_no_border}}>Além de fazer bem e deixar o cabelo bonito,{'\n'}
os abacates servem como moedas, ou seja, a cada timer completo você ganha um, porém se nao terminar vai perder abacate bem. </Text>
    </View>

    <View style={styles.bottom}>
      <Image source={abacate} style={{height:240, width:'100%'}} />
    </View>
    </Animated.View>

    </GestureDetector>
  );
};

export default UpperSheetCard2

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

  }



});