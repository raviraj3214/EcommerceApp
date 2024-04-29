// import React, {useState} from 'react';
// import {View, Text, StyleSheet, Dimensions} from 'react-native';
// import Container from '../../components/Container';
// import Stepper from 'react-native-stepper-ui';
// import CheckoutDelivery from './CheckoutDelivery';
// import {appColors} from '../../utils/appColors';
// import CustomButton from '../../components/CustomButton';
// import {scale} from 'react-native-size-matters';
// import ScreenHeader from '../../components/ScreenHeader';
// import CheckoutAddress from './CheckoutAddress';
// import CheckoutPayment from './CheckoutPayment';
// import ReduxWrapper from '../../utils/ReduxWrapper';
// import Razorpay from './Razorpay';

// const {height} = Dimensions.get('window');

// function CheckOutSteper({navigation,cart,auth}) {
//   const [active, setActive] = useState(0);
//   const onNext = () => {
//     alert("This is not a business app.This is only a sample app.So,it is not taking any input.");
//     setActive((prevActive) => prevActive + 1);
//   };

//   // const onFinish = () => {
//   //   navigation.navigate("Summary")
//   //    //Summary
//   // };
//   const onFinish = () => {
//     alert("How are you.");
//   };
  
//   return (
//     <Container>
//       <ScreenHeader label="Checkout" navigation={navigation} />

//       <Stepper
//         stepStyle={styles.stepStyle}
//         active={active}
//         onFinish={onFinish}
//         content={[
//           // <CheckoutDelivery />,
//           <CheckoutAddress />,
//           // <CheckoutPayment />,
//           <Razorpay />
//         ]}
//         //showButton={false}
//         onNext={onNext}
//         onBack={() => setActive((p) => p - 1)}
//         buttonStyle={styles.buttonStyle}
//         buttonTextStyle={styles.buttonTextStyle}
//         wrapperStyle={styles.wrapperStyle}
//       />
//     </Container>
//   );
// }
// export default ReduxWrapper(CheckOutSteper);

// const styles = StyleSheet.create({
//   stepStyle: {
//     backgroundColor: appColors.primary,
//     width: 30,
//     height: 30,
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     opacity: 1,
//   },
//   buttonTextStyle: {
//     fontSize: scale(16),
//     fontWeight: '300',
//     color: appColors.white,
//     letterSpacing: scale(2),
//     textTransform: 'uppercase',
//   },
//   buttonStyle: {
//     /*  padding: 10,
//     borderRadius: 4,
//     alignSelf: 'flex-start',
//     marginRight: 10,
//     backgroundColor: appColors.primary, */
//     //top: scale(height / 9),
//     height: scale(50),
//     backgroundColor: appColors.primary,
//     borderRadius: scale(5),
//     justifyContent: 'space-evenly',
//     flexDirection: 'row',
//     alignItems: 'center',
//     overflow: 'hidden',
//     marginVertical: scale(10),
//     paddingHorizontal: scale(50),
//     //position:'absolute',
//     bottom: scale( -30)
    

//   },
//   wrapperStyle: {},
// });
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Dimensions,Button, Alert } from 'react-native';
// import Container from '../../components/Container';
// import Stepper from 'react-native-stepper-ui';
// import CheckoutDelivery from './CheckoutDelivery';
// import { appColors } from '../../utils/appColors';
// import CustomButton from '../../components/CustomButton';
// import { scale } from 'react-native-size-matters';
// import ScreenHeader from '../../components/ScreenHeader';
// import CheckoutAddress from './CheckoutAddress';
// import CheckoutPayment from './CheckoutPayment';
// import ReduxWrapper from '../../utils/ReduxWrapper';
// import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
// import RazorpayCheckout from 'react-native-razorpay';
// import axios from 'axios';

// const { height } = Dimensions.get('window');

// function CheckOutSteper({ navigation, cart, auth }) {
//   const [active, setActive] = useState(0);
//   const [addressData, setAddressData] = useState(null);

  
//   const handleAddressChange = (data) => {
//     setAddressData(data);
//   };
//   const getAmount = () => {
//     let amount = 0;
//     cart.cartItems?.forEach(item => {
//       const { price, quantity } = item;
//       amount += price * quantity;
//     });
//     return amount*100;
//   };

//   const getProductIds = () => {
//     return cart.cartItems.map(item => item._id);
//   };

//   const createOrder = async () => {
//     try {
//       const response = await axios.post(`https://api.raviecom.site/api/v1/product/razorpay/payment`, {
//         products: cart.cartItems,
//         user_id: auth.user._id,
//         amount: getAmount(),
//         address,
//       });
//       setOrderId(response.data.id);
//     } catch (error) {
//       console.error('Error creating order:', error.response.data);
//     }
//   };

//   const initiatePayment = () => {
//     if (orderId) {
//       RazorpayCheckout.open({
//         key: 'rzp_test_VQw8TktAkO3St6',
//         amount: getAmount(),
//         currency: 'INR',
//         order_id: orderId,
//         name: 'Ravi Raj',
//         description: 'Test Payment',
//         prefill: {
//           contact: 'user@example.com',
//           email: 'user@example.com'
//         },
//         theme: { color: '#3399cc' }
//       }, (Data) => {
//         // Send payment success data to the server
//         axios.post("https://api.raviecom.site/api/v1/product/razorpay/payment-success", Data)
//           .then(response => {
          
//               navigation.navigate('Orders')  // Navigate to Orders page
            
//           })
//           .catch(error => {
//             console.error('Error in payment success:', error);
//             Alert.alert('Error', 'Failed to process payment.');
//           });
//       });
//     } else {
//       Alert.alert('Error', 'Order ID not found. Please create order first.');
//     }
//   };

  

//   return (
//     <Container>
//       <ScreenHeader label="Checkout" navigation={navigation} />

//       <Stepper
//         stepStyle={styles.stepStyle}
//         active={active}
//         content={[
//           // <CheckoutDelivery />,
//           <CheckoutAddress onAddressChange={handleAddressChange} />,
//           // <CheckoutPayment />,
//           // <Razorpay addressData={addressData} />
//         ]}
//         //showButton={false}
      
//         buttonStyle={styles.buttonStyle}
//         buttonTextStyle={styles.buttonTextStyle}
//         wrapperStyle={styles.wrapperStyle}
//       />
//     </Container>
//   );
// }
// export default ReduxWrapper(CheckOutSteper);

// const styles = StyleSheet.create({
//   stepStyle: {
//     backgroundColor: appColors.primary,
//     width: 30,
//     height: 30,
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     opacity: 1,
//   },
//   buttonTextStyle: {
//     fontSize: scale(16),
//     fontWeight: '300',
//     color: appColors.white,
//     letterSpacing: scale(2),
//     textTransform: 'uppercase',
//   },
//   buttonStyle: {
//     height: scale(50),
//     backgroundColor: appColors.primary,
//     borderRadius: scale(5),
//     justifyContent: 'space-evenly',
//     flexDirection: 'row',
//     alignItems: 'center',
//     overflow: 'hidden',
//     marginVertical: scale(10),
//     paddingHorizontal: scale(50),
//     bottom: scale(-30)
//   },
//   wrapperStyle: {},
// });

import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Alert } from 'react-native';
import Container from '../../components/Container';
import Stepper from 'react-native-stepper-ui';
import CheckoutDelivery from './CheckoutDelivery';
import { appColors } from '../../utils/appColors';
import CustomButton from '../../components/CustomButton';
import { scale } from 'react-native-size-matters';
import ScreenHeader from '../../components/ScreenHeader';
import CheckoutAddress from './CheckoutAddress';
import CheckoutPayment from './CheckoutPayment';
import ReduxWrapper from '../../utils/ReduxWrapper';
import { useNavigation } from '@react-navigation/native';
import RazorpayCheckout from 'react-native-razorpay';
import axios from 'axios';
import Razorpay from './Razorpay';

const { height } = Dimensions.get('window');

// function CheckOutSteper({ navigation, cart, auth }) {
//   const [active, setActive] = useState(0);
//   const [addressData, setAddressData] = useState(null);
//   const [orderId, setOrderId] = useState(null); // State to store order ID

//   const handleAddressChange = (data) => {
//     setAddressData(data);
//   };

//   const getAmount = () => {
//     let amount = 0;
//     cart.cartItems?.forEach(item => {
//       const { price, quantity } = item;
//       amount += price * quantity;
//     });
//     return amount * 100;
//   };

 

//   const createOrder = async () => {
//     try {
//       const response = await axios.post(`https://api.raviecom.site/api/v1/product/razorpay/payment`, {
//         products: cart.cartItems,
//         user_id: auth.user._id,
//         amount: getAmount(),
//         address: addressData, // Use addressData instead of undefined address variable
//       });
//       setOrderId(response.data.id);
//       // After creating order, initiate payment
//     } catch (error) {
//       console.error('Error creating order:', error.response.data);
//     }
//   };

//   return (
//     <Container>
//       <ScreenHeader label="Checkout" navigation={navigation} />
//       <Stepper
//         stepStyle={styles.stepStyle}
//         active={active}
//         content={[
//           <CheckoutAddress onAddressChange={handleAddressChange}  />, // Pass onFinish prop to address checkout component
//           // Other steps...
//           <RazorpayCheckout orderId={orderId}/>
//         ]}
//         onNext={onNext}
//         buttonStyle={styles.buttonStyle}
//         buttonTextStyle={styles.buttonTextStyle}
//         wrapperStyle={styles.wrapperStyle}
//       />
//     </Container>
//   );
// }
// export default ReduxWrapper(CheckOutSteper);
// Import necessary modules and components...

function CheckOutSteper({ navigation, cart, auth }) {
  const [active, setActive] = useState(0);
  const [addressData, setAddressData] = useState(null);
  const [orderId, setOrderId] = useState(null);

  const handleAddressChange = (data) => {
    setAddressData(data);
  };

  const onNext = async () => {
    // Call createOrder function when user proceeds to the next step
    
    setActive(active + 1); // Move to the next step after creating the order
  };
  const onBack = () => {
    setActive(active - 1); // Move to the previous step
  };


  const getAmount = () => {
    let amount = 0;
    cart.cartItems?.forEach(item => {
      const { price, quantity } = item;
      amount += price * quantity;
    });
    return amount * 100;
  };

  // const createOrder = async () => {
  //   try {
  //     const response = await axios.post(`https://api.raviecom.site/api/v1/product/razorpay/payment`, {
  //       products: cart.cartItems,
  //       user_id: auth.user._id,
  //       amount: getAmount(),
  //       address: addressData,
  //     });
  //     setOrderId(response.data.id);
  //     // After creating order, you can initiate payment here if needed
  //   } catch (error) {
  //     console.error('Error creating order:', error.response.data);
  //   }
  // };

  return (
    <Container>
      <ScreenHeader label="Checkout" navigation={navigation} />
      <Stepper
        stepStyle={styles.stepStyle}
        active={active}
        content={[
          <CheckoutAddress onAddressChange={handleAddressChange} />,
          // Other steps...
          <Razorpay addressData={addressData} />, // Render Razorpay checkout component if orderId is available
        ]}
        onNext={onNext}
        onBack={onBack}
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        wrapperStyle={styles.wrapperStyle}
        renderFinishButton={() => null}
      />
    </Container>
  );
}
export default ReduxWrapper(CheckOutSteper);

// Define styles...


const styles = StyleSheet.create({
  stepStyle: {
    backgroundColor: appColors.primary,
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
  buttonTextStyle: {
    fontSize: scale(16),
    fontWeight: '300',
    color: appColors.white,
    letterSpacing: scale(2),
    textTransform: 'uppercase',
  },
  buttonStyle: {
    height: scale(50),
    backgroundColor: appColors.primary,
    borderRadius: scale(5),
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    marginVertical: scale(10),
    paddingHorizontal: scale(50),
    bottom: scale(-30)
  },
  wrapperStyle: {},
});
