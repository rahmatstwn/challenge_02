import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { Mobil2 } from '../../assets'

const DaftarMobilToko = () => {
    const [DATA, setDATA] = useState([
        {
            id: 1,
            title: 'Daihatsu Xenia',
            Terjual: 2,
            Peminat: 4,
            Harga: "Rp 230.000"
        },
        {
            id: 2,
            title: 'Daihatsu Xenia',
            Terjual: 2,
            Peminat: 4,
            Harga: "Rp 230.000"
        },
        {
            id: 3,
            title: 'Daihatsu Xenia',
            Terjual: 2,
            Peminat: 4,
            Harga: "Rp 230.000"
        },
        {
            id: 4,
            title: 'Daihatsu Xenia',
            Terjual: 2,
            Peminat: 4,
            Harga: "Rp 230.000"
        },
        {
            id: 5,
            title: 'Daihatsu Xenia',
            Terjual: 2,
            Peminat: 4,
            Harga: "Rp 230.000"
        },
        {
            id: 6,
            title: 'Daihatsu Xenia',
            Terjual: 2,
            Peminat: 4,
            Harga: "Rp 230.000"
        },
        {
            id: 7,
            title: 'Daihatsu Xenia',
            Terjual: 2,
            Peminat: 4,
            Harga: "Rp 230.000"
        },
        {
            id: 8,
            title: 'Daihatsu Xenia',
            Terjual: 2,
            Peminat: 4,
            Harga: "Rp 230.000"
        }
    ]);

    return (
        <View>
            <Text style={styles.text3}>Daftar Mobil</Text>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.tombol}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={Mobil2} style={styles.gambar} />
                                <View style={{ flexDirection: 'column', marginLeft: 15, marginTop: 15 }}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                        <Icon name="users" size={12} style={styles.icon} />
                                        <Text style={{ marginRight: 8 }}>{item.Peminat}</Text>
                                        <Icon name="briefcase" size={12} style={styles.icon} />
                                        <Text>{item.Terjual}</Text>
                                    </View>
                                    <Text style={styles.Harga}>{item.Harga}</Text>
                                </View>

                            </View>
                        </TouchableOpacity>
                    )}
                />
        </View>
    )
}

export default DaftarMobilToko

const styles = StyleSheet.create({
    tombol: {
        marginHorizontal: 18,
        height: 115,
        borderRadius: 4,
        marginVertical: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,

    },
    Harga: {
        color: '#5CB85F',
        fontSize: 14
    },
    icon: {
        marginTop: 3,
        marginRight: 3
    },
    gambar: {
        marginLeft: 10,
        marginVertical: 30,
        width: 60,
        height: 40

    },
    title: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    text3: {
        marginLeft: 18,
        marginTop: 24,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000000'
    },
})