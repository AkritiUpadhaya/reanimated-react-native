
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withClamp,
    withDecay,
    withDelay,
    withRepeat,
    withSequence,
    withSpring,
    withTiming
} from 'react-native-reanimated';




export default function Methods() {


  const width = useSharedValue(0);

  const animated= useAnimatedStyle(()=>({
    transform:[{translateX:width.value}]
  }))


  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box,animated]}/>
      <Button title='withTiming' onPress={()=>width.value=withTiming(100,{duration:1000})}/>
      <Button title='withSpring' onPress={()=>width.value=withSpring(100,{damping:10, stiffness:10})}/>
      <Button title='withDelay' onPress={()=>width.value=withDelay(100,withTiming(100,{duration:1000}))}/>
      <Button title='withRepeat' onPress={()=>width.value=withRepeat(withTiming(100,{duration:1000}),5,true)}/>
      <Button title='withSequence' onPress={()=>width.value=withSequence(withTiming(100,{duration:1000}),withTiming(0,{duration:1000}))}/>
      <Button title='withDecay' onPress={()=>width.value=withDecay( {velocity:100})}/>
      <Button title='withClamp' onPress={()=>width.value=withClamp({
        min:-200,
        max:200,
        },withTiming(500,{duration:1000}))}/>

    </View>
  )}
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