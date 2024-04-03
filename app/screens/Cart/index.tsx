// import React, { useEffect } from 'react';
// import {View, Text, Image, Pressable} from 'react-native';
// import {scale} from 'react-native-size-matters';
// import Container from '../../components/Container';
// import Label from '../../components/Label';
// import {appColors} from '../../utils/appColors';
// import {SimpleStepper} from 'react-native-simple-stepper';
// import {bestSellersList} from '../../utils/MockData';
// import BottomButtons from '../../components/BottomButtons';
// import {SwipeListView} from 'react-native-swipe-list-view';
// import Feather from 'react-native-vector-icons/Feather';
// import CheckOutItem from '../../components/CheckOutItem';
// import {connect} from 'react-redux';
// import ReduxWrapper from '../../utils/ReduxWrapper';
// import { APP_CURRENCY } from '../../utils/appConfig';
// import Empty from '../../components/Empty';

// function index({wishList:{wishItemNames},removeToWishList$, addToWishList$,removeFromCart$,cart,navigation,getFromCart$,}) {
// //  useEffect(()=>{console.log("cartitems.............................................................................",cart.cartItems)},[])
// // let product = [];
// // useEffect(()=>{
// //   product = getFromCart$()
// //   const t = Object.keys(product);
// //   console.log("all keys of cart in cart..................................................................................................", product.payload)
// // },[])
//  const getAmount = ()=>{
//    let amount =0
//    cart.cartItems?.map(item=>{
//      const {price} =item
//      amount+= price;
//    })
//    return  `${APP_CURRENCY.symbol} ${amount}`
    
//  }
//  const onDeletePress = (item)=>{ 
//   removeFromCart$(item?.name)
//   console.log("cart..........................................................................",cart.cartitems);
//  }
//  const isInWishList = (item)=>{
//   return wishItemNames?.includes( item?.name)
//  }
//  const onAddToWishListPress = (item)=>{ 
//    if(!isInWishList(item) ){
//     addToWishList$(item)
//    }else{
//     removeToWishList$(item?.name)
//    }
    
//  }
 

//   const ItemCard = ({item}) => {
//     const {description, price, image, name} = item;
//     return ( <CheckOutItem description={description} name={name} image={image} price={price} /> );
//   };
//   return (
//     <>
//       <Container >
//         <View style={{flex: 1, paddingVertical: scale(30)}}>
//           <SwipeListView
//           ListEmptyComponent={()=> <Empty  label={"Your Cart is empty"}/> }
//           showsVerticalScrollIndicator={false}
//             keyExtractor={(item) => `${item.name}_${new Date().getTime()}`}
//             ItemSeparatorComponent={() => <View style={{padding: scale(10)}} />}
//             data={cart.cartItems || []}
//             renderItem={({item, index}) => <ItemCard item={item} />}
//             renderHiddenItem={(data, rowMap) => (
//               <View
//                 style={{
//                   flex: 1,
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                 }}>
//                 <Pressable
//                   onPress={()=>onAddToWishListPress(data?.item)}
//                   style={{
//                     left: scale(-15),
//                     flex: scale(0.3),
//                     backgroundColor: appColors.yellow,
//                     height: '100%',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                   }}>
//                   <Feather
//                     name={'star' }
//                     size={scale(25)}
//                     color={isInWishList(data?.item) ? appColors.primary :  appColors.white}
//                   />
//                 </Pressable>
//                 <Pressable
//                 onPress={()=>onDeletePress(data?.item)}
//                   style={{
//                     left: scale(15),
//                     flex: scale(0.3),
//                     height: '100%',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                   }}>
//                   <Feather
//                     name={'trash'}
//                     size={scale(25)}
//                     color={appColors.redOrange}
//                   />
//                 </Pressable>
//               </View>
//             )}
//             leftOpenValue={scale(85)}
//             rightOpenValue={scale(-85)}
//           />
//         </View> 
//       </Container>
//       <View style={{backgroundColor: 'red', bottom: scale(-15)}}>
//         <BottomButtons onPress={()=> navigation.navigate("Checkout") } buttonLabel={'CHECKOUT'} price={getAmount()} />
//       </View>
//     </>
//   );
// }
// /* 
// const mapStateToProps = (state) => ({
//   cartItems : state.cart.cartItems
// });
// const mapDispatchToProps = { 
// };

// export default connect(mapStateToProps, mapDispatchToProps)(index); */
// export default ReduxWrapper(index);

import React, { useEffect } from 'react';
import { View, Text, Image, Pressable, FlatList } from 'react-native';
import { scale } from 'react-native-size-matters';
import Container from '../../components/Container';
import { appColors } from '../../utils/appColors';
import BottomButtons from '../../components/BottomButtons';
import { connect } from 'react-redux';
import ReduxWrapper from '../../utils/ReduxWrapper';
import { removeFromCart$ } from '../../redux/actions/cartActions';
import { addToWishList$, removeToWishList$ } from '../../redux/actions/wishListActions';
import { APP_CURRENCY } from '../../utils/appConfig';
import Empty from '../../components/Empty';
import Feather from 'react-native-vector-icons/Feather';
import CheckOutItem from '../../components/CheckOutItem';

function index({ cart, removeFromCart$, addToWishList$, removeToWishList$, wishList: { wishItemNames }, navigation, addToCart$,update_cart$, }) {

  const getAmount = () => {
    let amount = 0;
    cart.cartItems?.forEach(item => {
      const { price,quantity } = item;
      // console.log(`price and quantity...........................................................................${price}${quantity}`)
      amount += price * quantity;
    });
    return ` ${amount}`;
  }
 
  

  const onDeletePress = (item) => {
    removeFromCart$(item?._id);
  }

  const isInWishList = (item) => {
    return wishItemNames?.includes(item?.name);
  }

  const onAddToWishListPress = (item) => {
    if (!isInWishList(item)) {
      addToWishList$(item);
    } else {
      removeToWishList$(item?.name);
    }
  }

  const renderCartItem = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: scale(10), paddingVertical: scale(5), borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <CheckOutItem description={item.description} name={item.name} image={item.image} price={item.price} update_cart$={update_cart$} _id = {item._id} />
        <Pressable onPress={() => onDeletePress(item)}>
          <Feather name="trash" size={scale(25)} color={appColors.redOrange} />
        </Pressable>
      </View>
    );
  };

  return (
    <>
      <Container>
        <View style={{ flex: 1, paddingVertical: scale(30) }}>
          {cart.cartItems && cart.cartItems.length > 0 ? (
            <FlatList
              data={cart.cartItems}
              renderItem={renderCartItem}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <Empty label="Your Cart is empty" />
          )}
        </View>
      </Container>
      <View style={{ backgroundColor: 'red', bottom: scale(-15) }}>
        <BottomButtons onPress={() => navigation.navigate("Checkout")} buttonLabel={'CHECKOUT'} price={getAmount()} />
      </View>
    </>
  );
}

export default ReduxWrapper(index);
