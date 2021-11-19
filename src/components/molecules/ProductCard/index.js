import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {productDummy} from '../../../assets';

const ProductCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.itemTitle}>Item Ordered</Text>
      <View style={styles.contentContainer}>
        <Image source={productDummy} />
        <View>
          <Text style={styles.productName}>Product Name</Text>
          <Text style={styles.productDesc}>Product Description</Text>
        </View>
        <View>
          <Text style={styles.status}>Status</Text>
          <Text style={styles.statusValue}>Assigning</Text>
        </View>
      </View>
    </View>
  );
};
export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {paddingHorizontal: 24, backgroundColor: '#FFFF'},
  itemTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginBottom: 10,
    color: '#000',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  productName: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000',
  },
  productDesc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  status: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000',
  },
  statusValue: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#1ABC9C',
  },
});
