import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

export default function App() {
  const translateX = useSharedValue<number>(0);

  const handlePress = () => {
    translateX.value += 50;
  };

  const animatedProps=useAnimatedProps(()=>({
    translateX:withTiming(translateX.value)
  }))

  // const animatedStyles = useAnimatedStyle(() => ({
  //   transform: [{ translateX: withSpring(translateX.value * 2) }],
  // }));

  return (
    <>
      <Animated.View animatedProps={animatedProps} style={[styles.box]} />
      <View style={styles.container}>
        <Button onPress={handlePress} title="Click me" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 50,
  },
});