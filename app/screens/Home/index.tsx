import React, {useRef, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
  Alert,
  ImageComponent,
} from 'react-native';
import {} from 'react-native-gesture-handler';
import {categoriesList, bestSellersList} from '../../utils/MockData';
import {appColors, shadow} from '../../utils/appColors';
import TouchableRipple from 'react-native-touch-ripple';
import Label from '../../components/Label';
import Container from '../../components/Container';
import Product from '../../components/ProductCard';
import {scale} from 'react-native-size-matters';
import SearchBox from '../../components/SearchBox';
import TitleComp from '../../components/TitleComp';
import ReduxWrapper from '../../utils/ReduxWrapper';
import {getSearch} from '../../redux/productAction';

function Home({
  getProducts$,
  getProductsList$,
  navigation,
  products,
  getSearch$,
}) {
  // function Home({getProducts$,getProductsList$, addToCart$, navigation) {

  const nativeAdViewRef = useRef();

  useEffect(() => {
    getProductsList$(1);

    console.log(`here is the products ${products.products}`);
  }, []);

  const RenderTitle = ({heading, rightLabel}) => {
    return <TitleComp heading={heading} rightLabel={rightLabel} />;
  };
  const ProductCard = ({item}) => {
    return <Product navigation={navigation} item={item} />;
  };
  const onPress = () => {
    console.warn('i am clicked');
  };
  const handleSeeAllPress = (()=>{
    navigation.navigate("Products");
  })
  return (
    <Container isScrollable style={styles.container}>
      <View style={{paddingTop: scale(20)}}>
        <SearchBox
          onRightIconPress={() => navigation.navigate('Search')}
          onFocus={() => navigation.navigate('Search')}
        />
      </View>
      <View style={{paddingVertical: scale(20)}}>
        <RenderTitle heading="Categories" />
        <FlatList
          style={{marginTop: scale(40)}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={categoriesList}
          ItemSeparatorComponent={() => <View style={{padding: scale(10)}} />}
          renderItem={({item, index}) => {
            const {label, ImageComponent} = item;
            return (
              <View key={index} style={{alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => {
                    getProducts$(label);
                    navigation.navigate('Category', {item});
                  }}
                  rippleColor={appColors.primary}
                  rippleContainerBorderRadius={scale(40)}
                  rippleDuration={800}
                  style={{
                    ...shadow,
                    backgroundColor: appColors.white,
                    height: scale(70),
                    width: scale(70),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: scale(40),
                    overflow: 'hidden',
                  }}>
                  {/* <Icon /> */}
                  <ImageComponent />
                </TouchableOpacity>
                <View style={{marginTop: scale(15)}}>
                  <Label text={label} style={{fontSize: scale(14)}} />
                </View>
              </View>
            );
          }}
        />
      </View>
      <View>
        <View style={{paddingVertical: scale(25)}}>
          {/* <RenderTitle heading="Best Selling" rightLabel="See All" /> */}
          <RenderTitle heading="Best Selling" rightLabel={
        <TouchableOpacity onPress={handleSeeAllPress}>
          <Text style={{color: "black",}}>See All</Text>
        </TouchableOpacity>
      } />
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{padding: scale(10)}} />}
          horizontal
          data={products.products.slice(0, 5)}
          renderItem={({item, index}) => (
            <ProductCard key={index} item={item} />
          )}
        />
      </View>
    </Container>
  );
}

export default ReduxWrapper(Home);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchbox: {
    paddingVertical: scale(30),
  },
  header: {
    backgroundColor: appColors.primary,
    alignItems: 'center',
    borderBottomWidth: 12,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    padding: 20,
    margin: 20,
    textAlign: 'center',
  },
  TitleText: {
    fontSize: 25,
    // padding: 20,
    marginVertical: 20,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
