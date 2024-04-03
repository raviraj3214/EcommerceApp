import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';
import Container from '../../components/Container';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Label from '../../components/Label';
import {appColors, shadow} from '../../utils/appColors';
import auth from '@react-native-firebase/auth';
import {AlertHelper} from '../../utils/AlertHelper';
import {CommonActions} from '@react-navigation/native';
import axios from "axios";
 
import googleLogin from '../../services/googleLogin';
import writeData from '../../utils/writeData';
import ReduxWrapper from '../../utils/ReduxWrapper';

function index({getProductsList$,loginUser$, navigation,logoutUser$}) {
  const [credentials, setCredentials] = useState({});
  const [isloading, setisloading] = useState(false);
  const onGoogleLogin  =async ()=>{
   const {user,additionalUserInfo} =await googleLogin()
  const {email,displayName,uid,photoURL} =user
   if(additionalUserInfo?.isNewUser){
    const {providerId,profile} =additionalUserInfo
     //create new user and login
    await writeData('users',{email , name: displayName  , uid ,photoURL,providerId,profile} )
   } 
   getProductsList$()
   loginUser$({email , name: displayName  , uid ,photoURL} );
  }
  const onLogin = async () => {
    const {email, password} = credentials;

    try {
        if(email && password){
          setisloading(true);
          const res = await axios.post("https://api.raviecom.site/api/v1/auth/login", {
            email,
            password,
          });
        console.warn(res.data);
        if (res.data && res.data.success) {
          // if(additionalUserInfo?.isNewUser){
          //   const {providerId,profile} =additionalUserInfo
          // //create new user and login
          // }
          const user = res.data.user;
          const token = res.data.token;
          loginUser$({user,token} );
          setisloading(false);

           getProductsList$()
          AlertHelper.show('success', 'Welcome to Amusoftech');
          navigation.navigate('Home');
        }
      }else{
        setisloading(false)
        AlertHelper.show('error', 'Email and password is required!!');
      }
      
    } catch (error) {
      setisloading(false)
      AlertHelper.show('error', 'Something went wrong');
    }
  };

  const onChangeText = (name, text) => {
    setCredentials({...credentials, [name]: text});
  };

  return (
    <Container isScrollable>
      <View
        style={{
          marginTop: scale(50),
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
            text="Welcome,"
            style={{fontSize: scale(30), fontWeight: '700'}}
          />
          <Pressable onPress={() => navigation.navigate('SignUp')}>
            <Label
              text="Sign Up"
              style={{
                fontSize: scale(14),
                fontWeight: '500',
                color: appColors.primary,
              }}
            />
          </Pressable>
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
        <View style={{paddingVertical: scale(10)}}>
          <CustomInput
            onChangeText={(text) => onChangeText('email', text)}
            keyboardType="email-address"
            label="Email"
            placeholder="john@doe.com"
          />
        </View>
        <View style={{paddingVertical: scale(10)}}>
          <CustomInput
            onChangeText={(text) => onChangeText('password', text)}
            secureTextEntry
            label="Password"
            placeholder="Password"
            // value="*******"
          />
        </View>
        <Pressable
          onPress={() => navigation.navigate('Verification')}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingVertical: scale(10),
          }}>
          <Label
            text="Forgot password"
            style={{
              fontSize: scale(14),
              // fontWeight: '500',
            }}
          />
        </Pressable>
        <CustomButton isLoading={isloading}  onPress={onLogin} label="Sign in" />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: scale(20),
        }}>
        <Label
          text="-OR-"
          style={{
            fontSize: scale(18),
            //fontWeight: '500',
          }}
        />
      </View>
      <CustomButton
        onPress={onGoogleLogin}
        icon="google"
        label="Sign in"
        unFilled
      />
      <CustomButton    onPress={onLogin} icon="twitter" label="Sign in" unFilled />
    </Container>
  );
}

export default ReduxWrapper(index);
