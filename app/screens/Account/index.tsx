import React,{ useState } from 'react';
import {View, Text, StyleSheet, Pressable, FlatList,TextInput, Modal, Button} from 'react-native';
import axios from 'axios';
import {scale} from 'react-native-size-matters';
import Container from '../../components/Container';
import Feather from 'react-native-vector-icons/Feather';
import {appColors} from '../../utils/appColors';
import Label from '../../components/Label';
import {profileKeys} from '../../utils/MockData';
import AvatarImage from '../../components/AvatarImage';
import ReduxWrapper from '../../utils/ReduxWrapper';
function index({navigation,logoutUser$,auth,updateUser$}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        'https://api.raviecom.site/api/v1/auth/profile',
        {
          name,
          email,
          password,
          address,
        }
      );
      console.log('Profile Updated:..................................................................................', response.data);
      // Additional logic after successful update
      setModalVisible(false); // Close modal after submission
      updateUser$(response.data.updatedUser);

    } catch (error) {
      const t = Object.keys(error.data)
      console.error('Error updating profile:', t);
      // Handle error
    }
  };
  const onLogout = () => {
    logoutUser$();
    setTimeout(() => {
      const t = auth.isGuest;
      console.log("hey auth ......................................................................",t);
      navigation.navigate('Login');
      // Add any additional code you want to run after 2 seconds
    }, 2000); // 2000 milliseconds = 2 seconds
  };
  const onEdit = () => {
    setModalVisible(true)

  }
  
  const ItemCard = ({item}) => {
    const {lebel, icon, isNew, route} = item;
    return (
      <Pressable
        onPress={() => {
          // route === 'Login' && onLogout();
          // route && navigation.navigate(route);
          if( lebel==="Edit Profile"){
            onEdit();
          }
          if (route === 'Login') {
            onLogout();
          } else if (route) {
            navigation.navigate(route);
          }
        }}
        style={styles.itemContainer}>
        <Pressable style={styles.iconContainer}>
          <Feather name={icon} size={scale(22)} color={appColors.black} />
        </Pressable>
        <View style={styles.itemInnerContainer}>
          <Label text={lebel} />
          {isNew && (
            <View
              style={{
                paddingHorizontal: scale(10),
                backgroundColor: appColors.red,
                padding: scale(5),
                borderRadius: scale(4),
              }}>
              <Label
                text="New"
                style={{fontSize: scale(10), color: appColors.white}}
              />
            </View>
          )}
          <Feather name={'chevron-right'} size={scale(18)} />
        </View>
      </Pressable>
    );
  };
  return (
    <Container>
       <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    }}
  >
    <View
      style={{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
      }}
    >
      <Text style={{ color: 'black', marginBottom: 10 }}>Edit Profile</Text>
      <TextInput
        style={{ borderBottomWidth: 1, marginBottom: 10, color: 'black' }}
        placeholder="Name"
        placeholderTextColor="black"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={{ borderBottomWidth: 1, marginBottom: 10, color: 'black' }}
        placeholder="Email"
        placeholderTextColor="black"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={{ borderBottomWidth: 1, marginBottom: 10, color: 'black' }}
        placeholder="Password"
        placeholderTextColor="black"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={{ borderBottomWidth: 1, marginBottom: 10, color: 'black' }}
        placeholder="Address"
        placeholderTextColor="black"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  </View>
</Modal>

      <View
        style={{
          paddingVertical: scale(20),
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <AvatarImage size={scale(110)} />
        <View style={{marginLeft: scale(20)}}>
          <Label text={auth.user.name} style={{fontSize: scale(28)}} />
          <Label text={auth.user.email} style={{fontSize: scale(12)}} />
        </View>
      </View>
      <FlatList
        data={profileKeys}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => <ItemCard key={index} item={item} />}
      />
    </Container>
  );
}
export default ReduxWrapper(index);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: scale(15),
  },
  itemInnerContainer: {
    flex: 1,

    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    borderRadius: scale(5),
    padding: scale(10),
    marginRight: scale(20),
    backgroundColor: appColors.lightGreen,
  },
});
