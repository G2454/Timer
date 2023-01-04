import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from '../pages/Login';
import {Register} from '../pages/Register';
import {Home} from '../pages/Home';
import {Home2} from '../pages/HomeCard2';
import {Home3} from '../pages/HomeCard3';
import {Surrender} from '../pages/Surrender';
import {SurrenderCard2} from '../pages/SurrenderCard2';
import {SurrenderCard3} from '../pages/SurrenderCard3';



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
            name="Home2"
            component={Home2}
        />
        <stackRoutes.Screen
            name="Home3"
            component={Home3}
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
    
        </stackRoutes.Navigator>
)

export default AppRoutes;