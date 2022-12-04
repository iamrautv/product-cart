import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ErrorView = ({ isError, errorMsg, size, viewType }) => {
  const textStyle = {
    large: styles.largeText,
    medium: styles.mediumText,
    small: styles.smallText,
  }
  return (
    <>
      {
        isError && (
          <View
            style={[
              styles.wrap,
              viewType === 'inline' ? styles.inlineView : styles.fullView
            ]}
          >
            <Text style={size ? textStyle[textStyle] : styles.mediumText}>
              {errorMsg || 'Error loading the view'}
            </Text>
          </View>
        )
      }
    </>
  );
};

export default ErrorView;
