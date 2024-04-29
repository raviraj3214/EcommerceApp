// import React from 'react';
// import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
// import {scale} from 'react-native-size-matters';
// import Container from '../../components/Container';
// import Label from '../../components/Label';
// import ScreenHeader from '../../components/ScreenHeader';
// import {appColors, shadow} from '../../utils/appColors';
//  import {orderList} from '../../utils/MockData';

// export default function index({navigation}) {
//   const OrderCard = ({item}) => {
//     const {label, amount, status, color} = item;
//     return (
//       <View style={styles.contentContiner}>
//         <View>
//           <Label
//             text={label}
//             style={{fontSize: scale(18), fontWeight: '500'}}
//           />
//           <Label
//             text={amount}
//             style={{
//               fontWeight: '500',
//               color: appColors.primary,
//               paddingVertical: scale(10),
//             }}
//           />
//           <Pressable
//             style={{
//               borderRadius: scale(3),
//               width: '80%',
//               paddingVertical: scale(10),
//               backgroundColor: appColors?.[color],
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Label
//               text={status}
//               style={{fontSize: scale(14), color: appColors.white}}
//             />
//           </Pressable>
//         </View>
//         <View>
//           <FlatList
           
//             nestedScrollEnabled
//             ItemSeparatorComponent={() => <View style={{padding: scale(2)}} />}
//             data={[1, 2, 3, 4]}
//             numColumns={2}
//             keyExtractor={(item) => `${item}_${new Date().getTime()}_${item}`}
//             renderItem={({item}) => (
//               <View
//                 key={item}
//                 style={{
//                   backgroundColor: appColors.lightGreen,
//                   height: scale(35),
//                   width: scale(35),
//                   marginLeft: scale(4),
//                   borderRadius: scale(3),
//                 }}
//               />
//             )}
//           />
//         </View>
//       </View>
//     );
//   };
//   return (
//     <Container  >
//       <ScreenHeader navigation={navigation} label="Orders List" />
//       <View style={{paddingVertical: scale(20)}}>
//         <Label
//           text="Sept 23, 2021"
//           style={{opacity: scale(0.5), fontSize: scale(13)}}
//         />
//       </View>
//       <OrderCard
//         item={{
//           label: 'AMU - 9249296 - N',
//           amount: '$3503',
//           status: 'In transit',
//           color: 'yellow',
//         }}
//       />
//       <View style={{flex:1, paddingVertical:scale(20)}}>
//       <View style={{paddingVertical: scale(20)}}>
//         <Label
//           text="Sept 23, 2021"
//           style={{opacity: scale(0.5), fontSize: scale(13)}}
//         />
//       </View>

//       <FlatList
      
//       keyExtractor={(item)=> `${item.label}_${new Date().getTime()}_${item.amount}`}
//         ItemSeparatorComponent={() => <View style={{padding: scale(5)}} />}
//         data={orderList}
//         renderItem={({item, index}) => <OrderCard key={index} item={item} />}
//       />
//       </View>
//     </Container>
//   );
// }

// const styles = StyleSheet.create({
//   contentContiner: {
//     paddingVertical: scale(30),
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: appColors.white,
//     paddingHorizontal: scale(20),
//     ...shadow,
//   },
// });
// // import React, { useState, useEffect } from 'react';
// // import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
// // import { scale } from 'react-native-size-matters';
// // import Container from '../../components/Container';
// // import Label from '../../components/Label';
// // import ScreenHeader from '../../components/ScreenHeader';
// // import { appColors, shadow } from '../../utils/appColors';
// // import axios from 'axios';
// // import ReduxWrapper from '../../utils/ReduxWrapper';
// // function index({ navigation, auth }) {
// //   const [orders, setOrders] = useState([]);

// //   useEffect(() => {
// //     fetchOrders();
// //   }, []);

// //   const fetchOrders = async () => {
// //     try {
// //       const response = await axios.post('https://api.raviecom.site/api/v1/auth/razorpay-orders', {
// //         "_id": auth.user._id
// //       });
// //       setOrders(response.data);
// //     } catch (error) {
// //       console.error('Error fetching orders:', error);
// //     }
// //   };

// //   const OrderCard = ({ item }) => {
// //     const { address, amount, status, products  } = item;
// //     return (
// //       <View style={styles.contentContiner}>
// //         <View>
// //           <Label
// //             text={label}
// //             style={{ fontSize: scale(18), fontWeight: '500' }}
// //           />
// //           <Label
// //             text={amount}
// //             style={{
// //               fontWeight: '500',
// //               color: appColors.primary,
// //               paddingVertical: scale(10),
// //             }}
// //           />
// //           <Pressable
// //             style={{
// //               borderRadius: scale(3),
// //               width: '80%',
// //               paddingVertical: scale(10),
// //               backgroundColor: appColors?.[color],
// //               justifyContent: 'center',
// //               alignItems: 'center',
// //             }}>
// //             <Label
// //               text={status}
// //               style={{ fontSize: scale(14), color: appColors.white }}
// //             />
// //           </Pressable>
// //         </View>
// //         <View>
// //           <FlatList
// //             nestedScrollEnabled
// //             ItemSeparatorComponent={() => <View style={{ padding: scale(2) }} />}
// //             data={[1, 2, 3, 4]}
// //             numColumns={2}
// //             keyExtractor={(item) => `${item}_${new Date().getTime()}_${item}`}
// //             renderItem={({ item }) => (
// //               <View
// //                 key={item}
// //                 style={{
// //                   backgroundColor: appColors.lightGreen,
// //                   height: scale(35),
// //                   width: scale(35),
// //                   marginLeft: scale(4),
// //                   borderRadius: scale(3),
// //                 }}
// //               />
// //             )}
// //           />
// //         </View>
// //       </View>
// //     );
// //   };

// //   return (
// //     <Container>
// //       <ScreenHeader navigation={navigation} label="Track Order" />
// //       <FlatList
// //         keyExtractor={(item) => `${item.label}_${item.amount}_${item.status}`}
// //         ItemSeparatorComponent={() => <View style={{ padding: scale(5) }} />}
// //         data={orders}
// //         renderItem={({ item }) => <OrderCard item={item} />}
// //       />
// //     </Container>
// //   );
// // }
// // export default ReduxWrapper(index);


// // const styles = StyleSheet.create({
// //   contentContiner: {
// //     paddingVertical: scale(30),
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     backgroundColor: appColors.white,
// //     paddingHorizontal: scale(20),
// //     ...shadow,
// //   },
// // });

// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, FlatList,Image } from 'react-native';
// import ReduxWrapper from '../../utils/ReduxWrapper';
// import { scale } from 'react-native-size-matters';
// import Container from '../../components/Container';
// import Label from '../../components/Label';
// import ScreenHeader from '../../components/ScreenHeader';
// import { appColors, shadow } from '../../utils/appColors';
// import axios from 'axios';

// function index({ navigation, auth }) {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const response = await axios.post('https://api.raviecom.site/api/v1/auth/razorpay-orders', {
//         _id: auth.user._id
//       });
//       setOrders(response.data);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     }
//   };

//   // const OrderCard = ({ item }) => {
//   //   const { address, products, amount } = item;
//   //   return (
//   //     <View style={styles.contentContiner}>
//   //       <View>
//   //         <Label text={address} style={{ fontSize: scale(18), fontWeight: '500' }} />
//   //         <Label text={`Amount: $${amount}`} style={{ fontWeight: '500', color: appColors.primary, paddingVertical: scale(10) }} />
//   //         <FlatList
//   //           data={products}
//   //           keyExtractor={(product) => product._id}
//   //           renderItem={({ item: product }) => (
//   //             <Label text={product.name} style={{ fontSize: scale(16), fontWeight: '400' }} />
//   //           )}
//   //         />
//   //       </View>
//   //     </View>
//   //   );
//   // };
//   const OrderCard = ({ item }) => {
//     const { address, products, amount, status } = item;
//     return (
//       <View style={styles.contentContiner}>
//         <View>
          
//           <FlatList
//             data={products}
//             keyExtractor={(product) => product._id}
//             renderItem={({ item }) => (
//               <View style={styles.productContainer}>
//                 <Image source={{ uri: `https://api.raviecom.site/api/v1/product/product-photo/${item._id}`}} style={styles.productImage} />
//                 <Label text={item.name} style={{ fontSize: scale(16), fontWeight: '400' }} />
//               </View>
//             )}
//           />
//           <Label text={`Address: ${address}`} style={{ fontSize: scale(18), fontWeight: '500' }} />
//           <Label text={`Amount: ${amount/100} Rs`} style={{ fontWeight: '500', color: appColors.primary, paddingVertical: scale(10) }} />
//             <Label text={`Payment: ${status} `} style={{ fontWeight: '500', color: appColors.primary, paddingVertical: scale(0) }} />
//         </View>
//       </View>
//     );
//   };


//   return (
//     <Container>
//       <ScreenHeader navigation={navigation} label="Orders List" />
//       <FlatList
//         data={orders}
//         renderItem={({ item }) => <OrderCard item={item} />}
//         keyExtractor={(item) => item._id}
//       />
//     </Container>
//   );
// }
// export default ReduxWrapper(index);
// const styles = StyleSheet.create({
//   contentContiner: {
//     paddingVertical: scale(30),
//     backgroundColor: appColors.white,
//     paddingHorizontal: scale(20),
//     ...shadow,
//   },
//   productContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: scale(10),
//   },
//   productImage: {
//     width: scale(50),
//     height: scale(50),
//     marginRight: scale(10),
//     borderRadius: scale(5),
//   },
// });
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';
import ReduxWrapper from '../../utils/ReduxWrapper';
import { scale } from 'react-native-size-matters';
import Container from '../../components/Container';
import Label from '../../components/Label';
import ScreenHeader from '../../components/ScreenHeader';
import { appColors, shadow } from '../../utils/appColors';
import axios from 'axios';

function index({ navigation, auth }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.post('https://api.raviecom.site/api/v1/auth/razorpay-orders', {
        _id: auth.user._id
      });
      setOrders(response.data);
      setLoading(false); // Data fetching completed, set loading to false
    } catch (error) {
      console.error('Error fetching orders:', error);
      setLoading(false); // Even if there's an error, stop loading
    }
  };

  const OrderCard = ({ item }) => {
    const { address, products, amount, status } = item;
    return (
      <View style={styles.contentContainer}>
        <View>
          <FlatList
            data={products}
            keyExtractor={(product) => product._id}
            renderItem={({ item }) => (
              <View style={styles.productContainer}>
                <Image source={{ uri: `https://api.raviecom.site/api/v1/product/product-photo/${item._id}`}} style={styles.productImage} />
                <Label text={item.name} style={{ fontSize: scale(16), fontWeight: '400' }} />
              </View>
            )}
          />
          <Label text={`Address: ${address}`} style={{ fontSize: scale(18), fontWeight: '500' }} />
          <Label text={`Amount: ${amount/100} Rs`} style={{ fontWeight: '500', color: appColors.primary, paddingVertical: scale(10) }} />
          <Label text={`Payment: ${status} `} style={{ fontWeight: '500', color: appColors.primary, paddingVertical: scale(0) }} />
        </View>
      </View>
    );
  };

  return (
    <Container>
      <ScreenHeader navigation={navigation} label="Orders List" />
      {loading ? (
        <ActivityIndicator size="large" color={appColors.primary} style={styles.loader} />
      ) : (
        <FlatList
          data={orders}
          renderItem={({ item }) => <OrderCard item={item} />}
          keyExtractor={(item) => item._id}
        />
      )}
    </Container>
  );
}
export default ReduxWrapper(index);

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: scale(30),
    backgroundColor: appColors.white,
    paddingHorizontal: scale(20),
    ...shadow,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(10),
  },
  productImage: {
    width: scale(50),
    height: scale(50),
    marginRight: scale(10),
    borderRadius: scale(5),
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
