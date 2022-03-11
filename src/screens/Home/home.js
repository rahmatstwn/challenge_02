import { StyleSheet, Text, View, StatusBar, Dimensions, Image } from 'react-native'
import React from 'react'
import { Fitur, Sewa, MobilPilihan } from '../../components';
import { foto } from '../../assets';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


export default function Home() {

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#D3D9FD'} barStyle={'dark-content'} />
            <View style={{ flexDirection: 'row' ,backgroundColor: '#D3D9FD',}}>
                <View style={styles.atas}>
                    <Text style={styles.text}>Hi, Rahmat Setiawan</Text>
                    <Text style={styles.text2}>Bandar Lampung </Text>
                </View>
                <Image source={foto} style={{marginLeft: 230, marginTop:5}}/>
            </View>
            <Sewa />
            <View style={{ backgroundColor: '#FFFFFF' }}>
                <Fitur />
            </View>
            <MobilPilihan />
        </View>
    )
}


const styles = StyleSheet.create({
    atas: {
        backgroundColor: '#D3D9FD',
        // width: 360,
        height: Height * 0.176,
        flexDirection: 'column'

    },
    text: {
        marginLeft: 18,
        fontSize: 12,
        color: '#000000'
    },
    text2: {
        fontWeight: 'bold',
        marginTop: 4,
        marginLeft: 18,
        color: '#000000'
    },
    text3: {
        marginLeft: 18,
        marginTop: 24,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000000'
    },
    stel: {
        alignItems: 'center',
        alignContent: 'center'
    },


})