import { ScrollView, StyleSheet, Text, View ,Image,  TouchableOpacity,Linking, ImageBackground} from 'react-native'
import React from 'react'
import { useEffect } from 'react'

export default function Cats() {
  const conCat=[
    {
      uid:1,
      name:"Abyssinian Cat",
      imageUri:"https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/Abyssinian_body_7.jpg?itok=Xleasaxh",
      buyNow:"https://www.purina.com/breeds/abyssinian-cat"
    },
    {
      uid:2,
      name:"American Bobtail Cat Breed",
      imageUri:"https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/AmericanBobtail_body_6.jpg?itok=974XSSws",
      buyNow:"https://www.purina.com/cats/cat-breeds/american-bobtail"
    },
    {
      uid:3,
      name:"American Curl Cat Breed",
      imageUri:"https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/AmericanCurlSHA_body_6.jpg?itok=wYcMRtpa",
      buyNow:"https://www.purina.com/cats/cat-breeds/american-curl"
    },
    {
      uid:4,
      name:"American Shorthair Cat",
      imageUri:"https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_240/public/AmericanShorthair_body_6.jpg?itok=xarDHKyX",
      buyNow:"https://www.purina.com/cats/cat-breeds/american-shorthair"
    }
  ]
  const url={uri:"https://cdna.artstation.com/p/assets/images/images/016/902/948/large/rona-voron-sketch1552605691615.jpg?1553895116"}
    return (
      <View>
      <Text style={styles.headingText}  >Cats List</Text>
        <ImageBackground source={url} resizeMode="cover" style={styles.image} >
      <ScrollView style={styles.container} scrollEnabled={false} >
        {conCat.map(({uid, name,imageUri,buyNow}) => (
          <View key={uid} style={styles.catCard} >
            <Image
              source={{uri:imageUri}}
              style={styles.catImage}
            />  
            <Text style={styles.catName}>{name}</Text>
            <View style={styles.button}>
              <TouchableOpacity onPress={()=>{Linking.openURL (buyNow)}} ><Text style={styles.buyNow}>Buy Now</  Text></TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      </ImageBackground>
    </View>

  )
}

const styles = StyleSheet.create({
  image:{
    flex:1,
    justifyContent:"flex-start",
    
  },
  headingText:{
    fontSize:24,
    margin:8
  },
  container:{
    // backgroundColor:"black",
  },
  catCard:{
    width:380,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly"
    
  },
  catImage:{
    height:100,
    width:100,
    borderRadius:50,
    padding:10,
    margin:10,
    marginLeft:30
  },
  catName:{
    color:"white",
    fontSize:20,
    flexShrink:1,
    marginLeft:10
  },
  button:{
    flexShrink:0,
    backgroundColor:"white",
    marginLeft:10,
    borderRadius:6,
    elevation:4,
    shadowOffset:{
      height:10,
      width:1
    },
    shadowColor:"white"
  
  },
  buyNow:{
    fontSize:20,
    paddingHorizontal:10,
    color:"black",
  }
})