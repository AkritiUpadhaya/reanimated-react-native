import Methods from '@/components/Methods';
import React from 'react';




export default function App() {

//   const defaultAnim = useSharedValue<number>(width.value / 2 - 160);
//   const linear = useSharedValue<number>(width.value / 2 - 160);

//   const animatedDefault = useAnimatedStyle(() => ({
//     transform: [{ translateX: defaultAnim.value }],
//   }));
//   const animatedChanged = useAnimatedStyle(() => ({
//     transform: [{ translateX: linear.value }],
//   }));

//   React.useEffect(() => {
//     linear.value = withRepeat(
//       // highlight-next-line
//       withTiming(-linear.value, {
//         duration,
//         easing: Easing.linear,
//       }),
//       -1,
//       true
//     );
//     defaultAnim.value = withRepeat(
//       // highlight-next-line
//       withTiming(-defaultAnim.value, {
//         duration,
//       }),
//       -1,
//       true
//     );
//   }, []);

  return (

    <Methods/>
   
//     <View style={styles.container}>
//       <Animated.View style={[styles.box, animatedDefault]}>
//         <Text style={styles.text}>inout</Text>
//       </Animated.View>
//       <Animated.View style={[styles.box, animatedChanged]}>
//         <Text style={styles.text}>linear</Text>
//       </Animated.View>
//     </View>
  );
}
