import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headerText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
          <Text>
            Red
          </Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
          <Text>
            Blue
          </Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
          <Text>
            Green
          </Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
          <Text>
            Green
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerText:{
    fontSize:23,
    padding:10
  },
  container:{
    flex:1,
    flexDirection:"row",
    
    justifyContent:"space-evenly"
  },
  card:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:4,
    margin:8,
    height:100,
    maxWidth:100
  },
  cardOne:{backgroundColor:"#fa5f43"}
  ,cardTwo:{backgroundColor:"#5060f2"}
  ,cardThree:{backgroundColor:"#50f281"}
})