import { StyleSheet, Text, View, Linking ,Image,TouchableOpacity, TurboModuleRegistry} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }

    

  return (
    <View>
      <Text style={styles.headerText} >Blog Card</Text>
      <View style={[styles.card,styles.cardElevated]} >
        <View style={styles.headingContainer}>
            <Text style={styles.heading} >
                What's new in Cats 
            </Text>
        </View>
        <View style={styles.imageContainer} >
            <Image style={styles.cardImage}
                source={{uri:"https://placekitten.com/200/300"}}
            />
        </View>
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita unde aperiam eveniet tempore, quas accusantium rerum suscipit cumque quos nostrum hic sequi doloribus deserunt vero itaque eligendi enim reprehenderit.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=>{openWebsite("https://www.pexels.com/search/cats/")}}>
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{openWebsite("https://twitter.com/home")}}>
                <Text style={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headerText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:15,
        

    },
    heading:{
        fontSize:15,
        fontWeight:"500",
        color:"#333"
    },
    card:{
        height:350,
        width:380,
        borderRadius:5,
        marginVertical:10,
        marginHorizontal:15
    },
    cardElevated:{
        backgroundColor:'#808080',
        elevation:10,
        shadowOffset:{
            height:1,
            width:1
        },
        shadowColor:"black",
        shadowOpacity:1
    },
    headingContainer:{
        height:25,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    imageContainer:{
        height:200,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    
    cardImage:{
        height:200,
        width:200
    },
    bodyContainer:{
        padding:10
    },
    footerContainer:{
        padding:8,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",

        
    },
    socialLinks:{
        color:"#333",
        backgroundColor:"#ffffff",
        paddingHorizontal:20,
        paddingVertical:5,
        fontSize:18,
        borderRadius:5,
        elevation:4,
        shadowColor:"white"
    }
})