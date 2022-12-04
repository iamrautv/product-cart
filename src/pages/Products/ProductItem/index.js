import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CartTicker } from '../../../components';
import styles from './styles';

const ProductItem = ({ product, gotoProductDetails }) => {
  const {
    title,
    description,
    thumbnail,
    price,
    rating
  } = product;
  const [cartCount, setCartCount] = useState(0);
  return (
    <TouchableOpacity
      style={styles.wrap}
      onPress={() => { gotoProductDetails(product); }}
    >
      <View style={styles.leftGrid}>
        <Image
          source={{ uri: thumbnail }}
          style={styles.thumbnail}
          resizeMode="contain"
        />
      </View>
      <View style={styles.rightGrid}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{`${description.substr(0, 70)}...`}</Text>
        <Rating
          style={{ paddingVertical: 3 }}
          imageSize={20}
          // ratingCount={rating}
        />
        <View style={styles.priceWrap}>
          <Icon name="rupee" size={14} color={"#474E68"} />
          <Text style={styles.priceText}>{price}</Text>
        </View>
        <CartTicker count={cartCount} setCount={setCartCount} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
