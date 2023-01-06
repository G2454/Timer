import React from 'react';
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';


import {
    useFonts,
    OpenSans_400Regular,
    OpenSans_600SemiBold
} from '@expo-google-fonts/open-sans';

import{
    NunitoSans_400Regular,
    NunitoSans_700Bold
} from '@expo-google-fonts/nunito-sans'


export default function App() {

  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });

  if (!fontsLoaded)
  return <AppLoading />
  

  return (
   <Routes />
  )
}


