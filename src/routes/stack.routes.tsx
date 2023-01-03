import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from '../pages/Login';
import {Register} from '../pages/Register';
import {Home} from '../pages/Home';

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
        
        </stackRoutes.Navigator>
)

export default AppRoutes;