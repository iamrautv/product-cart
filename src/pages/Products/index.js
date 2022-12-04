import React, { useEffect } from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/slice/products';
import { DataContainer } from '../../components';
import { constants } from '../../config';
import ProductItem from './ProductItem';
import styles from './styles';

const { routes } = constants;

const Products = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const { products } = useSelector((state) => ({
    products: state.products
  }));

  useEffect(() => {
    dispatch(getProducts('products/get'));
  }, []);

  const gotoProductDetails = (product) => {
    navigation.navigate(routes.ProductDetails, { product });
  }

  return (
      <View style={styles.wrap}>
        <DataContainer
          isError={products.isError}
          errorMsg={products.errorMsg}
          isLoading={products.isLoading}
        >
          <FlatList
            data={products.data}
            renderItem={({ item }) => (
              <ProductItem
                key={item.id}
                product={item}
                gotoProductDetails={gotoProductDetails}
              />
            )}
            keyExtractor={item => item.id}
            extraData={products.data}
          />
        </DataContainer>
      </View>
  );
}

export default Products;
