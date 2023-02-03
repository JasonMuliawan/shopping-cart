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
import FakeItem from './FakeItem';
import BoughtItem from './components/BoughtItem';
import ItemPage from './components/ItemPage';
import { ChartProvider, useChart } from './components/hook/useChart';
import ChartPage from './components/ChartPage';


export default function App() {
   
  const renderScene = SceneMap({
    first: ItemPage,
    second: ChartPage,
  })

  
  
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key:'first',title:'商品列表'},
    {key:'second',title:'購物車'},
  ])

  return (
    <ChartProvider>
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
    </ChartProvider>
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
  tabContainer:{
    backgroundColor:'white',
    flex:9
  },
});
