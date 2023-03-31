import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headerText}>Trending Carnivore</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image 
            source={{
                uri:"https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg"
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Cute Cat</Text>
          <Text style={styles.cardLable}>Cats are not friendly </Text>
          <Text style={styles.cardDiscription}>Cats are evil Cats are evil Cats are evil Cats are evil Cats are evil Cats are evilCats are evil Cats are evil Cats are evil </Text>
          <Text style={styles.cardFooter}>Suggestion: Don't Buy</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headerText:{
      fontSize:24,
      margin:8
    },
    cardImage:{
        height:200,marginBottom:10,borderTopLeftRadius:5,borderTopRightRadius:10
    },
    card:{
      height:350,
      width:380,
      borderRadius:5,
      marginHorizontal:15,
      marginVertical:12
    },
    cardElevated:{
      backgroundColor:"white",
      elevation:4,
      shadowOffset:{
        width:1,
        height:1
      }
    },
    cardBody:{
      flex:1,
      flexGrow:1,
      paddingHorizontal:10
    },
    cardTitle:{
      color:"black",
      fontSize:20,
      fontWeight:"400",
      marginBottom:5,
      
      
    },

    cardLable:{color:"black",fontSize:16,marginBottom:5},
    cardDiscription:{color:"black",fontSize:13},
    cardFooter:{color:"black",fontSize:13}
})