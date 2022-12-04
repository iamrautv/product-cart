import React, { useState } from 'react';
import { View, Dimensions, Text } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CartTicker } from '../../components';
import styles from './styles';

const { width: screenWidth } = Dimensions.get('window')


const ProductDetails = (props) => {
  const { route } = props;
  const { params } = route;
  const { product } = params;
  const [cartCount, setCartCount] = useState(0);

  console.log({ product });

  const renderImage = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.imageItem}>
        <ParallaxImage
          source={{ uri: item }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  }

  return (
    <View style={styles.wrap}>
      <View syule={styles.imageWrap}>
        <Carousel
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          data={product.images}
          renderItem={renderImage}
          hasParallaxImages={true}
        />
      </View>
      <View style={styles.contentWrap}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.productInfo}>{`${product.brand}, ${product.category}`}</Text>
        <Rating
          style={{ paddingVertical: 3 }}
          imageSize={20}
          // ratingCount={rating}
        />
        <View style={styles.priceWrap}>
          <Icon name="rupee" size={14} color={"#474E68"} />
          <Text style={styles.priceText}>{product.price}</Text>
        </View>
        <CartTicker count={cartCount} setCount={setCartCount} />
      </View>
    </View>
  );
};

export default ProductDetails;
