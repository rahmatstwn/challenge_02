import { StyleSheet, Text,View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

const Fitur = () => {
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={styles.text}>
            <TouchableOpacity style={styles.kotak}>
                <Icon name="truck" size={24} color='#5cb85f'/> 
            </TouchableOpacity>
            <Text style={{color:'#000000'}}>Sewa Mobil</Text>
            </View>
            <View style={styles.text}>
            <TouchableOpacity style={styles.kotak}>
                <Icon name="box" size={24} color='#5cb85f'/>
            </TouchableOpacity>
            <Text style={{color:'#000000'}}>Oleh-oleh</Text>
            </View>
            <View style={styles.text}>
            <TouchableOpacity style={styles.kotak}>
                <Icon name="key" size={24} color='#5cb85f'/>
            </TouchableOpacity>
            <Text style={{color:'#000000'}}>Penginapan</Text>
            </View>
            <View style={styles.text}>
            <TouchableOpacity style={styles.kotak}>
                <Icon name="camera" size={24} color='#5cb85f'/>
            </TouchableOpacity>
            <Text style={{color:'#000000'}}>Wisata</Text>
            </View>
        </View>
    )
}

export default Fitur

const styles = StyleSheet.create({
    kotak:{
        backgroundColor : '#DEF1DF',
        marginHorizontal: 16,
        borderRadius: 8,
        width: 70,
        height: 70,
        marginTop: 32,
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        alignItems:'center'
    }
})