import React, { useState } from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'
import Animated, { useAnimatedKeyboard, useAnimatedStyle } from 'react-native-reanimated'

const KeyboardHandler = () => {

    const [value, setValue]= useState('')
    const keyboard= useAnimatedKeyboard()
    const animatedStyle= useAnimatedStyle(()=>({
       transform:[{translateY:-keyboard.height.value}]
    }))
  return (
    <Animated.View style={[styles.container,animatedStyle]}>
      <Text>KeyboardHandler</Text>
      <TextInput value={value} onChangeText={setValue} style={styles.input} placeholder='enter text'/>
    </Animated.View>
  )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center' 
    },
    input:{
        height:40,
        width:200,
        borderWidth:1,
        borderColor:'#b58df1',
        borderRadius:15,
        margin:20,
        padding:10
    }
})

export default KeyboardHandler