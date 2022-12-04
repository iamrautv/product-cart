import React from 'react';
import { View } from 'react-native';
import Loading from '../Loading';
import ErrorView from '../ErrorView';
import styles from './styles';

const DataContainer = ({
  isLoading,
  isError,
  errorMsg,
  children
}) => {
  return (
    <View style={styles.wrap}>
      <Loading isLoading={isLoading} />
      <ErrorView isError={isError} errorMsg={errorMsg} />
      {(!isLoading && !isError) && children}
    </View>
  );
};

export default DataContainer;
