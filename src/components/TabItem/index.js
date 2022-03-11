import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {IconHome, IconHomeAktif, IconList, IconListAktif, IconUser, IconUserAktif} from '../../assets/'
import { WARNA_AKTIF, WARNA_NON} from '../../utils/constans'

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
    const Icon = () => {
        if ( label === "Home") return isFocused ? <IconHomeAktif/> : <IconHome/>

        if ( label === "Daftar Mobil") return isFocused ? <IconListAktif/> : <IconList/>

        if ( label === "Akun") return isFocused ? <IconUserAktif/> : <IconUser/>

        return <Iconhome/>
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            <Icon/>
            <Text style={styles.text(isFocused)}>{label}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container : {
        alignItems:'center',
    },
    text : (isFocused) => ({
        fontSize : 12,
        color : isFocused ?  WARNA_AKTIF : WARNA_NON,
        marginTop : 5
        
    })
})