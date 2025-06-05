import { Button, StyleSheet, View } from 'react-native';

import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming, } from 'react-native-reanimated';

export default function TabTwoScreen() {

  const offset = useSharedValue(0);

  const OFFSET = 40;
  const TIME = 1000;

  const handlePress=()=>{
    offset.value= withSequence(
      withTiming(-OFFSET,{duration:TIME}),
      withRepeat(withTiming(OFFSET,{duration:TIME}),5, true),
      withTiming(0, { duration: TIME })
    )
  }

  const animatedStyle= useAnimatedStyle(()=>({
    transform:[{translateX:offset.value}]
  }
  ))
  return (
   <View style={styles.container}>
    <Animated.View style={[styles.box,animatedStyle]}>
    </Animated.View>

    <Button title='click' onPress={handlePress}/>
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
