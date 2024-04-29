// import React from 'react';
// import {View, Text} from 'react-native';
// import {scale} from 'react-native-size-matters';
// import CheckBox from '../../components/CheckBox';
// import Label from '../../components/Label'; 
// import CustomInput from '../../components/CustomInput';
// export default function CheckoutAddress() {
//   return (
//     <View style={{paddingVertical: scale(30)}}>
//       <View style={{flex:1,  flexDirection: 'row', justifyContent: 'space-around', alignItems:'center'}}>
//         <CheckBox isChecked={true} /> 
//         <View style={{paddingLeft:scale(10)}}>
//         <Label text="Billing address is the same as delivery address" style={{fontSize:scale(15)}} />
//         </View>
//       </View>

//       <View style={{paddingVertical: scale(10)}}>
//            <CustomInput containerStyle={{backgroundColor: 'transparent'}} value="21, Alex Davidson Avenue" label="Street 1"   />
//       </View>
//       <View style={{paddingVertical: scale(10)}}>
//            <CustomInput containerStyle={{backgroundColor: 'transparent'}} value="Opposite Omegatron, Vicent Quarters" label="Street 2"   />
//       </View>

//       <View style={{paddingVertical: scale(10)}}>
//            <CustomInput containerStyle={{backgroundColor: 'transparent'}} value="Victoria Island" label="City"   />
//       </View>

//       <View style={{paddingVertical: scale(10)}}>
//            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
//            <CustomInput containerStyle={{backgroundColor: 'transparent'  }} value="Punjab" label="State"   />
//            <CustomInput containerStyle={{backgroundColor: 'transparent'  }} value="India" label="Country"   />
//            </View>
//       </View>
//     </View>
//   );
// }
// import React, { useState } from 'react';
// import { View } from 'react-native';
// import { scale } from 'react-native-size-matters';
// import CheckBox from '../../components/CheckBox';
// import Label from '../../components/Label';
// import CustomInput from '../../components/CustomInput';

// export default function CheckoutAddress({ onAddressChange }) {
//   const [addressData, setAddressData] = useState({
//     street1: '',
//     street2: '',
//     city: '',
//     state: '',
//     country: ''
//   });

//   const handleInputChange = (fieldName, value) => {
//     setAddressData({ ...addressData, [fieldName]: value });
//     // Pass the updated addressData to the parent component
//     onAddressChange(addressData);
//   };

//   return (
//     <View style={{ paddingVertical: scale(30) }}>
//       {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
//         <CheckBox isChecked={true} />
//         <View style={{ paddingLeft: scale(10) }}>
//           <Label text="Billing address is the same as delivery address" style={{ fontSize: scale(15) }} />
//         </View>
//       </View> */}

//       <View style={{ paddingVertical: scale(10) }}>
//         <CustomInput
//           containerStyle={{ backgroundColor: 'transparent' }}
//           value={addressData.street1}
//           label="Street 1"
//           onChangeText={(text) => handleInputChange('street1', text)}
//         />
//       </View>
//       <View style={{ paddingVertical: scale(10) }}>
//         <CustomInput
//           containerStyle={{ backgroundColor: 'transparent' }}
//           value={addressData.street2}
//           label="Street 2"
//           onChangeText={(text) => handleInputChange('street2', text)}
//         />
//       </View>

//       <View style={{ paddingVertical: scale(10) }}>
//         <CustomInput
//           containerStyle={{ backgroundColor: 'transparent' }}
//           value={addressData.city}
//           label="City"
//           onChangeText={(text) => handleInputChange('city', text)}
//         />
//       </View>

//       <View style={{ paddingVertical: scale(10) }}>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//           <CustomInput
//             containerStyle={{ backgroundColor: 'transparent' }}
//             value={addressData.state}
//             label="State"
//             onChangeText={(text) => handleInputChange('state', text)}
//           />
//           <CustomInput
//             containerStyle={{ backgroundColor: 'transparent' }}
//             value={addressData.country}
//             label="Country"
//             onChangeText={(text) => handleInputChange('country', text)}
//           />
//         </View>
//       </View>
//     </View>
//   );
// }

import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { scale } from 'react-native-size-matters';
import CheckBox from '../../components/CheckBox';
import Label from '../../components/Label';
import CustomInput from '../../components/CustomInput';

export default function CheckoutAddress({ onAddressChange }) {
  const [addressData, setAddressData] = useState({
    street1: '',
    street2: '',
    city: '',
    state: '',
    country: ''
  });

  // const handleInputChange = (fieldName, value) => {
  //   setAddressData({ ...addressData, [fieldName]: value });
  //   // Pass the updated addressData to the parent component
  //   onAddressChange({ ...addressData, [fieldName]: value });
  // };
  const handleInputChange = (fieldName, value) => {
    // Update the addressData with the concatenated string
    setAddressData(prevAddress => ({ ...prevAddress, [fieldName]: value }));

    // Concatenate all address fields into a single string
    const fullAddress = Object.values({ ...addressData, [fieldName]: value }).join(', ');
    
    // Pass the updated addressData string to the parent component
    onAddressChange(fullAddress);
  };

  return (
    <ScrollView contentContainerStyle={{ paddingVertical: scale(5) }}>
      {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <CheckBox isChecked={true} />
        <View style={{ paddingLeft: scale(10) }}>
          <Label text="Billing address is the same as delivery address" style={{ fontSize: scale(15) }} />
        </View>
      </View> */}

      <View style={{ paddingVertical: scale(10) }}>
        <CustomInput
          containerStyle={{ backgroundColor: 'transparent' }}
          value={addressData.street1}
          label="Street 1"
          onChangeText={(text) => handleInputChange('street1', text)}
        />
      </View>
      <View style={{ paddingVertical: scale(10) }}>
        <CustomInput
          containerStyle={{ backgroundColor: 'transparent' }}
          value={addressData.street2}
          label="Street 2"
          onChangeText={(text) => handleInputChange('street2', text)}
        />
      </View>

      <View style={{ paddingVertical: scale(10) }}>
        <CustomInput
          containerStyle={{ backgroundColor: 'transparent' }}
          value={addressData.city}
          label="City"
          onChangeText={(text) => handleInputChange('city', text)}
        />
      </View>

      <View style={{ paddingVertical: scale(10) }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <CustomInput
            containerStyle={{ backgroundColor: 'transparent' }}
            value={addressData.state}
            label="State"
            onChangeText={(text) => handleInputChange('state', text)}
          />
          <CustomInput
            containerStyle={{ backgroundColor: 'transparent' }}
            value={addressData.country}
            label="Country"
            onChangeText={(text) => handleInputChange('country', text)}
          />
        </View>
      </View>
    </ScrollView>
  );
}
