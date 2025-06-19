import React from 'react'
import { StyleSheet } from 'react-native'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const GestureHandling = () => {
    const translateX= useSharedValue(0)
    const translateY= useSharedValue(0)
    const scale= useSharedValue(1)
    const rotate= useSharedValue(0)

    const tapGesture= Gesture.Tap().onEnd(()=>{
        translateX.value=withSpring(0)
        translateY.value=withSpring(0)
        scale.value=withSpring(1)
        rotate.value=withSpring(0)
    })
    
    const panGesture= Gesture.Pan().onUpdate((event)=>{
        translateX.value=event.translationX
        translateY.value=event.translationY
    })


    const PinchGesture=Gesture.Pinch().onUpdate((event)=>{
        scale.value=event.scale
    })

    const rotateGesture=Gesture.Rotation().onUpdate((event)=>{
        rotate.value=event.rotation
    })

    const animatedStyle= useAnimatedStyle(()=>({
        transform:[
            {translateX:translateX.value},
            {translateY:translateY.value},
            {scale:scale.value},
            {rotate:`${rotate.value}rad`}
        ]
    }))

    const raceGesture=Gesture.Race(panGesture,PinchGesture,rotateGesture)
    const simultaneousGesture=Gesture.Simultaneous(PinchGesture,rotateGesture)
    const exclusiveGesture=Gesture.Exclusive(panGesture,PinchGesture,rotateGesture)

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={Gesture.Simultaneous(tapGesture,raceGesture)}> 
      <Animated.View style={[styles.box,animatedStyle]}/>
      </GestureDetector>
      
    
    </GestureHandlerRootView>
    
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    box:{
        width:150,
        height:150,
        backgroundColor:'red'
    }
})

export default GestureHandling