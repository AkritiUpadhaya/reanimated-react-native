import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedRef, useDerivedValue, useScrollViewOffset } from 'react-native-reanimated';

const ScrollTo = () => {
    const animatedRef = useAnimatedRef<React.ComponentRef<typeof Animated.ScrollView>>();
    const offset= useScrollViewOffset(animatedRef)
    const text= useDerivedValue(()=>`scroll offset: ${offset.value.toFixed(1)}`)

    const [isHorizontal, setIsHorizontal]= React.useState(false)
  return (
    <View style={styles.container}>
        <Animated.ScrollView>
            Hello
        </Animated.ScrollView>
      <Text>ScrollTo</Text>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    scroll:{
        borderWidth:1,
        borderColor:'#b58df1',
        height:250,
        width:250,
        margin:20
    },
    scrollContent:{
        alignItems:'center',
        
    },
    box:{
        width:100,
        height:100,
        margin:10,
        borderRadius:15,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
    },
    center:{
        textAlign:'center',
    }

})

export default ScrollTo