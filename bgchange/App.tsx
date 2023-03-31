import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';


function App(): JSX.Element {

  const [randomBg,setRandomBg]=useState("#383CC1")
  const [randomBg2,setRandomBg2]=useState("#383CC1")
  const [randomBg3,setRandomBg3]=useState("#383CC1")
  const [randomBg5,setRandomBg5]=useState("#383CC1")
  const [randomBg6,setRandomBg6]=useState("#383CC1")

  const generateColor4=()=>{
    const hexRange="0123456789ABCDEF"
    let color="#"

    for(let i=0;i<6;i++){
      color += hexRange[Math.floor(Math.random()*16)]
    }
    setRandomBg(color)
  }
  const generateColor2=()=>{
    const hexRange="0123456789ABCDEF"
    let color="#"

    for(let i=0;i<6;i++){
      color += hexRange[Math.floor(Math.random()*16)]
    }
    setRandomBg2(color)
  }
  const generateColor3=()=>{
    const hexRange="0123456789ABCDEF"
    let color="#"

    for(let i=0;i<6;i++){
      color += hexRange[Math.floor(Math.random()*20)]
    }
    setRandomBg3(color)
  }
  const generateColor5=()=>{
    const hexRange="0123456789ABCDEF"
    let color="#"

    for(let i=0;i<6;i++){
      color += hexRange[Math.floor(Math.random()*20)]
    }
    setRandomBg5(color)
  }
  const generateColor6=()=>{
    const hexRange="0123456789ABCDEF"
    let color="#"

    for(let i=0;i<6;i++){
      color += hexRange[Math.floor(Math.random()*20)]
    }
    setRandomBg6(color)
  }
  const generateColor=()=>{
    generateColor2()
    generateColor3()
    generateColor4()
    generateColor5()
    generateColor6()
  }

  return (
    <>
    <StatusBar backgroundColor={randomBg}/>
    <View style={[styles.container,{backgroundColor:randomBg}]}>
      <TouchableOpacity style={styles.allWrap}>
          <View style={[styles.shapesWrapper,{backgroundColor:randomBg6}]}>
            <View style={styles.triangle}></View>
            <View style={styles.circles}>
            <View  style={[styles.circle, {backgroundColor:randomBg2}]}></View>
            <View style={[styles.circle, {backgroundColor:randomBg5}]}></View>
            </View>
            <View style={[styles.rectangle, {backgroundColor:randomBg3}]}></View>
          </View>
          <View style={styles.actionBtn}>
            <Text style={styles.buttonText} onPress={generateColor}>Press Me</Text>
          </View>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  actionBtn:{
    flexDirection:"row",
    width:200,
    height:80,
    backgroundColor:"#12B0E8",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:30,
  },
  buttonText:{
    fontSize:30,
    color:"white",
    textTransform:"uppercase"
  },
  shapesWrapper:{
    display:"flex",
    margin:50,
    height:300,
    width:300,
    borderRadius:300,
    alignItems:"center"
   
  },
  circles:{
    elevation:4,
    margin:20,
    flexDirection:"row",
    // marginBottom:100
  },
  circle:{
    width:100,
    height:100,
    borderRadius:100,
    margin:30,
    elevation:5,
    shadowOffset:{
      width:1,
      height:1
    }
  },
  rectangle:{
    width:150,
    height:40,
    marginLeft:20,
    elevation:5,
    shadowOffset:{
      width:1,
      height:1
    }
  },
  allWrap:{
    display:"flex",
    alignItems:"center"
  },
  triangle:{}

});

export default App;
