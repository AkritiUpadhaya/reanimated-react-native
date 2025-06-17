import React from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Animated, { EntryExitTransition, FadeOut } from 'react-native-reanimated'


interface Item{
    id:number,
    emoji:string,
    color:string
}

interface ItemProps{
    item:Item[]
    onRemove(id:number):void
}

interface TileProps{
    emoji:string
    
    onRemove():void
}

const INITIAL_LIST: Item[] = [
    { id: 1, emoji: '🍌', color: '#b58df1' },
    { id: 2, emoji: '🍎', color: '#ffe780' },
    { id: 3, emoji: '🥛', color: '#fa7f7c' },
    { id: 4, emoji: '🍙', color: '#82cab2' },
    { id: 5, emoji: '🍇', color: '#fa7f7c' },
    { id: 6, emoji: '🍕', color: '#b58df1' },
    { id: 7, emoji: '🍔', color: '#ffe780' },
    { id: 8, emoji: '🍟', color: '#b58df1' },
    { id: 9, emoji: '🍩', color: '#82cab2' },
  ];

const LayoutTransition = () => {
    const [items,setItems]= React.useState(INITIAL_LIST)

    const removeItem=(idToRemove:number)=>{
        const updatedItem= items.filter(item=>item.id!= idToRemove)
        setItems(updatedItem)
    }
  return (
    <SafeAreaView>
        <View>
            <Items item={items} onRemove={removeItem}/>
        </View>
    </SafeAreaView>
  )
}

const Items:React.FC<ItemProps>=({item,onRemove})=>{
    return(
        <View style={styles.gridContainer}>
            {item.map((item)=>(
                <Animated.View 
                key={item.id} 
                layout={EntryExitTransition}
                exiting={FadeOut}
                style={[styles.tileContainer,{backgroundColor:item.color}]}>
                   <Tile emoji={item.emoji} onRemove={()=>onRemove(item.id)}/>

                </Animated.View>
            ))}
        </View>
    )
}

const Tile:React.FC<TileProps>=({emoji,onRemove})=>{
    return(
        <TouchableOpacity onPress={onRemove}>
            <Animated.Text style={styles.tileLabel}>{emoji}</Animated.Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
      width: 'auto',
      display: 'flex',
      minHeight: 300,
    },
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingHorizontal: 32,
    },
    tile: {
      flex: 1,
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tileLabel: {
      color: '#f8f9ff',
      fontSize: 24,
    },
    tileContainer: {
        width: '20%',
        margin: '1%',
        borderRadius: 16,
        minHeight: 80,
        justifyContent: 'center',
        alignItems: 'center',
      },
  });

export default LayoutTransition