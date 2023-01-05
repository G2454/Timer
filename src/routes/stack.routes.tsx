import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from '../pages/Login';
import {Register} from '../pages/Register';
import {Home} from '../pages/Home';
import {HomeCard2} from '../pages/HomeCard2';
import {HomeCard3} from '../pages/HomeCard3';
import {BackAvocado} from '../pages/BackAvocado';
import {BackAvocadoCard2} from '../pages/BackAvocadoCard2';
import {BackAvocadoCard3} from '../pages/BackAvocadoCard3';
import {Surrender} from '../pages/Surrender';
import { SurrenderCard2 } from '../pages/SurrenderCard2';
import { SurrenderCard3 } from '../pages/SurrenderCard3';
import { teste } from '../pages/teste';



import colors from '../styles/colors'

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () =>(
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle:{
                backgroundColor:colors.white
            },
        }}
    >
        <stackRoutes.Screen
            name="Login"
            component={Login}
        />
        <stackRoutes.Screen
            name="Register"
            component={Register}
        />
        <stackRoutes.Screen
            name="Home"
            component={Home}
        />
        <stackRoutes.Screen
            name="HomeCard2"
            component={HomeCard2}
        />
        <stackRoutes.Screen
            name="HomeCard3"
            component={HomeCard3}
        />
        <stackRoutes.Screen
            name="BackAvocado"
            component={BackAvocado}
        />
        <stackRoutes.Screen
            name="BackAvocadoCard2"
            component={BackAvocadoCard2}
        />
        <stackRoutes.Screen
            name="BackAvocadoCard3"
            component={BackAvocadoCard3}
        />
        <stackRoutes.Screen
            name="Surrender"
            component={Surrender}
        />
        <stackRoutes.Screen
            name="SurrenderCard2"
            component={SurrenderCard2}
        />
        <stackRoutes.Screen
            name="SurrenderCard3"
            component={SurrenderCard3}
        />
        <stackRoutes.Screen
            name="teste"
            component={teste}
        />
    
        </stackRoutes.Navigator>
)

export default AppRoutes;