
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import MainRoutes from './src/router/MainRoutes';

export default function App () {
  useEffect (() => {
    SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer>
      <MainRoutes/>
    </NavigationContainer>
  );
}