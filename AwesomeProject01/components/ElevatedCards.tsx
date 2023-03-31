import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headerText} >ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
        
            <View style={[styles.card,styles.cardElevated]}>
                <Text>Tap</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>Me</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>To</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>Scroll</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>More....</Text>
            </View>
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
   headerText:{
    fontSize:24,
    margin:8
   },
   container:{
    flex:1
  },
   card:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    height:100,
    width:100,
    borderRadius:5,
    margin:8,
    color:"#f54242"
   },
   cardElevated:{
    backgroundColor:"#34e1eb"
   }
})