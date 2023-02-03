import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView, TextInput, Button, Pressable } from 'react-native';
import { useChart } from './hook/useChart';


const ItemList = ({id, title, img, description, price}) => {
    const {chartList, setChartList} = useChart();
    const [quantity, setQuantity] = useState('1');
    const realPrice = (parseInt(quantity) * price).toFixed(2);
    const addToCart = (title) => {
        const correctQuantity = quantity==='' ? '0' : quantity
        const found = chartList.find(item => item.title===title)
        if(found){
            const index = chartList.findIndex((item) => item.title===title)
            const toUpdate = chartList
            toUpdate[index].quantity = (parseInt(toUpdate[index].quantity) + parseInt(correctQuantity)).toString()
            setChartList(toUpdate)
            
            
        }
        else{
            const newBoughtItem = {
                id:id,
                title:title,
                img:img,
                description:description,
                price:price,
                quantity:correctQuantity,
            }
            setChartList([...chartList,newBoughtItem])
        }
        
    }
    
    return(
        <View style={styles.singleItem}>
            <Image style={styles.imageSize} source={img}></Image>
            <View style={styles.titleStyle}><Text style={styles.itemTitle}>{title}</Text></View>
            <View style={styles.descStyle}><Text style={styles.descText}>{description}</Text></View>
            <View style={styles.additionalStyle}>
                <View style={styles.shop}>
                    <View style={styles.quantityStyle}><Text style={styles.quantityText}>QUANTITY</Text></View>
                    <View style={styles.formatStyle}><Text style={styles.quantityText}>FORMAT</Text></View>
                </View>
                <View style={styles.shop}>
                    <View style={{width:'30%'}}>
                        <TextInput 
                            style={styles.textInput} 
                            keyboardType='numeric'
                            value={quantity}
                            onChangeText={(e) => {
                                setQuantity(e)
                            }}
                        />
                    </View>
                    <View style={styles.digital}><Text>PHYSICAL COPY</Text></View>
                </View>
                <View style={styles.shop}>
                    <View style={styles.priceContainer}><Text style={styles.priceStyle}>{quantity===""? "$0.00":`$${realPrice}`}</Text></View>
                    <Pressable 
                        style={({pressed}) => pressed ? styles.pressedItem : styles.addStyle}
                        onPress={() => addToCart(title)}
                    >
                        <View>
                            <Text style={{color:'white',fontWeight:'bold'}}>ADD TO CART</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    imageSize:{
      height:250,
      width :300,
    },
    singleItem:{
      flexDirection:'column',
      justifyContent :'center',
      alignItems: 'center',
      marginVertical :10,
    },
    titleStyle:{
      width:300,
      marginTop:16,
    },
    itemTitle:{
      fontWeight: 'bold',
      fontSize: 30
    },
    descStyle:{
      width:300,
      marginTop: 20,
    },
    descText:{
      fontSize:24
    },
    additionalStyle:{
        flexDirection:'column',
        width:300,
        backgroundColor:'white',
        marginVertical:16,
    },
    shop:{
        width:300,
        flexDirection:'row',
        marginTop:5,
    },
    quantityStyle:{
        width:'30%',
    },
    quantityText:{
        color:'grey',
        fontWeight: 'bold',
        fontSize: 15,
    },
    formatStyle:{
        width:'70%',
    },
    textInput:{
        borderWidth :1,
        borderColor: '#cccccc',
        width:'60%',
        paddingLeft:4,
    },
    digital:{
        width:'70%',
        flexDirection:'column',
        justifyContent: 'center',
        backgroundColor:'#cccccc',
        alignItems: 'center',
    },
    priceContainer:{
        width:'30%',
        height:40,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    priceStyle:{
        fontWeight:'bold',
        fontSize: 23,
    },
    addStyle:{
        backgroundColor: 'blue',
        width: '70%',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressedItem:{
        opacity:0.5,
        backgroundColor: 'blue',
        width: '70%',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
  });

export default ItemList