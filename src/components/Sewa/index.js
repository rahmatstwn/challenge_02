import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Mobil, bgTerang } from '../../assets';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Sewa = () => {
  return (
    <View style = {styles.container}>
      <Text style={styles.text}>Sewa Mobil Berkualitas di kawasanmu</Text>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={styles.container2}>
        <Text style={styles.text2}>
            Sewa Mobil
        </Text>
      </TouchableOpacity>
      <View style={{flexDirection:'column'}}>
      <Image source={bgTerang} style={styles.bg}/>
      <Image source={Mobil} style={styles.mobil}/>
      </View>
      </View>
    </View>
  )
}

export default Sewa

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#091B6F',
        height : 140,
        marginHorizontal: 18,
        borderRadius : 8,
        marginTop : Height*-0.10
    },
    text: {
        color: '#FFFFFF',
        marginTop: 24,
        marginLeft: 24,
        width : 180,
        fontSize: 16
    },
    container2: {
        backgroundColor : '#5CB85F',
        marginLeft: 24,
        borderRadius: 2,
        width: 109,
        height: 28,
        marginTop: 16,
        marginBottom: 24,
        justifyContent: 'center',
        alignItems: 'center'   
    },
    text2: {
        fontSize: 14,
        color : "#FFFFFF"
    },
    bg: {
        width: 230,
        height: 61.5,
        marginLeft: 12,
        marginTop: 13
    },
    mobil:{
        marginLeft: 24,
        marginTop: -115,
        width: 220,
        height: 120
    }

})