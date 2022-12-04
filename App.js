import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { constants } from './src/config';
import store from './src/redux/store';
import Products from './src/pages/Products';
import ProductDetails from './src/pages/ProductDetails';

const { routes } = constants;
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
        <View style={styles.wrap}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name={routes.products} component={Products} />
              <Stack.Screen name={routes.ProductDetails} component={ProductDetails} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  }
});

export default App;
