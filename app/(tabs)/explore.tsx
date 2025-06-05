import { StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export default function TabTwoScreen() {

  const pressed= useSharedValue(false)
  const offset= useSharedValue(0)

  const pan= Gesture.Pan()
  .onBegin(()=>pressed.value=true)
  .onChange((event)=>{
    offset.value=event.translationY
  })
  .onFinalize(()=>{
    offset.value=withTiming(0)
    pressed.value=false
  })

  // const offset = useSharedValue(0);

  // const OFFSET = 40;
  // const TIME = 1000;
  // const DELAY = 2000;

  // const handlePress=()=>{

  //   offset.value=withDelay(DELAY,
  //   withSequence(
  //     withTiming(-OFFSET,{duration:TIME}),
  //     withRepeat(withTiming(OFFSET,{duration:TIME}),5, true),
  //     withTiming(0, { duration: TIME })
  //   ))
  // }

  const animatedStyle= useAnimatedStyle(()=>({
   backgroundColor:pressed.value?'red':'blue',
   transform:[
    {translateY:offset.value},
    {scale:withTiming(pressed.value?1.2:1)}]
  }))
  return (
   <View style={styles.container}>
    <GestureDetector gesture={pan}>
    <Animated.View style={[styles.box,animatedStyle]}>
    </Animated.View>
    </GestureDetector>
    

    {/* <Button title='click' onPress={handlePress}/> */}
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    margin: 50,
    borderRadius: 15,
    backgroundColor: '#b58df1',
  },
});
