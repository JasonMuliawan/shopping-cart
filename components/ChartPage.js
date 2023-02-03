import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView, useWindowDimensions, Pressable, Alert} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import BoughtItem from './BoughtItem';
import { useChart } from './hook/useChart';

const ChartPage = () => {
    const {chartList, setChartList} = useChart();

    let totalPrice = 0
    chartList?.forEach((item) => {
        totalPrice += (parseInt(item.quantity)*item.price)
    })
    const finalTotalPrice = totalPrice.toFixed(2)

    const payCart = () => {
        Alert.alert(`You need to pay $${finalTotalPrice}`)
    }

    return(
        <>
            <View style={styles.headerContainer}> 
              <Text style={styles.headerText}>購物車</Text>
            </View>
            <View style={styles.itemContainer}>
                <ScrollView>
                {
                  chartList.length === 0? <View style={styles.emptyStyle}><Text style={{fontWeight:'bold',fontSize:24}}>Your cart is empty !</Text></View> 
                  :
                  chartList.map(({id,title,img,description,price,quantity}) =>(
                    <BoughtItem key={id} title={title} img={img} description={description} price={price} quantity={quantity} />
                  ))
                }
                {
                    chartList.length === 0 ? 
                        <></>
                        :
                        <>
                            <View style={styles.totalPriceStyle}>
                                <Text style={{fontWeight:'bold',fontSize:20}}>Total</Text>
                                <Text style={{fontWeight:'bold',fontSize:20}}>{`$${finalTotalPrice}`}</Text>
                            </View>
                            <Pressable style={({pressed}) => pressed ? styles.checkoutPressed : styles.checkout} onPress={payCart}>
                                <View>
                                    <Text style={{fontWeight:'bold',fontSize:20,color:'white'}}>Checkout</Text>
                                </View>
                            </Pressable>
                        </>
                }
                </ScrollView>
            </View>
            

        </>
    )
}

export default ChartPage;

const styles = StyleSheet.create({
    headerContainer:{
      flex: 1,
      paddingTop:2,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomColor: 'grey',
      borderBottomWidth :0.5,
    },
    headerText:{
      color:'black',
      fontWeight: 'bold',
      fontSize:24,
    },
    itemContainer:{
      backgroundColor:'#cfcbca',
      flex:10,
      borderBottomColor : 'grey',
      borderBottomWidth:1,
      paddingTop: 24,
    },
    emptyStyle:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems: 'center',
    },
    totalPriceStyle:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor:'#cfcbca',
        paddingHorizontal: 16,
        marginVertical: 10,
    },
    checkout:{
        alignSelf: 'center',
        marginTop:30,
        height:50,
        width:380,
        borderRadius:12,
        backgroundColor: '#280699',
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    checkoutPressed:{
        alignSelf: 'center',
        marginTop:30,
        height:50,
        width:380,
        borderRadius:12,
        backgroundColor: '#280699',
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        opacity: 0.5,
    }
  });