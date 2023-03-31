import { StyleSheet, Text, View,ScrollView,SafeAreaView,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";

//Form Validation
import * as Yup from 'yup'
import {Formik} from "formik"

const PasswordSchema=Yup.object().shape({
  passwordLength: Yup.number()
  .min(4,"Should be 4 characters atleast")
  .max(16,"Max length is 16")
  .required("Length is required")
})


export default function App() {
  const[password,setPassword]=useState("")
  const[isPassGenerated,setisPassGenerated]=useState(false)

  const[numbers,useNumbers]=useState(false)
  const[lowerCase,setLowerCase]=useState(true)
  const[upperCase,setUpperCase]=useState(false)
  const[symbols,setSymbols]=useState(false)

  const generatePasswordString=(passwordLength:number)=>{
    let characterList=""

    const upperCaseChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCaseChar="abcdefghijklmnopqrstuvwxyz"
    const digitChars="1234567890";
    const specialChars="!@#$%^&*()_+"

    if(upperCase){
      characterList += upperCaseChar
    }
    if(lowerCase){
     characterList += lowerCaseChar
    }
    if(numbers){
      characterList += digitChars
    }
    if(symbols){
      characterList += specialChars
    }

    const passwordResult=createPassword(characterList,passwordLength)
    setPassword(passwordResult);
    setisPassGenerated(true)

  }

  const createPassword=(characters:string,passwordLength:number )=>{
    let result=""
    for(let i=0;i<passwordLength;i++){
      const characterIndex=Math.round(Math.random()*characters.length)
      result =result+characters.charAt(characterIndex)
    }
    return result;
  }

  const resetPassword=()=>{
    setPassword("")
    setisPassGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    useNumbers(false)
    setSymbols(false)
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
       <View style={styles.formContainer}>
        <Text style={styles.headingText}>
          Password Generator
        </Text>
        <Formik
       initialValues={{ passwordLength:"" }}
       validationSchema={PasswordSchema}
       onSubmit={(values)=>{
        console.log(values)
        generatePasswordString((+values.passwordLength))
       }} 
     >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
         handleReset,

         /* and other goodies */
       }) => (
         <>
          <View style={styles.inputWrapper}>
            <View style={styles.inputColumn}>
              <Text style={styles.heading} >Password Length</Text>
              {touched.passwordLength && errors.passwordLength &&(
                <Text style={styles.errorText}>{errors.passwordLength} </Text>
              )}
            </View>
            <TextInput style={styles.inputStyle} 
              value={values.passwordLength}
              onChangeText={handleChange('passwordLength')}
              placeholder="Ex 8"
              keyboardType='numeric'
             >
              </TextInput>
          </View> 
          <View style={styles.inputWrapper}>
                <Text style={styles.checkbox}>Include Lowercase</Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={lowerCase}
                  onPress={()=>(setLowerCase(!lowerCase))}
                  fillColor="#EFF54D"
                /> 
          </View> 
          <View style={styles.inputWrapper}>
          <Text style={styles.checkbox}>Include Uppercase</Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={upperCase}
                  onPress={()=>(setUpperCase(!upperCase))}
                  fillColor="#FD297A"
                /> 
          </View> 
          <View style={styles.inputWrapper}>
          <Text style={styles.checkbox}>Include Numbers</Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={numbers}
                  onPress={()=>(useNumbers(!numbers))}
                  fillColor="#9424F0"
                  
                /> 
          </View> 
          <View style={styles.inputWrapper}>
          <Text style={styles.checkbox}>Include Symbols</Text>
                <BouncyCheckbox
                  disableBuiltInState
                  isChecked={symbols}
                  onPress={()=>(setSymbols(!symbols))}
                  fillColor="#00AC61"
                /> 
          </View> 

          <View style={styles.formActions}>
            <TouchableOpacity
            disabled={!isValid} 
            style={styles.primaryBtn}
            onPress={handleSubmit}
            >
            <Text style={styles.primaryBtnText}>Generate Password</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.primaryBtn}
            onPress={()=>{
              handleReset()
              resetPassword()
            }}
            >
              <Text style={styles.primaryBtnText }>Reset</Text>
            </TouchableOpacity>
          </View>
        </>
       )}
        </Formik>
       </View>
       <View>
        {isPassGenerated ? (
          <View style={styles.card}>
            <Text style={styles.discription} >Long press to copy</Text>
            <Text selectable style={styles.password} >{password}</Text>
          </View>
       ) : null}
       </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer:{
   
    display:"flex",
    alignContent:"center",
    justifyContent:"center"
  },
  formContainer:{
    alignContent:"center",
  },
  headingText:{
    // color:"black",
    fontSize:24,
    margin:8
  },
  inputWrapper:{
    display:"flex",
    flexDirection:"row",
    width:"100%",
    // backgroundColor:"#FF9F4A",
    justifyContent:"space-around"
  },
  formActions:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    margin:20,
    alignContent:"center",
    textAlign:"center"
    
  },
  inputColumn:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    // justifyContent:"space-evenly"
  },
  inputStyle:{
    marginTop:10, 
    // color:"black",
    width:100,
    height:40,
    borderWidth:1,
    borderColor:"yellow",
    borderRadius:10,
  },
  heading:{
    // color:"black",
    fontSize:15,
    // margin:10
  },
  errorText:{
    flexDirection:"column",
    color:"red"
  },
  checkbox:{
    // color:"black",
    fontSize:16,
    margin:10,
    marginRight:80
  },
  primaryBtn:{
    backgroundColor:"#46B2E0",
    height:50,
    width:100,
    borderRadius:5,
    justifyContent:"center"
  },
  primaryBtnText:{
    fontWeight:"bold",
    color:"white",
    textAlign:"center"
  },
  generatedPassword:{
    color:"black"
  },
  card:{
    flex:1,
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:4,
    margin:20,
    marginLeft:110,
    height:100,
    maxWidth:200,
    elevation:5,
    shadowOffset:{
      height:1,
      width:1
    }
  },
  discription:{
    color:"black"
  },
  password:{
    color:"black",
    fontSize:30,
  }
})