import React, {useState} from 'react';
import axios from 'axios';
import {View, Text, Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';
import Container from '../../components/Container';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Label from '../../components/Label';
import {appColors, shadow} from '../../utils/appColors';
import Feather from 'react-native-vector-icons/Feather';
import {AlertHelper} from '../../utils/AlertHelper'
import ReduxWrapper from '../../utils/ReduxWrapper';
function index({navigation}) {
  const [userInfo, setUserInfo] = useState({});
  const [isloading, setisloading] = useState(false);
  const onChnage = (name, text) => {
    setUserInfo({...userInfo, [name]: text});
  };


const onSignUp = async () => {
  setisloading(true)
  const { name, email, password, address, phone, answer } = userInfo;

  try {
    const response = await axios.post(`${process.env.SERVER_URL}api/v1/auth/register`, {
      name, email, password, address, phone, answer
    }, {
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (response.data && response.data.success) {
      AlertHelper.show("success", "Signup Success, Welcome");
      setisloading(false)
      navigation.navigate("Login");
    } else {
      AlertHelper.show("error", "Signup Failed, Please Retry");
    }
  } catch (error) {
    // Handle error
    console.error("Error during signup:", error);
    AlertHelper.show("error", "An error occurred during signup");
  }
};

  return (
    <Container isScrollable>
      <Pressable
        onPress={() => navigation.goBack()}
        style={{marginTop: scale(30)}}>
        <Feather name={'chevron-left'} size={scale(25)} />
      </Pressable>
      <View
        style={{
          marginTop: scale(1),
          backgroundColor: appColors.white,
          ...shadow,
          padding: scale(15),
          borderRadius: scale(5),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <Label
            text="Sign Up"
            style={{fontSize: scale(30), fontWeight: '700'}}
          />
        </View>
        <View style={{paddingVertical: scale(15)}}>
          <Label
            text="Sign in to Continue"
            style={{
              fontSize: scale(16),
              //fontWeight: '500',
              color: appColors.darkGray,
            }}
          />
        </View>
        <View style={{paddingVertical: scale(2)}}>
          <CustomInput
            onChangeText={(text) => onChnage('name', text)}
            label="Name"
            placeholder="Amusoftech"
          />
        </View>
        <View style={{paddingVertical: scale(2)}}>
          <CustomInput
            onChangeText={(text) => onChnage('email', text)}
            keyboardType="email-address"
            label="Email"
            placeholder="john@doe.com"
          />
        </View>
        <View style={{paddingVertical: scale(2)}}>
          <CustomInput
            onChangeText={(text) => onChnage('phone', text)}
            keyboardType="phone-number"
            label="Phone No."
            placeholder="Phone No."
          />
        </View>
        <View style={{paddingVertical: scale(2)}}>
          <CustomInput
            onChangeText={(text) => onChnage('address', text)}
            keyboardType="address"
            label="Address"
            placeholder="Address"
          />
        </View>
        
        <View style={{paddingVertical: scale(2)}}>
          <CustomInput
            onChangeText={(text) => onChnage('answer', text)}
            keyboardType="text"
            label="Favourite Sports"
            placeholder="Favourite Sports"
          />
        </View>
        <View style={{paddingVertical: scale(2)}}>
          <CustomInput
            onChangeText={(text) => onChnage('password', text)}
            secureTextEntry
            label="Password"
            placeholder="Password"
          />
        </View>
        <CustomButton isLoading = {isloading} onPress={onSignUp} label="Sign up" />
      </View>
    </Container>
  );
}
export default ReduxWrapper(index);
