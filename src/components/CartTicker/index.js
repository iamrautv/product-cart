import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const CartTicker = ({
  count,
  setCount
}) => {
  return (
    <View style={styles.wrap}>
      <TouchableOpacity
        onPress={() => { if (count !== 0) setCount(count-1); }}
        style={[styles.tickerBtn, count === 0 ? styles.disabledBtn : {}]}
      >
        <Icon name="minus" size={14} color={count === 0 ?"#9c9b9b" : "#474E68"} />
      </TouchableOpacity>
      <View style={styles.countWrap}>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <TouchableOpacity
        onPress={() => { setCount(count + 1); }}
        style={[styles.tickerBtn]}
      >
        <Icon name="plus" size={14} color="#474E68" />
      </TouchableOpacity>
    </View>
  );
};

export default CartTicker;
