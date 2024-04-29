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
