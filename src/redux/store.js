import { configureStore } from '@reduxjs/toolkit';
import products from './slice/products';

export default configureStore({
  reducer: { products },
});
