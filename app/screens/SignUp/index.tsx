import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';
import Container from '../../components/Container';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Label from '../../components/Label';
import {appColors, shadow} from '../../utils/appColors';
import Feather from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
 import {AlertHelper} from '../../utils/AlertHelper'
export default function index({navigation}) {
  const [userInfo, setUserInfo] = useState({});
  const onChnage = (name, text) => {
    setUserInfo({...userInfo, [name]: text});
  };

  const onSignUp = async () => {
    const {name,email,password,address,phone,answer}=userInfo
    const response = await fetch("https://api.raviecom.site/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,email,password,address,phone,answer
      }),
    });

    const res = await response.json();
    if(res && res.data.success){
      AlertHelper.show("success", "Signup Success, Welcome to Amusoftech")
      navigation.navigate("Home")
    }else{
      AlertHelper.show("error", "Signup Failed, Please Retry")
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
        <CustomButton onPress={onSignUp} label="Sign up" />
      </View>
    </Container>
  );
}
