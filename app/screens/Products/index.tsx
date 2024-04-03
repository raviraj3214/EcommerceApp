// import React, {useRef, useEffect, useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   Image,
//   Pressable,
//   Alert,
//   ImageComponent,
// } from 'react-native';
// import {} from 'react-native-gesture-handler';
// import {categoriesList, bestSellersList} from '../../utils/MockData';
// import {appColors, shadow} from '../../utils/appColors';
// import TouchableRipple from 'react-native-touch-ripple';
// import Label from '../../components/Label';
// import Container from '../../components/Container';
// import Product from '../../components/ProductCard';
// import {scale} from 'react-native-size-matters';
// import SearchBox from '../../components/SearchBox';
// import TitleComp from '../../components/TitleComp';
// import ReduxWrapper from '../../utils/ReduxWrapper';

// function index({
//   getProducts$,
//   getProductsList$,
//   addToCart$,
//   navigation,
//   products,
//   getSearch$,
// }) {
//   // function Home({getProducts$,getProductsList$, addToCart$, navigation) {
//   const [page,setPage] = useState(2);
//   const fetchMoreData = () => {
//     if (page < 6) {
//       setPage(page + 1);
//       console.log("pages no................................................................................................................",page)
//       getProductsList$(page);
//     }
//   };
  
//   const nativeAdViewRef = useRef();
//   const [refreshing, setRefreshing] = useState(false);
//   const onRefresh = () => {
//     setRefreshing(true);
//     //Fetch the products from the server
//     setTimeout(() => {
//       setRefreshing(false);
//     }, 2000);

//     console.log({refreshing});
//   };

  

//   const RenderTitle = ({heading, rightLabel}) => {
//     return <TitleComp heading={heading} rightLabel={rightLabel} />;
//   };
//   const ProductCard = ({item}) => {
//     return <Product navigation={navigation} item={item} />;
//   };
//   const onPress = () => {
//     console.warn('i am clicked');
//   };
//   return (
//     <Container isScrollable style={styles.container}>
//       <View style={{paddingTop: scale(20)}}>
//         <SearchBox
//           onRightIconPress={() => navigation.navigate('Search')}
//           onFocus={() => navigation.navigate('Search')}
//         />
//       </View>
//       <View style={{paddingVertical: scale(20)}}>
//         <RenderTitle heading="Categories" />
//         <FlatList
//           style={{marginTop: scale(40)}}
//           showsHorizontalScrollIndicator={false}
//           horizontal
//           data={categoriesList}
//           ItemSeparatorComponent={() => <View style={{padding: scale(10)}} />}
//           renderItem={({item, index}) => {
//             const {label, ImageComponent} = item;
//             return (
//               <View key={index} style={{alignItems: 'center'}}>
//                 <TouchableRipple
//                   onPress={() => {
//                     getProducts$(label);
//                     navigation.navigate('Category', {item});
//                   }}
//                   rippleColor={appColors.primary}
//                   rippleContainerBorderRadius={scale(40)}
//                   rippleDuration={800}
//                   style={{
//                     ...shadow,
//                     backgroundColor: appColors.white,
//                     height: scale(70),
//                     width: scale(70),
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     borderRadius: scale(40),
//                   }}>
//                   {/* <Icon /> */}
//                   <ImageComponent />
//                 </TouchableRipple>
//                 <View style={{marginTop: scale(15)}}>
//                   <Label text={label} style={{fontSize: scale(14)}} />
//                 </View>
//               </View>
//             );
//           }}
//         />
//       </View>
//       <View style={{flexDirection: 'column'}}>
//         <FlatList
          
//           showsVerticalScrollIndicator={false}
//           ItemSeparatorComponent={() => <View style={{padding: scale(5)}} />}
//           data={products.products}
//           numColumns={2}
//           columnWrapperStyle={{justifyContent: 'space-between'}}
//           renderItem={({item, index}) => (
//             <ProductCard
//               key={index}
//               navigation={navigation}
//               item={item}
//               style={{marginHorizontal: scale(5), marginBottom: scale(10)}} // Add margin styles here
//             />
//           )}
//           onEndReachedThreshold={0.8}
//           onEndReached={(()=>fetchMoreData)}
//         />
//       </View>
//     </Container>
//   );
// }

// export default ReduxWrapper(index);
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   searchbox: {
//     paddingVertical: scale(30),
//   },
//   header: {
//     backgroundColor: appColors.primary,
//     alignItems: 'center',
//     borderBottomWidth: 12,
//     borderBottomColor: '#ddd',
//   },
//   headerText: {
//     color: 'white',
//     fontSize: 25,
//     padding: 20,
//     margin: 20,
//     textAlign: 'center',
//   },
//   TitleText: {
//     fontSize: 25,
//     // padding: 20,
//     marginVertical: 20,
//   },
//   scrollContainer: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
// });
import React, { useRef, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {} from 'react-native-gesture-handler';
import { categoriesList, bestSellersList } from '../../utils/MockData';
import { appColors, shadow } from '../../utils/appColors';
import TouchableRipple from 'react-native-touch-ripple';
import Label from '../../components/Label';
import Container from '../../components/Container';
import Product from '../../components/ProductCard';
import { scale } from 'react-native-size-matters';
import SearchBox from '../../components/SearchBox';
import TitleComp from '../../components/TitleComp';
import ReduxWrapper from '../../utils/ReduxWrapper';

function index({
  getProducts$,
  getProductsList$,
  navigation,
  products,
  getSearch$,
}) {
  const [page, setPage] = useState(2);
  const [allProducts, setAllProducts] = useState([]);
  const fetchMoreData = () => {
    const l = products.products.length;
    if (l<60) {
      setPage(page + 1);
      console.log(
        'pages no................................................................................................................',
        page
      );
      getProductsList$(page);
      

    }
  };
  useEffect(() => {
    // Concatenate new products with existing ones when products update
    setAllProducts(prevProducts => [...prevProducts, ...products.products]);
  }, [products]);

  const nativeAdViewRef = useRef();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Fetch the products from the server
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);

    console.log({ refreshing });
  };

  const RenderTitle = ({ heading, rightLabel }) => {
    return <TitleComp heading={heading} rightLabel={rightLabel} />;
  };

  const ProductCard = ({ item }) => {
    return <Product navigation={navigation} item={item} />;
  };

  const onPress = () => {
    console.warn('i am clicked');
  };

  return (
    <Container isScrollable style={styles.container}>
      <View style={{ paddingTop: scale(20) }}>
        <SearchBox
          onRightIconPress={() => navigation.navigate('Search')}
          onFocus={() => navigation.navigate('Search')}
        />
      </View>
      <View style={{ paddingVertical: scale(20) }}>
        <RenderTitle heading="Categories" />
        <FlatList
          style={{ marginTop: scale(40) }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={categoriesList}
          ItemSeparatorComponent={() => <View style={{ padding: scale(10) }} />}
          renderItem={({ item, index }) => {
            const { label, ImageComponent } = item;
            return (
              <View key={index} style={{ alignItems: 'center' }}>
                <TouchableRipple
                  onPress={() => {
                    getProducts$(label);
                    navigation.navigate('Category', { item });
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
                  }}
                >
                  <ImageComponent />
                </TouchableRipple>
                <View style={{ marginTop: scale(15) }}>
                  <Label text={label} style={{ fontSize: scale(14) }} />
                </View>
              </View>
            );
          }}
        />
      </View>
      <FlatList
        nestedScrollEnabled
        showsVerticalScrollIndicator={true}
        ItemSeparatorComponent={() => <View style={{ padding: scale(5) }} />}
        data={products.products}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }) => (
          <ProductCard
            key={index}
            navigation={navigation}
            item={item}
            style={{
              marginHorizontal: scale(5),
              marginBottom: scale(10),
            }}
          />
        )}
        onEndReachedThreshold={0.2}
        onEndReached={fetchMoreData}
        ListFooterComponent={() => <ActivityIndicator style={{ marginVertical: scale(20) }} />}
      />
    </Container>
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
    marginVertical: 20,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
