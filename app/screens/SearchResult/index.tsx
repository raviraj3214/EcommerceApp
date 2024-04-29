import React,{useEffect, useState} from 'react';
import {StyleSheet,View, Text, FlatList, Pressable,RefreshControl} from 'react-native';
import {scale} from 'react-native-size-matters';
import Container from '../../components/Container';
import Label from '../../components/Label';
import ProductCard from '../../components/ProductCard';
import TitleComp from '../../components/TitleComp';
import {bestSellersList,topBrands} from '../../utils/MockData';
import Feather from 'react-native-vector-icons/Feather';
import {appColors} from '../../utils/appColors';
import BottomButtons from '../../components/BottomButtons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBox from '../../components/SearchBox';
import ReduxWrapper from '../../utils/ReduxWrapper';


function index({products,navigation, route: {params}}) {
   
   const [refreshing, setRefreshing] = useState(false);
   const onRefresh = ()=>{
    setRefreshing(true);
    //Fetch the products from the server
    setTimeout(()=>{
      setRefreshing(false);
    },2000)

    console.log({refreshing});
   }
   useEffect(()=>{
    products.searchproducts.map((i)=>{
      console.log("here is searchproducts ...................................",i.name);

    })
   },[])
   
  

  return (
    <>
      <Container Scrollable style={styles.container}>
       {/*  {_renderHeader()}
        <View style={{paddingVertical: scale(20)}}>
          <TitleComp heading={'Top Brands'} />
          <View style={{paddingVertical:scale(20)}}>
            
            <FlatList showsHorizontalScrollIndicator={false} ItemSeparatorComponent={()=> <View style={{padding:scale(10)}} /> } horizontal data={topBrands}  renderItem={({item,index})=><BrandCard key={index} item={item}/> } />
          </View>
        </View> */}
        <View style={{ paddingTop: scale(20) }}>
      <SearchBox onRightIconPress={() => navigation.navigate('Search')}
          onFocus={() => navigation.navigate('Search')} /> 
      </View>
        <View style={{flexDirection: 'column',paddingBottom: "22%"}}>
          <FlatList 
          refreshControl={
            <RefreshControl colors={[appColors.primary, appColors.secondary]} refreshing={refreshing} onRefresh={onRefresh} />
          }
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={()=> <View style={{padding:scale(5)}} />}
            data={products.searchproducts}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({item, index}) => (
              <ProductCard
                key={index}
                navigation={navigation}
                item={item}
                style={{marginHorizontal: scale(5), marginBottom: scale(20),}} // Add margin styles here

              />
            )}
          />
        </View>
      </Container>
      {/* <BottomButtons onPress={()=> navigation.navigate("Filters")} priceLabel={'No Filter Applied'} buttonLabel="Filter" /> */}
    </>
  );
}
export default ReduxWrapper(index);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchbox: {
    paddingVertical: scale(30),
  },
});