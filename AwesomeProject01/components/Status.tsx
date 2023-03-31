import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,Linking } from 'react-native'
import React from 'react'

export default function Status() {
    const conCat=[
        {
          uid:1,
          
          imageUri:"https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Abyssinian_body_7.jpg?itok=Xleasaxh"
        },
        {
          uid:2,
          imageUri:"https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/AmericanBobtail_body_6.jpg?itok=974XSSws",

        },
        {
          uid:3,
          imageUri:"https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/AmericanCurlSHA_body_6.jpg?itok=wYcMRtpa",
        },
        {
          uid:4,
          imageUri:"https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/AmericanShorthair_body_6.jpg?itok=xarDHKyX",
        },
        {
            uid:5,
            imageUri:"https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSzuG8un3JV3TyDHN06CMFwJSvZyMPNyLUZGv56X1r2k_IyqR0HQpKv2QwH6IzhOfbCriU01McIgb9rueQ",
        }
        
      ]
    
  return (
    <View  >
      <ScrollView  horizontal scrollEnabled={true} style={styles.container} showsHorizontalScrollIndicator={false} >
        {conCat.map(({uid,imageUri})=>(
        <View key={uid} style={styles.status} >
           <TouchableOpacity onPress={()=>{Linking.openURL(imageUri)}}>
            <Image  style={styles.image} source={{uri:imageUri}} />
           </TouchableOpacity>
            
        </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    name:{flexShrink:1},
    status:{
        flexDirection:"column",
        margin:10,
        
    },
    image:{
        width:80,
        height:80,
       
        borderWidth:3,
        borderRadius:40,
        borderColor:"#FF6263"
    }
})