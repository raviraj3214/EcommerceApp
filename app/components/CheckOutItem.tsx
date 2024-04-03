// import React from 'react';
// import {View, Text, Image} from 'react-native';
// import {scale} from 'react-native-size-matters';
// import {appColors} from '../utils/appColors';
// import Label from './Label';
// import {SimpleStepper} from 'react-native-simple-stepper';

// export default function CheckOutItem({ renderBagge, hideSteper,noBg, image, name, price}) {
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         backgroundColor:  noBg ?  'transparent':   appColors.lightGray,
//         //borderRadius: scale(  5 )
//       }}>
//       <Image
//         style={{
//           height: scale(130),
//           width: scale(130),
//            borderRadius:  scale(noBg ? 5 : 0),
//           //backgroundColor:appColors.darkGray
//         }}
//         source={{uri:image} }
//       />

//       <View
//         style={{
//           marginLeft: scale(10),
//           justifyContent: 'space-between',
//           paddingVertical: scale(10),
//         }}>
//         <Label text={name?.substring(0,20)} style={{fontWeight: '600' ,}} />
//         <Label
//           text={price}
//           style={{
//             fontSize: scale(18),
//             fontWeight: '500',
//             color: appColors.primary,
//           }}
//         />
//         {!hideSteper&& <SimpleStepper
//           containerStyle={{
//             backgroundColor: appColors.lightGray,
//             flexDirection: 'row',
//             borderRadius: scale(5),
//             overflow: 'hidden',
//             alignItems: 'center',
//             paddingHorizontal: scale(20),
//             height: scale(35), 
//           }}
//           incrementStepStyle={{padding: scale(10), opacity: scale(0.4)}}
//           decrementStepStyle={{padding: scale(10), opacity: scale(0.4)}}
//           incrementImageStyle={{height: scale(20), width: scale(20)}}
//           decrementImageStyle={{height: scale(20), width: scale(20)}}
//           showText
//           renderText={() => <Label text="1" />}
//           separatorStyle={{}} 
//         />}
//         {renderBagge&&renderBagge()}
//       </View>
//     </View>
//   );
// }
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import { appColors } from '../utils/appColors';
import Label from './Label';
import SimpleStepper from 'react-native-simple-stepper';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CheckOutItem({ image, name, price, update_cart$,_id }) {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    update_cart$({_id,quantity:quantity+1});

  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      update_cart$({_id,quantity:quantity-1});

    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.infoContainer}>
        <Label text={name?.substring(0, 14)} style={styles.name} />
        <Label text={price} style={styles.price} />
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={decrementQuantity} style={styles.counterButton}>
            <Icon name="remove" size={24} color={appColors.primary} />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={incrementQuantity} style={styles.counterButton}>
            <Icon name="add" size={24} color={appColors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderRadius: scale(5),
    marginVertical: scale(10),
  },
  image: {
    height: scale(130),
    width: scale(130),
    borderRadius: scale(5),
    backgroundColor: appColors.darkGray,
  },
  infoContainer: {
    marginLeft: scale(10),
    justifyContent: 'space-between',
    paddingVertical: scale(10),
  },
  name: {
    fontWeight: '500',
    fontSize: scale(16),
    color: appColors.primary,
  },
  price: {
    fontSize: scale(18),
    fontWeight: '500',
    color: appColors.primary,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(5),
  },
  counterButton: {
    backgroundColor: appColors.white,
    borderRadius: scale(5),
    padding: scale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    fontSize: scale(20),
    paddingHorizontal: scale(10),
    color: appColors.primary,
  },
});

