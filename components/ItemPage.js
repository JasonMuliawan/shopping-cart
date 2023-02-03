import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView, useWindowDimensions} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import FakeItem from '../FakeItem';
import ItemList from './ItemList';


const ItemPage = () => {
    const allItem = FakeItem();
    
    return(
        <>
            <View style={styles.headerContainer}> 
              <Text style={styles.headerText}>商品列表</Text>
            </View>
            <View style={styles.itemContainer}>
              <ScrollView>
                {
                  allItem.map(({id,title,img,description,price}) => (
                    <ItemList key={id} id={id} title={title} img={img} description={description} price={price}  />
                  ))
                }
              </ScrollView>
            </View>
        </>
    )
}

export default ItemPage;

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
      backgroundColor:'white',
      flex:10,
      borderBottomColor : 'grey',
      borderBottomWidth:1,
      paddingTop: 24,
    },
  });
  