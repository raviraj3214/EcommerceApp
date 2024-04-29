import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
  RefreshControl,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import Container from '../../components/Container';
import Label from '../../components/Label';
import ProductCard from '../../components/ProductCard';
import TitleComp from '../../components/TitleComp';
import {bestSellersList, topBrands} from '../../utils/MockData';
import Feather from 'react-native-vector-icons/Feather';
import {appColors} from '../../utils/appColors';
import BottomButtons from '../../components/BottomButtons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReduxWrapper from '../../utils/ReduxWrapper';
import SearchBox from '../../components/SearchBox';

function index({
  products,
  getProducts$,
  productList,
  navigation,
  route: {params},
}) {
  // const [refreshing, setRefreshing] = useState(false);
  // const onRefresh = () => {
  //   setRefreshing(true);
  //   //Fetch the products from the server
  //   setTimeout(() => {
  //     setRefreshing(false);
  //   }, 2000);

  //   console.log({refreshing});
  // };
  //  useEffect(()=>{
  //   products.map((i)=>{console.log("here is categories screen category is",i._id)})
  //  },[])
  const SkeletonLoader = () => (
    <View>
    <View style={{ padding: scale(20) }}>
      {/* Product Cards Skeleton */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {/* Product Card 1 */}
        <View style={{ flex: 1, marginRight: scale(5) }}>
          <View style={{ height: scale(250), backgroundColor: '#eee', borderRadius: scale(10) }} />
        </View>
        {/* Product Card 2 */}
        <View style={{ flex: 1, marginLeft: scale(5) }}>
          <View style={{ height: scale(250), backgroundColor: '#eee', borderRadius: scale(10) }} />
        </View>
      </View>
    </View>
    <View style={{ padding: scale(20) }}>
    {/* Product Cards Skeleton */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      {/* Product Card 1 */}
      <View style={{ flex: 1, marginRight: scale(5) }}>
        <View style={{ height: scale(250), backgroundColor: '#eee', borderRadius: scale(10) }} />
      </View>
      {/* Product Card 2 */}
      <View style={{ flex: 1, marginLeft: scale(5) }}>
        <View style={{ height: scale(250), backgroundColor: '#eee', borderRadius: scale(10) }} />
      </View>
    </View>
  </View>
  </View>
  );
  

  const _renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: scale(20),
        }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={scale(25)} />
        </Pressable>

        <Label
          text={params.item.label}
          style={{fontWeight: '500', fontSize: scale(22)}}
        />

        <View
          style={{
            height: scale(45),
            width: scale(45),
            backgroundColor: appColors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: scale(25),
          }}>
          <Feather name="search" size={scale(20)} color={appColors.white} />
        </View>
      </View>
    );
  };
  const BrandCard = ({item}) => {
    const {label, icon, products} = item;
    return (
      <View
        style={{
          borderRadius: scale(5),
          backgroundColor: appColors.white,
          flexDirection: 'row',
          paddingHorizontal: scale(20),
          paddingVertical: scale(20),
        }}>
        <View
          style={{
            marginRight: scale(10),
            backgroundColor: appColors.black,
            height: scale(40),
            width: scale(40),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: scale(20),
          }}>
          <Ionicons name={icon} size={scale(25)} color={appColors.white} />
        </View>
        <View>
          <Label
            text={label}
            style={{fontSize: scale(18), fontWeight: '600'}}
          />
          <Label
            text={products}
            style={{
              fontSize: scale(14),
              opacity: scale(0.4),
              marginTop: scale(5),
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white', paddingBottom: "22%"}}>
        <Container Scrollable style={styles.container}>
          <View style={{paddingTop: scale(20)}}>
            <SearchBox onFocus={() => navigation.navigate('Search')} />
          </View>

          {products.loadingcat ? (
            // <View style={styles.loaderContainer}>
            //   <ActivityIndicator size="large" color={appColors.primary} />
            // </View>
            <SkeletonLoader />
          ) : (
            <View style={{flexDirection: 'column'}}>
              <FlatList
                nestedScrollEnabled
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                  <View style={{padding: scale(5)}} />
                )}
                data={products.catproducts}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                renderItem={({item, index}) => (
                  <ProductCard
                    key={index}
                    navigation={navigation}
                    item={item}
                    style={{
                      marginHorizontal: scale(5),
                      marginBottom: scale(10),
                    }} // Add margin styles here
                  />
                )}
              
              />
            </View>
          )}
        </Container>
      </SafeAreaView>
    </>
  );
}
export default ReduxWrapper(index);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background to overlay on top of existing content
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999, // Ensure the loader appears above other content
  },
  searchbox: {
    paddingVertical: scale(30),
  },
});
