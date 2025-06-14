import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, { useAnimatedRef, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'

const Hooks = () => {
    const progress= useSharedValue(0)
    const animatedRef= useAnimatedRef()

    const borderRadius= useDerivedValue(()=>{
        return 10+ progress.value
    })

    const animatedStyle= useAnimatedStyle(()=>({
        borderRadius:borderRadius.value
    }))

    useEffect(()=>{
        progress.value=withRepeat(withTiming(100,{duration:1000}),5,true)
    },[])
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box,animatedStyle]}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      height: 80,
      width: 80,
      margin: 20,
      borderWidth: 1,
      borderColor: '#b58df1',
      borderRadius: 20,
      backgroundColor:'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
  );

export default Hooks