import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors } from '../../config';

const Loading = ({
  viewType,
  size,
  color,
  isLoading
}) => (
  <>
    {
      isLoading && (
        <View style={[
          styles.wrap,
          viewType === 'inline' ? styles.inlineView : styles.fullView
        ]}>
          <ActivityIndicator
            size={size || 'large'}
            color={color || colors.primary}
          />
        </View>
      )
    }
  </>
);

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inlineView: {
    height: 100,
  },
  fullView: {
    flex: 1,
  },
});

export default Loading;
