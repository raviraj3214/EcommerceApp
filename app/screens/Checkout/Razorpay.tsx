import React, { useState, useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import RazorpayCheckout from 'react-native-razorpay';
import axios from 'axios';
import ReduxWrapper from '../../utils/ReduxWrapper';

const Razorpay = ({ cart, auth, addressData,delete_cart$ }) => {
  const [orderId, setOrderId] = useState('');
  const address = addressData;
  const navigation = useNavigation(); // Hook to access navigation object

  const getAmount = () => {
    let amount = 0;
    cart.cartItems?.forEach(item => {
      const { price, quantity } = item;
      amount += price * quantity;
    });
    return amount*100;
  };

  const getProductIds = () => {
    return cart.cartItems.map(item => item._id);
  };

  const createOrder = async () => {
    try {
      const response = await axios.post(`${process.env.SERVER_URL}api/v1/product/razorpay/payment`, {
        products: cart.cartItems,
        user_id: auth.user._id,
        amount: getAmount(),
        address,
      });
      setOrderId(response.data.id);
    } catch (error) {
      console.error('Error creating order:', error.response.data);
    }
  };
  useEffect(() => {
    createOrder(); // Run createOrder function when the component mounts
  }, []);

  const initiatePayment = () => {
    if (orderId) {
      RazorpayCheckout.open({
        key: process.env.RAZORPAY_KEY_ID,
        amount: getAmount(),
        currency: 'INR',
        order_id: orderId,
        name: 'Ravi Raj',
        description: 'Test Payment',
        prefill: {
          contact: 'user@example.com',
          email: 'user@example.com'
        },
        theme: { color: '#3399cc' }
      }, (Data) => {
        // Send payment success data to the server
        axios.post(`${process.env.SERVER_URL}api/v1/product/razorpay/payment-success`, Data)
          .then(response => {
               delete_cart$();
              navigation.navigate('Orders')  // Navigate to Orders page
            
          })
          .catch(error => {
            console.error('Error in payment success:', error);
            Alert.alert('Error', 'Failed to process payment.');
          });
      });
    } else {
      Alert.alert('Error', 'Order ID not found. Please create order first.');
    }
  };

  return (
    <View>
      {/* <Button title="Create Order" onPress={createOrder} /> */}
      <Button title="Initiate Payment" onPress={initiatePayment} />
    </View>
  );
};

export default ReduxWrapper(Razorpay);

