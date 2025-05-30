
import { Button } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const width= useSharedValue(200)
  const handlePress=()=>{
    width.value= width.value+50;
  }
  return (
    <SafeAreaView>
    <Animated.View
      style={{
        width,
        height: 100,
        backgroundColor: 'red',
      }}
    />
    <Button title='animate' onPress={handlePress}/>
    </SafeAreaView>
  );
}