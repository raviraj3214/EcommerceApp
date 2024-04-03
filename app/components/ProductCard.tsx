import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import { appColors } from '../utils/appColors';
import Label from './Label';

const ProductCard = ({ navigation, item }) => {
  const { title, name, description, price, isNew, rating } = item;
  const image = item.image

  return (
    <Pressable onPress={() => navigation.navigate('ProductDetails', { item })} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode='contain' // Changed resizeMode to 'contain'
          style={styles.image}
          source={{ uri: image }}
        />
        {isNew && (
          <View style={styles.newBadge}>
            <Label text="New" style={styles.newBadgeText} />
          </View>
        )}
      </View>
      <View style={styles.detailsContainer}>
        <Label text={name?.substring(0, 16)} style={styles.titleText} />
        <Label text={description?.substring(0, 20)} style={styles.descriptionText} />
        <Label text={price} style={styles.priceText} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: scale(140),
    borderRadius: scale(10),
    backgroundColor: appColors.white,
    marginVertical: scale(10),
    marginHorizontal: scale(1),
    elevation: 7, // Add elevation for shadow effect on Android
    shadowColor: appColors.black, // Add shadow color for iOS
    shadowOpacity: 0.2, // Add shadow opacity for iOS
    shadowOffset: { width: 0, height: 2 }, // Add shadow offset for iOS
    shadowRadius: 4, // Add shadow radius for iOS
  },
  imageContainer: {
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
    overflow: 'hidden', // Ensure image doesn't overflow the container
  },
  image: {
    height: scale(200),
    width: '100%',
  },
  newBadge: {
    backgroundColor: appColors.red,
    position: 'absolute',
    top: scale(10),
    right: scale(10),
    paddingVertical: scale(3),
    paddingHorizontal: scale(10),
    borderRadius: scale(3),
  },
  newBadgeText: {
    fontSize: scale(12),
    color: appColors.white,
  },
  detailsContainer: {
    padding: scale(1),
  },
  titleText: {
    fontSize: scale(14),
    fontWeight: '500',
    marginHorizontal: scale(4),
    color: appColors.darkGray,
    width: '100%',
    overflow: 'hidden',
    marginBottom: scale(2),

  },
  descriptionText: {
    fontSize: scale(12),
    color: appColors.darkGray,
    overflow: 'hidden',
    marginHorizontal: scale(4),
    marginBottom: scale(2),
    width: '100%',

  },  
  priceText: {
    fontSize: scale(14),
    color: appColors.primary,
    fontWeight: '500',
    marginHorizontal: scale(4),
  },
});

export default ProductCard;
