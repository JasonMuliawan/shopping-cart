import { StatusBar } from 'expo-status-bar';
import { useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView, TextInput, Button, Pressable } from 'react-native';
import { useChart } from './hook/useChart';

const BoughtItem = ({id,title,img,description,price,quantity}) => {
    const {chartList, setChartList} = useChart();
    const [boughtQuantity, setBoughtQuantity] = useState(quantity);
    const handleMinus = (title) => {
        const newChart = chartList.map(item => {
            if (item.title === title){
                return {
                    ...item,
                    quantity: (parseInt(item.quantity)-1).toString()
                }
            }
        })
        setChartList(newChart)
    }
    const handlePlus = (title) => {
        const newChart = chartList.map(item => {
            if (item.title === title){
                return {
                    ...item,
                    quantity: (parseInt(item.quantity)+1).toString()
                }
            }
        })
        setChartList(newChart)
    }
    const handleDelete = (title) => {
        setChartList(currentChart => {
            return currentChart.filter((item) => item.title !== title)
        })
        
    }
    const realPrice = (parseInt(quantity) * price).toFixed(2);



    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image style={styles.imageStyle} source={img}></Image>
                <View><Text style={styles.titleText}>{title}</Text></View>
                <Pressable style={({pressed}) => pressed ? styles.deleteUnpressed : styles.delete} onPress={() => handleDelete(title)}>
                    <View><Text style={{color:'#b80f09',fontSize:16}}>x</Text></View>
                </Pressable>
            </View>
            <View style={styles.description}><Text style={{fontSize:16,color:'grey'}}>{description}</Text></View>
            <View style={styles.quantityTextContainer}><Text style={{fontSize:16,color:'grey'}}>Quantity</Text></View>
            <View style={styles.quantityContainer}>
                <View style={styles.quantityBox}>
                    <Pressable style={({pressed}) => pressed ? styles.minusUnpressed : styles.minus} onPress={() => handleMinus(title)}>
                        <View><Text style={{color:'blue'}}>-</Text></View>
                    </Pressable>
                    <Text>{quantity}</Text>
                    <Pressable style={({pressed}) => pressed ? styles.plusUnpressed : styles.plus} onPress={() => handlePlus(title)}>
                        <View><Text style={{color:'blue'}}>+</Text></View>
                    </Pressable>
                </View>
                <View style={styles.priceStyle}><Text style={{fontWeight:'bold',fontSize:20}}>{`$${realPrice}`}</Text></View>
            </View>
        </View>
    )
}

export default BoughtItem;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        margin:10,
        paddingVertical:30,
        paddingHorizontal:30,
        borderRadius:15,
    },
    titleContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        width:300,
    },
    imageStyle:{
        height:40,
        width:60,

    },
    titleText:{
        fontWeight:'bold',
        fontSize: 20
    },
    delete:{
        borderRadius:50,
        width:30,
        height:30,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        borderColor:'red',
        borderWidth:0.5,
        backgroundColor:'#f7adab',
        paddingRight:0.5,
        paddingBottom:1,
    },
    deleteUnpressed:{
        borderRadius:50,
        width:30,
        height:30,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        borderColor:'red',
        borderWidth:0.5,
        backgroundColor:'#f7adab',
        paddingRight:0.5,
        paddingBottom:1,
        opacity:0.5,
    },
    description:{
        marginTop: 15,
        marginBottom: 20,
        width:300,
    },
    quantityContainer:{
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        
    },
    quantityBox:{
        width:140,
        height:50,
        borderWidth:0.5,
        borderColor:'grey',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
    },
    minus:{
        height:30,
        width:30,
        borderRadius:50,
        borderWidth:0.5,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        paddingRight:0,
        paddingBottom:2,
        borderColor:'blue',
        backgroundColor: '#9adaed'
    },
    minusUnpressed:{
        height:30,
        width:30,
        borderRadius:50,
        borderWidth:0.5,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        paddingRight:0,
        paddingBottom:2,
        borderColor:'blue',
        backgroundColor: '#9adaed',
        opacity: 0.5,
    },
    plus:{
        height:30,
        width:30,
        borderRadius:50,
        borderWidth:0.5,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        paddingRight:0,
        paddingBottom:1,
        borderColor:'blue',
        backgroundColor: '#9adaed'
    },
    plusUnpressed:{
        height:30,
        width:30,
        borderRadius:50,
        borderWidth:0.5,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        paddingRight:0,
        paddingBottom:1,
        borderColor:'blue',
        backgroundColor: '#9adaed',
        opacity: 0.5,
    },
    priceStyle:{
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems:'center',
        width:160,
    }
  });
  