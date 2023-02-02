import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView, useWindowDimensions} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import starry from './assets/starry-night.jpeg'
import painting from './assets/painting.jpeg'
import rosy from './assets/rosy.jpeg'
import irises from './assets/irises.jpeg'
import almond from './assets/almond.jpeg'
import ItemList from './components/ItemList';


export default function App() {
  //Fake Item list 
  const [allItem, setAllItem] = useState([
    { id: 1,
      title: "Starry Night",
      img: starry,
      description: "High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.",
      price: 79.95
    },
    { id:2, 
      title: "Magazine subscription",
      img: painting,
      description : "Subscribe to our painter's magazine. You can opt-in for a weekly or monthly subscription.",
      price: 20.00
    },
    { id:3,
      title : "Rosy-Fingered Dawn at Louse Point",
      img: rosy,
      description: "The title Rosy-Fingered Dawn at Louse Point refers to one of Willem de Kooning's favourite places in Long Island.",
      price: 49.95
    },
    {
      id:4,
      title: "Irises",
      img: irises,
      description: "Irises is yet again, another painting by the Dutch artist Vincent van Gogh.",
      price: 65.95
    },
    {
      id:5,
      title: "Branches with Almond Blossom",
      img: almond,
      description : "Branches with Almond Blossom is another van Gogh painted in 1890.",
      price: 99.95
    }
  ])

  const FirstRoute = () => (
    <>
      <View style={styles.headerContainer}> 
        <Text style={styles.headerText}>商品列表</Text>
      </View>
      <View style={styles.itemContainer}>
        <ScrollView>
          {
            allItem.map(({id,title,img,description,price}) => (
              <ItemList key={id} title={title} img={img} description={description} price={price} />
            ))
          }
        </ScrollView>
      </View>
    </>
  )
  
  const SecondRoute = () => (
    <>
      <View style={styles.headerContainer}> 
        <Text style={styles.headerText}>購物車</Text>
      </View>
      <View style={styles.itemContainer}>
      </View>
    </>
  )

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  })

  
  
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key:'first',title:'商品列表'},
    {key:'second',title:'購物車'},
  ])

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}> 
        <Text style={styles.titleText}>Snipcart</Text>
      </View>
      <View style={styles.tabContainer}>
        <TabView 
          tabBarPosition='bottom'
          navigationState={{index,routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  titleContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
    flex:1,
    backgroundColor: 'black',
  },
  titleText:{
    paddingTop:10,
    color:'white',
    fontWeight: 'bold',
    fontSize:20,
  },
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
  tabContainer:{
    backgroundColor:'white',
    flex:9
  },
});
