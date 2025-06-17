import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const Worklet = () => {

    const translateX= useSharedValue(0)

    const animatedStyle= useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }]
    }))

    const moveBox=()=>{
        'worklet'
        translateX.value= withSpring(translateX.value===0?150:0)
    }
  return (
    <View style={styles.container}>
        <Pressable onPress={moveBox}>
      <Animated.View style={[styles.box,animatedStyle]}/>
      </Pressable>
    </View>
  )
}


const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    box:{
        height:80,
        width:80,
        margin:20,
        borderWidth:1,
        borderColor:'#b58df1',
        borderRadius:20,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Worklet