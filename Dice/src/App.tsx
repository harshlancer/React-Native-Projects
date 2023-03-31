import React,{useState} from 'react';
import { PropsWithChildren } from 'react';
import Sound from 'react-native-sound';
import RollingSound from "./assets/dice-142528.mp3"
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import {
  ImageSourcePropType,

  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import DiceOne from "./assets/diceOne.png"
import DiceTwo from "./assets/diceTwo.png"
import DiceThree from "./assets/diceThree.png"
import DiceFour from "./assets/diceFour.png"
import DiceFive from "./assets/diceFive.png"
import DiceSix from "./assets/diceSix.png"

type DiceProps =PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice=({imageUrl}:DiceProps):JSX.Element=>{
  return( 
      <View>
        <Image style={styles.diceImage} source={imageUrl} />
      </View>
    )
}

const rollingSound =new Sound (RollingSound, Sound.MAIN_BUNDLE,(error)=>{
  if(error){
    console.log("failed ro load Sound",error)
    return
  }
  console.log("duration in seconds: " +rollingSound.getDuration())
})

function App(): JSX.Element {
const [diceImg, setDiceImg]=useState<ImageSourcePropType>(DiceOne)
const [diceImg2, setDiceImg2]=useState<ImageSourcePropType>(DiceTwo)



const tapDice=(setDiceImg:(img:ImageSourcePropType)=>void)=>{
  let random=Math.floor(Math.random()*6)+1

  rollingSound.play()

  switch(random){
    case 1:
      setDiceImg(DiceOne)
      break
    
    case 2:
      setDiceImg(DiceTwo)
      break
    
    case 3:
      setDiceImg(DiceThree)
      break
    
    case 4:
      setDiceImg(DiceFour)
      break
    case 5:
      setDiceImg(DiceFive)
      break
    case 6:
      setDiceImg(DiceSix)
      break
        
  }
  ReactNativeHapticFeedback.trigger("impactHeavy", options);
 
}

const [score,setScore]=useState(0)
const  handlePress=()=>{
  tapDice(setDiceImg)
  tapDice(setDiceImg2)
}  

const option={
  enableVibrateFallback:true,
  ignoreAndroidSystemSettings:false,
  imapct:"heavy",
  android:{
    type:"impact",
    impactStyle:"heavy"
  },
}
  return (
    <View style={styles.container} >
      <View style={styles.dices}>
        <Dice imageUrl={diceImg} />
        <Dice imageUrl={diceImg2} />
        
      </View>
      <Pressable 
      style={({pressed})=>([{backgroundColor: pressed ?"#46B2E0" :"#383CC1" },styles.button ])}
      
      onPress={handlePress}
      >
        <Text style={styles.buttonTxt} >Tap to Roll</Text>
      </Pressable>
      
    </View> 
  );
}

const styles = StyleSheet.create({
  diceImage:{
    height:200,
    width:200,
  },
  container:{
    flex:1,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column"
  },
  buttonWrapper:{},
  button:{
    marginTop:20,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    // backgroundColor:"#383CC1",
    height:50,
    width:150,
    borderRadius:5
  },
  buttonTxt:{
    fontSize:20,
    fontWeight:"bold",
    color:"lightblue"
  },
  dices:{
    display:"flex",
    flexDirection:"row",
    alignContent:"space-around"
  },
  score:{
    flex:1,
    // margin:10
  },
  scoreTxt:{

    color:"black"
  }
})

export default App;
