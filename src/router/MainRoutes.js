import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

//screens
import Home from '../screens/Home/home'
import Akun from '../screens/Akun/akun'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DaftarMobil from '../screens/DaftarMobil/daftarmobil'
import { BottomNavigator } from '../components';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

export default function MainRoutes() {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />} >
        <Tab.Screen name = "Home" component={Home} options={{headerShown : false}}/>
        <Tab.Screen name = "Daftar Mobil" component= {DaftarMobil} options={{headerShown : false}}/>
        <Tab.Screen name = "Akun" component={Akun} options={{headerShown : false}}/>
    </Tab.Navigator>
  )
}

