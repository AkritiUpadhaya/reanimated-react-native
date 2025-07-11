import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedRef, useDerivedValue, useScrollViewOffset } from 'react-native-reanimated';

const ScrollTo = () => {
    const animatedRef = useAnimatedRef<React.ComponentRef<typeof Animated.ScrollView>>();
    const offset= useScrollViewOffset(animatedRef)
    const text= useDerivedValue(()=>`scroll offset: ${offset.value.toFixed(1)}`)

    const [isHorizontal, setIsHorizontal]= React.useState(false)
  return (
    <SafeAreaView>
    <View style={styles.container}>
        <Text>Animations</Text>
        <Animated.ScrollView ref={animatedRef} horizontal={isHorizontal} style={styles.scroll} contentContainerStyle={styles.scrollContent}>
            {Array.from({length:10}).map((_,i)=>(
                <View key={i} style={styles.box}>
                    <Text style={styles.center}>{text.value}</Text>
                </View>
            ))}
            
        </Animated.ScrollView>
        <Button title={`Toggle scroll to ${isHorizontal?'vertical':'horizontal'}`} onPress={()=>setIsHorizontal(!isHorizontal)}/>
      
    </View>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
    container:{
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