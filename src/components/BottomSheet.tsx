import { StyleSheet, Text, View, Dimensions, Image, Touchable, TouchableOpacity} from 'react-native';
import React, {useState,useCallback, useEffect, useImperativeHandle} from 'react';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,

} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { Home } from '../pages/Home';
import { HomeCard2 } from '../pages/HomeCard2';
import { HomeCard3 } from '../pages/HomeCard3';

import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'

import AsyncStorage from '@react-native-async-storage/async-storage';



const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT+50;

const BottomSheet = () => {
  const navigation = useNavigation();
  const [vovo, setVovo] = useState<string>();
  const [vovo2, setVovo2] = useState<string>();
  const [teste, setTeste] = useState<string>();

  const translateY = useSharedValue(0);

  const scrollTo = useCallback((destination:number)=>{
    'worklet';
    translateY.value = withSpring(destination, { damping: 50 });
  }, [])

  const context = useSharedValue({y:0});

  const gesture = Gesture.Pan().onStart(()=>{
    context.value = { y: translateY.value}
  }).onUpdate((event)=>{
    translateY.value = event.translationY + context.value.y;
    translateY.value = Math.max(translateY.value,MAX_TRANSLATE_Y );
  }).onEnd(()=>{
    if(translateY.value > -SCREEN_HEIGHT/3){
      scrollTo(0)
    }else if (translateY.value < -SCREEN_HEIGHT/1.5){
      scrollTo(MAX_TRANSLATE_Y)
    }
  })
  
    function handleProfile(){
    setVovo('normal');
    navigation.navigate('Home');


  }

   function handleProfile2(){
    setVovo('mc');
    navigation.navigate('HomeCard2');

  }

   function handleProfile3(){
    setVovo('pato');
    navigation.navigate('HomeCard3');
  }




  useEffect (() =>{
   scrollTo(-SCREEN_HEIGHT/3)
  }, []);

  const rBottomSheetStyle = useAnimatedStyle(()=>{

    const borderRadius = interpolate(
      translateY.value, [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y], [25, 5],
      Extrapolate.CLAMP
    );

    return{
      borderRadius,
      transform: [{ translateY: translateY.value}],
    };
  });

  return(
    <GestureDetector gesture={gesture}>
    <Animated.View style = {[styles.bottomSheetContainer, rBottomSheetStyle]} >
      <View style = {styles.line} />
      <View style={styles.cards}>
        
        <TouchableOpacity onPress={handleProfile}>
        <Image source={card1} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleProfile2} >
        <Image source={card2} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleProfile3} >
        <Image source={card3} />
        </TouchableOpacity>

      </View>

    </Animated.View>
    </GestureDetector>
  )
}

export default BottomSheet





const styles = StyleSheet.create({

  bottomSheetContainer:{
    height: SCREEN_HEIGHT,
    width:'100%',
    backgroundColor:'#F4E3E1',
    position:'absolute',
    top: SCREEN_HEIGHT,
    borderRadius:25,
  },
  line:{
    width:75,
    height:4,
    backgroundColor:'#B4908C',
    alignSelf:'center',
    marginVertical: 15,
    borderRadius:2
  },

  cards:{
    justifyContent:'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding:15,
    
  }


});