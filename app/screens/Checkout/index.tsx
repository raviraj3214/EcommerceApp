import React from 'react';
import {View, Text, FlatList, TextInput,KeyboardAvoidingView } from 'react-native';
import Container from '../../components/Container';
import CheckOutItem from '../../components/CheckOutItem';
import {scale} from 'react-native-size-matters';
import {appColors} from '../../utils/appColors';
import Label from '../../components/Label';
import CustomButton from '../../components/CustomButton';
import ReduxWrapper from '../../utils/ReduxWrapper';
function index({navigation,cart,update_cart$}) {
  const getAmount = () => {
    let amount = 0;
    cart.cartItems?.forEach(item => {
      const { price,quantity } = item;
      // console.log(`price and quantity...........................................................................${price}${quantity}`)
      amount += price * quantity;
    });
    return amount;
  }
  const getTotal = () => {
    const price = getAmount();
    const total = price + 40;
    const formattedTotal = `${total.toFixed(2)}`;

     return formattedTotal;
  }
  return (
    <KeyboardAvoidingView style={{flex:1}}>
      <Container
        isScrollable
        bodyStyle={{
          flex: 1,
          paddingHorizontal: scale(0),
          paddingVertical: scale(20),
        }}>
        <View
          style={{paddingHorizontal: scale(20), paddingVertical: scale(20)}}>
          <FlatList
          showsVerticalScrollIndicator={false}
            data={cart.cartItems}
            ItemSeparatorComponent={() => <View style={{padding: scale(10)}} />}
            renderItem={({item, index}) => (
              // <CheckOutItem
              //   noBg
              //   name={item.name}
              //   image={item.image}
              //   price={item.price}
              // />
              <CheckOutItem description={item.description} name={item.name} image={item.image} price={item.price} update_cart$={update_cart$} _id = {item._id} />

            )}
          />
        </View>
        <View
          style={{
            borderColor: appColors.lightGray,
            /*  bottom:scale(130),  */ borderBottomWidth: scale(2),
            borderTopWidth: scale(2),
          }}>
          <View
            style={{
              paddingVertical: scale(20),
              paddingHorizontal: scale(20),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Label
              text="Sub Total"
              style={{fontWeight: '400', fontSize: scale(18)}}
            />
            <View
              style={{
                borderRadius: scale(1),
                borderWidth: scale(0.5),
                borderStyle: 'dashed',
                width: '60%',
              }}
            />
            <Label text ={getAmount()} style={{fontWeight: '800'}} />
          </View>

          <View
            style={{
              paddingVertical: scale(20),
              paddingHorizontal: scale(20),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Label
              text="Tax"
              style={{fontWeight: '400', fontSize: scale(18)}}
            />
            <View
              style={{
                borderRadius: scale(1),
                borderWidth: scale(0.5),
                borderStyle: 'dashed',
                width: '60%',
              }}
            />
            <Label text="40" style={{fontWeight: '800'}} />
          </View>
          <View
            style={{
              paddingVertical: scale(20),
              paddingHorizontal: scale(20),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Label
              text="Total"
              style={{fontWeight: '400', fontSize: scale(18)}}
            />
            <View
              style={{
                borderRadius: scale(1),
                borderWidth: scale(0.5),
                borderStyle: 'dashed',
                width: '60%',
              }}
            />
            <Label text = {getTotal()} style={{fontWeight: '800'}} />
          </View>
      
        </View>

        {/* <View style={{flex:1, paddingHorizontal: scale(20)}}>
          <View
            style={{
              borderRadius: scale(5),
              marginTop: scale(20),
              borderColor: appColors.lightGray,
              borderWidth: scale(1),
              paddingHorizontal: scale(20),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: scale(50),
            }}>
            <TextInput  placeholder="Enter Voucher Code" style={{flex:1, fontSize:scale(16)}} />
            <Label text="APPLY" />
          </View>
        </View> */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingHorizontal: scale(20),
            paddingVertical: scale(30),
          }}>
          <CustomButton label="CHECKOUT" onPress={()=> navigation.navigate("CheckOutSteper")} />
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
}
export default ReduxWrapper(index);

