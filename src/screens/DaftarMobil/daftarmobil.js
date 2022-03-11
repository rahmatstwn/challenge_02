import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import DaftarMobilToko from '../../components/DaftarMobil'

export default function DaftarMobil() {
    return (
        <View style={styles.container}>
            {/* <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} /> */}
            <DaftarMobilToko/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF'
    }
})