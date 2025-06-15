import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { interpolate, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';

const HEADER_HEIGHT=100

const ScrollHandler = () => {
    const translateY= useSharedValue(0)
    const opacity=useSharedValue(1)
    
    const scrollHandler= useAnimatedScrollHandler({
        onScroll:event=>{
            const offsetY= event.contentOffset.y

            translateY.value= offsetY> HEADER_HEIGHT? -HEADER_HEIGHT:0

            opacity.value= interpolate(
                offsetY,
                [0, HEADER_HEIGHT/2.5],
                [1,0],
                'clamp'
            )
        }
    })
  return (
    <View style={styles.container}>
      <Animated.View style={[
        styles.header,{
            transform:[{translateY}],
            opacity:opacity
        }
      ]}>
      <Text style={styles.headerText}>collapsible header</Text>
      </Animated.View>

      <Animated.ScrollView contentContainerStyle={styles.scrollContent} onScroll={scrollHandler} scrollEventThrottle={16}>
        <View style={styles.content}>
            {Array.from({length:30}).map((_, index)=>(
                <Text key={index} style={styles.text}>item {index+1}</Text>
            ))}
        </View>
      </Animated.ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    header:{
        height:HEADER_HEIGHT,
        width:'100%',
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:0,
        left:0,
        right:0,
        zIndex:1
    },
    headerText:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
    content:{
        padding:16
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginVertical:10,
    },
    scrollContent:{
        paddingTop:HEADER_HEIGHT+10,

    }
  }
  );

export default ScrollHandler