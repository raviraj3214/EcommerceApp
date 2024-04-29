import React, { useState } from 'react';
import { appColors } from '../../utils/appColors';
import Feather from 'react-native-vector-icons/Feather';
import { View, Text, FlatList, Pressable, TextInput, Keyboard } from 'react-native'; // Import Keyboard
import { scale } from 'react-native-size-matters';
import Badge from '../../components/Badge';
import Container from '../../components/Container';
import TitleComp from '../../components/TitleComp';
import { recentSearches } from '../../utils/MockData';
import ReduxWrapper from '../../utils/ReduxWrapper';

function index({ navigation, getSearch$ }) {
  const [inputData, setInputData] = useState('');

  const handleInputData = (text) => {
    setInputData(text);
  };

  const handleSearch = () => {
    // Clear keyboard
    Keyboard.dismiss();

    // Trigger search action with input data
    getSearch$(inputData);

    // Navigate to search result screen
    navigation.navigate("SearchResult");
  };

  return (
    <Container>
      <View style={{ paddingTop: scale(20) }}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              flex: 1,
              paddingHorizontal: scale(20),
              borderRadius: scale(20),
              alignItems: 'center',
              backgroundColor: appColors.lightGray,
              flexDirection: 'row',
              height: scale(40),
            }}>
            <Feather name="search" size={scale(20)} color={appColors.black} />
            <TextInput
              autoFocus={true}
              onChangeText={handleInputData}
              value={inputData}
              onSubmitEditing={handleSearch} // Call handleSearch when user taps enter
              style={{ flex: 1, paddingLeft: scale(10), color: appColors.black, }}
              placeholder="Search..."
            />
          </View>
          <Pressable
            onPress={handleSearch} // Call handleSearch when user taps on right icon
            style={{
              borderRadius: scale(20),
              width: scale(40),
              height: scale(40),
              backgroundColor: appColors.primary,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: scale(20),
            }}>
            <Feather name="search" size={scale(18)} color={appColors.white} />
          </Pressable>
        </View>
      </View>
      <View style={{ paddingVertical: scale(20) }}>
        <TitleComp subLabel="Recent Searches" />
        <FlatList
          style={{ paddingVertical: scale(10) }}
          numColumns={3}
          ItemSeparatorComponent={() => <View style={{ padding: scale(5) }} />}
          data={recentSearches}
          renderItem={({ item, index }) => <Badge key={index} label={item} />}
        />
      </View>
    </Container>
  );
}


export default ReduxWrapper(index);
